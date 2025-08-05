import { auth, getUser } from "@/auth"
import { adminTest } from "./actions/actions"
import { AdminStats } from "@/components/admin/Stats"

export default async function AdminDashboard() {
  const session = await auth();
  return (
	<>
	<span>session.user.email</span>
	</>
  )
}