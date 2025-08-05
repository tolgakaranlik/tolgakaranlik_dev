'use client';

import { BackButton } from "../components/BackButton";
import { useActionState } from 'react';
import { addBlogEntry } from '../actions/actions';
import { getAuthors } from '../actions/actions';
import { useSearchParams } from 'next/navigation';

export function NewBlogEntryForm({ id, title, author, summary, tags, content, cover, authorId } : { id: string, title: string, author: string, summary: string, tags: string, content: string, cover: string, authorId: string })
{
  const searchParams = useSearchParams();
  const [errorMessage, formAction, isPending] = useActionState(
    addBlogEntry,
    undefined,
  );

	return (
	  <form action={formAction}>
	  <input type="hidden" id="id" name="id" value={id} />
	  {/* title */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
				defaultValue={title}
                placeholder="Enter new post's title"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
		
	  {/* summary */}
        <div className="mb-4">
          <label htmlFor="summary" className="mb-2 block text-sm font-medium">
            Summary
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="summary"
                name="summary"
				defaultValue={summary}
                placeholder="Enter new post's summary"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
		
	  {/* content */}
        <div className="mb-4">
          <label htmlFor="content" className="mb-2 block text-sm font-medium">
            Content
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="content"
                name="content"
				defaultValue={content}
                placeholder="Enter new post's content"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* tags */}
        <div className="mb-4">
          <label htmlFor="tags" className="mb-2 block text-sm font-medium">
            Tags
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="tags"
                name="tags"
                type="text"
				defaultValue={tags}
                placeholder="Enter new post's tags"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* cover */}
        <div className="mb-4">
          <label htmlFor="tags" className="mb-2 block text-sm font-medium">
            Cover Image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="cover"
                name="cover"
                type="file"
                placeholder="Upload cover image here"
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

	  {/* author */}
        <div className="mb-4">
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Author
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="author"
                name="author"
				defaultValue={authorId}
                className="peer block w-full rounded-md border border-gray-600 py-2 pl-4 text-sm placeholder:text-gray-500 bg-gray-900"
              >
			    <option value="1">Tolga</option>
			  </select>
            </div>
          </div>
        </div>

        {!id && (
		<input type="submit" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer" value="Create Blog Entry" />
		)}
		
        {id && (
		<input type="submit" className="rounded-md h-[50px] w-58 p-4 bg-gray-600 hover:bg-gray-500 text-center text-white cursor-pointer" value="Edit Blog Entry" />
		)}
		<br />
		<BackButton href='../blog' />
	  </form>
    )
}