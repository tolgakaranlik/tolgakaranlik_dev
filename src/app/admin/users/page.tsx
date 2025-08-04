import { adminTest, getUsers } from "../actions/actions"
import { Users, User } from "@/components/admin/Users"
import Link from 'next/link'

export default async function AdminUsers() {
  const user = await adminTest();
  const users = await getUsers();

  return (
    <>
	  <div>Users</div>
	  <br />
	  <Users>
	  {users.map((u) => (
		<User key={u.id} id={u.id} name={u.name} email={u.email} role={u.role == '1' ? 'Admin' : 'Guest'} />
	  ))}
	  </Users>

	  <br />
	  <Link href="./users/add" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer">Add New User</Link>
    </>
  )
}