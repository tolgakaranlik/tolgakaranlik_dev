'use client';

import { BackButton } from "../components/BackButton";
import { useActionState } from 'react';
import { addUser } from '../actions/actions';
import { useSearchParams } from 'next/navigation';

export function NewUserForm({ id, name, email, role } : { id: string, name: string, email: string, role: string })
{
  const searchParams = useSearchParams();
  const [errorMessage, formAction, isPending] = useActionState(
    addUser,
    undefined,
  );

	return (
	  <form action={formAction}>
	  <input type="hidden" id="id" name="id" value={id} />
	  {/* e-mail adres */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-Mail address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
				defaultValue={email}
                placeholder="Enter new user's e-mail address"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* full name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
				defaultValue={name}
                placeholder="Enter new user's full name"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter new user's password"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* password retype */}
        <div className="mb-4">
          <label htmlFor="passwordRetype" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="passwordRetype"
                name="passwordRetype"
                type="password"
                placeholder="Retype new user's password"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* role */}
        <div className="mb-4">
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Role
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="role"
                name="role"
				defaultValue={role}
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500 bg-gray-900"
              >
			    <option value="0">Guest</option>
			    <option value="1">Administrator</option>
			  </select>
            </div>
          </div>
        </div>
        
		<div
          className="flex flex-col space-x-1 space-y-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
			{
			  errorMessage.map((e) => (
                <div key={e.field} className="text-sm text-red-500">
				  {e.message}
			    </div>
			  ))}
            </>
          )}
        </div>
		
        {!id && (
		<input type="submit" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer" value="Create User" />
		)}
		
        {id && (
		<input type="submit" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer" value="Edit User" />
		)}
		<br />
		<BackButton href='../users' />
	  </form>
  )
}