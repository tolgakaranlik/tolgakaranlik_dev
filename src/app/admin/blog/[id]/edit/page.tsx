import { adminTest } from "@/app/admin/actions/actions"
import { fetchSingleBlogPostWithoutUpdate } from "@/lib/data"
import { NewBlogEntryForm } from "../../NewBlogEntryForm"
import { redirect } from "next/navigation"

export default async function Page(props: { params: Promise<{ id: string }> })
{
  const params = await props.params;
  const id = params.id;
  const user = await adminTest();
  const blogEntryToEdit = await fetchSingleBlogPostWithoutUpdate(id);
	
  if (blogEntryToEdit == null)
  {
	redirect("/admin");
  }
	
  return (
    <>
  	  <p className="text-2xl">Edit Blog Entry: {blogEntryToEdit.title}</p>
	  <br />
	  <NewBlogEntryForm id={id} title={blogEntryToEdit.title} cover={blogEntryToEdit.cover} tags={blogEntryToEdit.tags} author={blogEntryToEdit.authorName} summary={blogEntryToEdit.summary} content={blogEntryToEdit.content} authorId={blogEntryToEdit.authorId} />
	</>
  )
}
