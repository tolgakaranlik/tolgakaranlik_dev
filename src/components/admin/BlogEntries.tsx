'use client';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { deleteBlogEntry } from '@/app/admin/actions/actions';
import { redirect } from 'next/navigation';

export function BlogEntries({ children } : { children: React.ReactNode })
{
	return (
	  <>
		<table className="min-w-full table-auto border-collapse border border-gray-600 rounded-sm">
		  <thead className="bg-gray-500">
			<tr>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date Published</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Author</th>
			  <th className="border border-gray-600 px-4 py-2 text-left text-sm font-semibold text-gray-700">Tags</th>
			</tr>
		  </thead>
		  <tbody>
		  {children}
		  </tbody>
		</table>
	  </>
	)
}

export function BlogEntry({ id, title, tags, author, date, canEdit } : { id: string, title: string, tags: string, author: string, date: string, canEdit: string })
{
	const handleEdit = () => {
		if (canEdit == "0")
		{
			alert("Guest users cannot make changes");
		} else {
			redirect("./blog/" + id + "/edit");
		}
	}

	const handleDelete = async () => 
    {
	  if (canEdit == "0")
	  {
		alert("Guest users cannot make changes");
	  } else {
	    const confirmed = window.confirm("Are you sure you want to delete this blog entry?");
	    if (confirmed) {
	      await deleteBlogEntry(id);
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
		  <span className="relative left-[48px]">{title}</span></td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {date}
		</td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {author}
		</td>
	    <td className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
		  {tags}
		</td>
	  </tr>
	)
}