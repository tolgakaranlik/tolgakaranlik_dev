import { adminTest } from "./actions/actions"
import { AdminStats } from "@/components/admin/Stats"

export default async function AdminDashboard() {
  const user = await adminTest();

  return (
    <>
	  <div>Welcome, {user.name}</div>
	  <br />
	  <AdminStats />
    </>
  )
}