import Link from 'next/link';

export function AdminNavlinks()
{
	// { children } : {children: React.ReactNode}
	return (
	  <div className="grid grid-col">
		<Link href="/admin/blog" className="h-[50px] w-58 p-4 text-gray-400 hover:text-gray-200">Blog Management</Link>
		<Link href="/admin/users" className="h-[50px] w-58 p-4 text-gray-400 hover:text-gray-200">User Management</Link>
		<Link href="/admin/comments" className="h-[50px] w-58 p-4 text-gray-400 hover:text-gray-200">Pending Comments</Link>
	  </div>
	)
}