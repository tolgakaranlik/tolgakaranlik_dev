import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getDashboardStats() {
	const [data1, data2, data3] = await Promise.all([
		sql`SELECT count(*) as num_pending_comments from blog_comments where approval='P'`,
		sql`SELECT count(*) as num_blog_posts from blog`,
		sql`SELECT count(*) as num_users from users`,
	]);
	
	return {num_pending_comments: data1[0].num_pending_comments, num_blog_posts: data2[0].num_blog_posts, num_users: data3[0].num_users};
}