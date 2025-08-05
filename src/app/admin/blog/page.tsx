import { fetchBlogPosts } from "@/lib/data"
import { adminTest } from "../actions/actions"
import { BlogEntries, BlogEntry } from "@/components/admin/BlogEntries"
import Link from 'next/link'

export default async function AdminBlog() {
  const user = await adminTest();
  const blogPosts = await fetchBlogPosts();

  return (
    <>
	  <div>Blog Entries</div>
	  <br />
	  <BlogEntries>
	  {blogPosts.map((b) => (
		<BlogEntry key={b.key} id={b.key} title={b.title} tags={b.tags} author={b.authorName} date={b.datePublished.toLocaleDateString('tr-TR')} canEdit={user.role} />
	  ))}
	  </BlogEntries>

	  <br />
	  {user.role == "0" && (
	  <>
	  <p className="text-red-500">Guest accounts cannot add new entries</p>
	  <br />
	  <span className="rounded-md h-[50px] w-58 p-4 bg-gray-800 hover:bg-gray-500 text-center text-gray-700 cursor-pointer">Add New Entry</span>
	  </>
	  )}

	  {user.role == "1" && (
	  <Link href="./blog/add" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer">Add New Entry</Link>
	  )}
    </>
  )
}