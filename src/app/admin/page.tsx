import { adminTest } from "./actions/actions"
import { AdminStats } from "@/components/admin/Stats"

export default async function AdminDashboard() {
  const user = await adminTest();
  const userName = user == null ? "Admin" : user?.name;

  return (
    <>
	  <div>Welcome, {userName}</div>
	  <br />
	  <AdminStats />
    </>
  )
}