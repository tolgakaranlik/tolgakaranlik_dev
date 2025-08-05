import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
};

export type BlogPostType = {
	key: string;
	title: string;
	datePublished: string;
	cover: string;
	authorIcon: string;
	authorName: string;
	tags: string;
	summary: string;
}

export async function fetchBlogPosts() {
	const data = await sql<BlogPostType[]>`SELECT b.id as key, b.title as title, b.date_published as "datePublished", b.cover as cover, a.avatar as "authorIcon",a.full_name as "authorName",b.tags as tags,b.summary as summary FROM blog AS b INNER JOIN blog_authors AS a ON b.author_id=a.id order by b.date_published desc`;
	
	return data;
}

export async function addCommentToDatabase(postId: string, authorName: string, content: string)
{
	await sql`
		INSERT INTO blog_comments (blog_id, date_added, author_name, comment)
		VALUES (${postId}, NOW(), ${authorName}, ${content})
	  `;
}

export async function fetchSingleBlogPost(id: string)
{
	await sql`UPDATE blog SET times_read = times_read + 1 where id=${id}`;
	const data = await sql`SELECT b.id as key, b.title as title, b.date_published as "datePublished", b.cover as cover, a.avatar as "authorIcon",a.full_name as "authorName",b.tags as tags,b.content as content, b.related_post_1 as "relatedPost1", b.related_post_2 as "relatedPost2" FROM blog AS b INNER JOIN blog_authors AS a ON b.author_id=a.id where b.id=${`${id}`}`;
    const blogPosts = data.map((post) => ({
      ...post
    }));

    return blogPosts[0];
}

export async function fetchSingleBlogPostWithoutUpdate(id: string)
{
	const data = await sql`SELECT b.id as key, b.title as title, b.date_published as "datePublished", b.cover as cover, b.tags as tags,b.content as content,b.summary as summary, b.author_id as authorId FROM blog as b where b.id=${`${id}`}`;
    const blogPosts = data.map((post) => ({
      ...post
    }));

    return blogPosts[0];
}

export async function fetchBlogPostComments(id: string)
{
	const data = await sql`SELECT id, author_name as "authorName", date_added as "dateAdded", comment FROM blog_comments where blog_id=${id} and approval='Y' order by date_added desc`;
	
	return data;
}

export async function fetchPendingComments()
{
	const data = await sql`SELECT id, author_name as "authorName", date_added as "dateAdded", comment FROM blog_comments where approval='P' order by date_added desc`;
	
	return data;
}