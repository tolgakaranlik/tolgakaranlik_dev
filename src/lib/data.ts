import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export type BlogPostType = {
	key: string;
	title: string;
	datePublished: string;
	cover: string;
	authorIcon: string;
	authorName: string;
	tags: string[];
	summary: string;
}

export async function fetchBlogPosts() {
	const data = await sql<BlogPostType[]>`SELECT b.id as key, b.title as title, b.date_published as "datePublished", b.cover as cover, a.avatar as "authorIcon",a.full_name as "authorName",b.tags as tags,b.summary as summary FROM blog AS b INNER JOIN blog_authors AS a ON b.author_id=a.id order by b.date_published desc`;
	
	return data;
}

export async function fetchSingleBlogPost(id: string)
{
	const data = await sql`SELECT b.id as key, b.title as title, b.date_published as "datePublished", b.cover as cover, a.avatar as "authorIcon",a.full_name as "authorName",b.tags as tags,b.content as content FROM blog AS b INNER JOIN blog_authors AS a ON b.author_id=a.id where b.id=${`${id}`}`;
    const blogPosts = data.map((post) => ({
      ...post
    }));

    return blogPosts[0];	
}