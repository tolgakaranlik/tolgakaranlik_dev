'use server';

import { z } from 'zod';
import { addCommentToDatabase } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export type State = {
  success: boolean;
  error: string[] | null;
};

export async function addComment(prevState: State, formData: FormData) {

  const commentSchema = z.object({
    postId: z.string(),
    authorName: z.string().min(2).max(80),
    content: z.string().min(5),
  });

  const raw = {
    postId: formData.get('post_id'),
    authorName: formData.get('author_name'),
    content: formData.get('comment'),
  };

  const result = commentSchema.safeParse(raw);

  if (!result.success) {
    console.error(result.error.flatten().fieldErrors);
    return { success: false, error: result.error.flatten().fieldErrors };
  }

console.log("D2");
  const { postId, authorName, content } = result.data;

  await addCommentToDatabase(postId, authorName, content);

  revalidatePath(`/blog/${postId}`);

  return { success: true, error: 'No error' };
}