import { adminTest, getUserById } from "@/app/admin/actions/actions"
import { NewUserForm } from "./../../NewUserForm"
import { redirect } from "next/navigation"

export default async function EditUserForm({ params }: { params: { id: string } })
{
	const id = params.id;
	const user = await adminTest();
	const userToEdit = await getUserById(id);
	
	if (userToEdit == null)
	{
		redirect("/admin");
	}
	
	return (
	  <>
		<p className="text-2xl">Edit User: {userToEdit.name}</p>
		<br />
		<NewUserForm id={id} name={userToEdit.name} email={userToEdit.email} role={userToEdit.role} />
	  </>
	)
}
