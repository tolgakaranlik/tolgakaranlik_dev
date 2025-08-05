'use client';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { deleteUser } from '@/app/admin/actions/actions';
import { redirect } from 'next/navigation';

export function Users({ children } : { children: React.ReactNode })
{
	return (
	  <>
		<table className="min-w-full table-auto border-collapse border border-gray-600 rounded-sm">
		  <thead className="bg-gray-500">
			<tr>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Role</th>
			</tr>
		  </thead>
		  <tbody>
		  {children}
		  </tbody>
		</table>
	  </>
	)
}

export function User({ id, name, email, role, canEdit } : { id: string, name: string, email: string, role: string, canEdit: string })
{
	const handleEdit = () => {
		if (canEdit == "0")
		{
			alert("Guest users cannot make changes");
		} else {
			redirect("./users/" + id + "/edit");
		}
	}

	const handleDelete = async () => 
    {
	  if (canEdit == "0")
	  {
		alert("Guest users cannot make changes");
	  } else {
	    const confirmed = window.confirm("Are you sure you want to delete this user?");
	    if (confirmed) {
	      await deleteUser(id);
		}
	  }
    }
	
	return (
  	  <tr className="odd:bg-gray-800 even:bg-gray-900">
	    <td className="relative border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  <button onClick={handleEdit}>
		  <PencilIcon className="absolute w-4 h-4 left-[8px] top-[10px] cursor-pointer" /> 
		  </button>
		  <button onClick={handleDelete}>
			<TrashIcon className="absolute w-4 h-4 left-[32px] top-[10px] cursor-pointer" /> 
		  </button>
		  <span className="relative left-[48px]">{name}</span></td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {email}
		</td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {role}
		</td>
	  </tr>
	)
}

