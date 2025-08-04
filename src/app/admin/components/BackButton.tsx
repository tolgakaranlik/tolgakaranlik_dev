'use client';
import { redirect } from 'next/navigation';

export function BackButton({ href } : { href: string })
{
	return (
	  <>
	    <div className="h-2" />
	    <input type="button" onClick={() => goBack(href)} className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer" value="Back" />
	  </>
	)
}

function goBack(href: string)
{
	redirect(href)
}
