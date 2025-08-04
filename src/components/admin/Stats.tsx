import { getDashboardStats } from '@/lib/dasbhoard-data'

export async function AdminStats()
{
	const dashboardStats = await getDashboardStats();
	console.log(dashboardStats);
	return (
	  <div className="grid grid-cols-3 h-40 gap-4">
		<div className="rounded-md bg-gray-600 p-4">
			<p className="text-gray-500">Number of Users</p>
			<br />
			<h1 className="text-6xl">{dashboardStats.num_users}</h1>
		</div>
		
		<div className="rounded-md bg-gray-600 p-4">
			<p className="text-gray-500">Number of Blog Posts</p>
			<br />
			<h1 className="text-6xl">{dashboardStats.num_blog_posts}</h1>
		</div>
		
		<div className="rounded-md bg-gray-600 p-4">
			<p className="text-gray-500">Number of Pending Comments</p>
			<br />
			<h1 className="text-6xl">{dashboardStats.num_pending_comments}</h1>
		</div>
	  </div>
	)
}