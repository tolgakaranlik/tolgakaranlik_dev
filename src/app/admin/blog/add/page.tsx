import { adminTest } from "../../actions/actions"
import { NewBlogEntryForm } from '../NewBlogEntryForm'

export default async function AddBlogEntryForm()
{
	const user = await adminTest();

	return (
	  <>
		<p className="text-2xl">Add New Blog Entry</p>
		<br />
		<NewBlogEntryForm id="" title="" author="" summary="" tags="" content="" cover="" authorId="" />
	  </>
	)
}