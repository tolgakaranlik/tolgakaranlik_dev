'use client';

import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { approveComment, denyComment } from '@/app/admin/actions/actions';
import { redirect } from 'next/navigation';

export function PendingComments({ children } : { children: React.ReactNode })
{
	return (
	  <>
		<table className="min-w-full table-auto border-collapse border border-gray-600 rounded-sm">
		  <thead className="bg-gray-500">
			<tr>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date Sent</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Author</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Comment</th>
			</tr>
		  </thead>
		  <tbody>
		  {children}
		  </tbody>
		</table>
	  </>
	)
}

export function PendingComment({ id, dateAdded, authorName, comment, canEdit } : { id: string, dateAdded: string, authorName: string, comment: string, canEdit: string })
{
	const handleApprove = async () => {
	  if (canEdit == "0")
	  {
		alert("Guest users cannot make changes");
	  } else {
	    const confirmed = window.confirm("Are you sure?");
	    if (confirmed) {
	      await approveComment(id);
		}
	  }
	}

	const handleDeny = async () => 
    {
	  if (canEdit == "0")
	  {
		alert("Guest users cannot make changes");
	  } else {
	    const confirmed = window.confirm("Are you sure?");
	    if (confirmed) {
	      await denyComment(id);
		}
	  }
    }

	return (
  	  <tr className="odd:bg-gray-800 even:bg-gray-900">
	    <td className="relative border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  <button onClick={handleApprove}>
			<CheckIcon className="absolute w-4 h-4 left-[8px] top-[10px] cursor-pointer" /> 
		  </button>
		  <button onClick={handleDeny}>
			<TrashIcon className="absolute w-4 h-4 left-[32px] top-[10px] cursor-pointer" /> 
		  </button>
		  <span className="relative left-[48px]">{dateAdded}</span></td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {authorName}
		</td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {comment}
		</td>
	  </tr>
	)
}