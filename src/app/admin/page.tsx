import { auth, getUser } from "@/auth";
import { authConfig } from '@/auth.config';
import { redirect } from "next/navigation"

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
	  console.log(session);
    //redirect("./admin/login")
  }

  const user = await getUser(session.user.email);

  if (!user || user.role !== "1") {
	  console.log(user);
    //redirect("./admin/login")
  }

  return <div>Welcome, Admin {user.name}</div>
}