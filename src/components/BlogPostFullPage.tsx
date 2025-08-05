'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { lusitana, robotoMono } from '@/components/ui/fonts';
import { CommentForm } from '@/app/blog/CommentForm';

export function BlogPostFullPage({ id, title, date, tags, authorName, authorIcon, cover, children }: { id: string, title: string, date: string, tags: string[], authorName: string, authorIcon: string, cover: string; children: React.ReactNode })
{
  return (
    <section className="px-6 py-12">
	  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
		<h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
		
		  <div className="flex gap-2 pl-4 items-center pt-2">
		  	<div className="w-10 h-10 flex-shrink-0">
			  <Image
			    src={authorIcon}
			    alt={authorName}
			    width={64}
			    height={64}
			    className="rounded-full w-full h-full object-cover shadow-lg"
		  	  />
			</div>

			<p className="text-sm text-gray-500 leading-relaxed">
			&nbsp; {authorName} &nbsp; <span className="text-gray-600">{date}</span>
			</p>
		  </div>
		  
		<Image src={cover} alt={title} width={1920} height={1080} className="rounded-lg mb-8 w-full h-auto pt-8" />
		
		  {/* Tags */}
		  <div className="flex gap-2 flex-wrap">
			{tags.map((t) => (
			  <span key={t} className={`${robotoMono.className} text-sm bg-gray-600 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>
		  <div className="p-2"></div>

		<article className={`${robotoMono.className} text-gray-500 prose prose-lg prose-slate dark:prose-invert text-justify`}>
			{children}
		</article>
	  </div>
	</section>
  );
}

export function BlogPostComments({ id, children } : { id: string; children: React.ReactNode })
{
  return (
	<section className="px-6 py-12">
  	  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
	    <h2 className="text-2xl font-semibold mb-4">Shout Out Your Opinion, I Would Love To Hear It</h2>
		<CommentForm id={id}>
		</CommentForm>
	    
		<section className="mt-16">
		{children}
		</section>
	  </div>
	</section>
  );
}

export function BlogPostRelatedPosts({ children } : { children: React.ReactNode })
{
  return (
	<section className="px-6 py-12">
  	  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 gap-4">
	    <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
  	    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
		{children}
	    </div>
	  </div>
	</section>
  );
}

export function BlogRelatedPost( { id, cover, title, summary }: { id:string; cover: string; title: string; summary: string; } )
{
  const router = useRouter();
  const handleClick = () => {
	router.push("../blog/" + id);
  };

	return (
	  <div className={`flex-1 bg-gray-900 rounded-lg cursor-pointer`} onClick={handleClick}>
	  <div className="w-full h-48 flex-shrink-0 relative">
		<Image
		  src={`/images/${cover}`}
		  alt={title}
		  fill
		  className="w-full h-48 object-cover rounded-t-lg"
		/>
	  </div>
	  <h2 className={`${robotoMono.className} text-lg font-semibold mb-2 pt-4 pl-4 pr-4`}>{title}</h2>
	  <p className={`${robotoMono.className} text-sm text-gray-600 pl-4 pr-4 pb-6`}>{summary}</p>
	  </div>
	);
}