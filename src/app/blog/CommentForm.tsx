'use client';

import { addComment } from '@/app/blog/actions/addComment';
import { useActionState } from 'react';

export function CommentForm({ id } : { id: string })
{
	const [state, formAction] = useActionState(
	  addComment, 
	  {
	    error: {
	    authorName: "",
	    content: "",
	    postId: "",
	  },
	  success: false,
	}
	);

	return (
	  <>
		<form action={formAction} className="mt-8 space-y-4">
		  <input type="hidden" name="post_id" value={id} />
		  <textarea
			name="comment"
			rows={4}
			placeholder="Leave your comment..."
			className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white"
			required
		  />
		  <input
			type="text"
			name="author_name"
			placeholder="Your name"
			className="w-full p-3 border border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
			required
		  />
		  <div className="p-1"></div>
		  <button
			type="submit"
			className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
			>
		  Submit Comment
		  </button>

		  {/* Display the result of Server action */}
		  {state?.success === true && (
		    <p className="text-green-500 text-sm">Your comment will be published if it will be approved</p>
		  )}
		  
		  {state?.success !== true && state?.error.authorName != "" && (
		    <p className="text-red-500 text-sm">Author Name {state.error.authorName}</p>
		  )}
		  
		  {state?.success !== true && state?.error.content != "" && (
		    <p className="text-red-500 text-sm">Comment {state.error.content}</p>
		  )}
		</form>
	  </>
	);
}