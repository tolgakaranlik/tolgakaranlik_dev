'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { authConfig } from '@/auth.config';
import { auth, getUser } from "@/auth";
import { redirect } from "next/navigation"
import { revalidatePath } from 'next/cache';
import { User } from "@/lib/data";
import { z } from 'zod';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function adminTest()
{
  const session = await auth();

  if (!session) {
    redirect("/admin/a1")
	return;
  }

  if (!session.user) {
    redirect("/admin/a2")
	return;
  }

  const user = await getUser(session.user.email!);

  if (!user) {
    redirect("/admin/a3")
	return;
  }
  
  return user;
}

export async function getUsers()
{
  const data = await sql`SELECT id, name, email, role from users`;
	
  return data;
}
 
export async function getAuthors()
{
  const data = await sql`SELECT id, full_name, avatar from blog_authors`;
	
  return data;
}

export async function getUserById(id: string): Promise<User | undefined> {
  try {
	const user = await sql<User[]>`
	  SELECT 
		id::text AS id, 
		email, 
		password, 
		name, 
		role::text AS role 
	  FROM users 
	  WHERE id = ${id}
	`;

    return user[0];
  } catch (error) {
    throw new Error('Failed to fetch user. Reason: ' + error);
  }
}

export async function addBlogEntry(prevState: any,
  formData: FormData)
{
  const id = formData.get('id') as string;
  if (id != null && id != "")
  {
    revalidatePath('/admin/blog');
    redirect('/admin/blog');
	return;
  }
  
  const FormSchemaUser = z.object({
    title: z.string({message: "Title field shouldn't be bank"}),
    summary: z.string({message: "Summary field shouldn't be bank"}),
    content: z.string({message: "Content field shouldn't be bank"}),
    author: z.string(),
    tags: z.string()
  });

  const result = FormSchemaUser.safeParse({
    title: formData.get('title'),
    summary: formData.get('summary'),
    content: formData.get('content'),
    author: formData.get('author'),
    tags: formData.get('tags'),
  });
	
  if (!result.success) {
	return result.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message,
	}));
  } else {
    const { title, summary, content, author, tags } = result.data;

    await sql`
      INSERT INTO blog (title, summary, content, author_id, tags, date_published)
      VALUES (${title}, ${summary}, ${content}, ${author}, ${tags}, NOW())
    `;
  }

  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function addUser(prevState: any,
  formData: FormData)
{
  const id = formData.get('id');
  if (id != null && id != "")
  {
    const result = z.object({
	  email: z.string().email({message: "Please enter a vaild e-mail address"}),
	  name: z.string(),
	  role: z.enum(['0', '1']),
	}).safeParse({
	  email: formData.get('email') as string,
      name: formData.get('name') as string,
      role: formData.get('role') as string,
    });

    if (!result.success) {
	  return result.error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message,
	  }));
	} else {
      const email = result.data.email as string;
      const name = result.data.name as string;
      const role = result.data.role as string;
	  const _id = id as string;
      await sql`UPDATE users SET email=${email}, name=${name}, role=${role} WHERE id=${_id}`;

      const passwordToEdit = String(formData.get('password'));
	  if (passwordToEdit != null && passwordToEdit != "")
	  {
        const hashedPasswordToEdit = await bcrypt.hash(passwordToEdit, 12);
		await sql`UPDATE users SET password=${hashedPasswordToEdit} WHERE id=${_id}`;
	  }
	}	

    revalidatePath('/admin/users');
    redirect('/admin/users');
	return;
  }

  const FormSchemaUser = z.object({
    email: z.string().email({message: "Please enter a vaild e-mail address"}),
    name: z.string(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    passwordRetype: z.string(),
    role: z.enum(['0', '1']),
  });

  const result = FormSchemaUser.refine((data) => data.password === data.passwordRetype, {
	  message: "Password and retype must be the same",
	  path: ["passwordRetype"]
	}).safeParse({
    email: String(formData.get('email')),
    name: String(formData.get('name')),
    password: String(formData.get('password')),
    passwordRetype: String(formData.get('passwordRetype')),
    role: String(formData.get('role')),
  });
	
  if (!result.success) {
	  return result.error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message,
	  }));
  } else {
    const { email, name, password, passwordRetype, role } = result.data;
    const hashedPassword = await bcrypt.hash(password, 12)

    await sql`
      INSERT INTO users (email, password, name, role)
      VALUES (${email}, ${hashedPassword}, ${name}, ${role})
    `;
  }
  
  revalidatePath('/admin/users');
  redirect('/admin/users');
}

export async function deleteUser(id: string)
{
  await sql`
    DELETE FROM users WHERE id=${id}
  `;
  
  revalidatePath('/admin/users');
  redirect('/admin/users');
}

export async function deleteBlogEntry(id: string)
{
  await sql`
    DELETE FROM blog WHERE id=${id}
  `;
  
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function approveComment(id: string)
{
  await sql`
    UPDATE blog_comments set approval='Y' where id=${id}
  `;
  
  revalidatePath('/admin/comments');
  redirect('/admin/comments');
}

export async function denyComment(id: string)
{
  await sql`
    UPDATE blog_comments set approval='N' where id=${id}
  `;
  
  revalidatePath('/admin/comments');
  redirect('/admin/comments');
}
