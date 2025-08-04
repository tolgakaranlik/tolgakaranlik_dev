import { adminTest } from "@/app/admin/actions/actions"
import { NewUserForm } from "./../NewUserForm"

export default async function AddUserForm()
{
	const user = await adminTest();
	
	return (
	  <>
		<p className="text-2xl">Add New User</p>
		<br />
		<NewUserForm id="" name="" email="" role="0" />
	  </>
	)
}
