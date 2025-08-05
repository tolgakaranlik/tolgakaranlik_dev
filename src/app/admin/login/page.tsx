import { auth } from "@/auth";
import { redirect } from "next/navigation"
import LoginForm from './login-form';
 
export default async function LoginPage() {
  const session = await auth();
  
  if (session)
  {
    //redirect("../admin")
	return (
	  <span>Session is already on</span>;
	);
  }
  
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}