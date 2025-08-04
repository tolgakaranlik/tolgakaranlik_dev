import { auth, getUser, signOut } from "@/auth";
import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/components/ui/fonts';
import { redirect } from "next/navigation"
import { AdminNavlinks } from "@/components/AdminNavlinks"

export const metadata: Metadata = {
  title: 'Tolga Karanlikoglu',
  description: 'Developer Web Site Administration Panel',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  return (
    <div className="min-h-screen flex">
	{session && (
      <aside className="w-64 bg-gray-800 text-white p-4">
		<AdminNavlinks />

        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
		  >
		  <button className="absolute bottom-4 rounded-md h-[50px] w-58 p-4 bg-gray-600 text-center text-white cursor-pointer">Logout</button>
        </form>
	  </aside>
	)}

      <main className="flex-1 bg-gray-900 p-6">{children}</main>
    </div>
  )
}
