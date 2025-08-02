'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { lusitana, robotoMono } from '@/components/ui/fonts';

export function BlogSection({ children } : { children: React.ReactNode }) {

  return (
    <section className="px-6 py-12">

      <div>
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
		  {children}
		  </div>
      </div>
    </section>
  );
}

export function BlogPost({ id, title, icon, authorIcon, authorName, readTime, tags, children }: { id:string; title: string; icon?:string, authorIcon: string; authorName: string; readTime: string; tags: string[]; children: React.ReactNode }) {
  const router = useRouter();
  const handleClick = () => {
	router.push("blog/" + id);
  };

  return (
    <div className="bg-gray-900 flex flex-col md:flex-row items-center md:items-start gap-4 shadow-md rounded-lg cursor-pointer" onClick={handleClick}>
      <div className={`flex-1`}>
      {icon && (
        <div className="w-full h-48 flex-shrink-0 relative">
          <Image
            src={icon}
            alt={`${title}`}
            fill
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}
        <h2 className={`${robotoMono.className} text-lg font-semibold mb-2 pt-4 pl-4 pr-4`}>{title}</h2>
        <p className={`${robotoMono.className} text-sm text-gray-600 pl-4 pr-4`}>{children}</p>
		  {/* Tags */}
		  <div className="p-2"></div>
		  <div className="flex gap-2 pl-4 items-center">
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
			&nbsp; {authorName} &nbsp; <b className="text-gray-300">{readTime}</b> <span className="text-gray-400">min read</span>
			</p>
		  </div>
		  <div className="p-2"></div>
		  <div className="flex gap-2 flex-wrap pl-4 pr-4 pb-4">
			{tags.map((t) => (
			  <span key={t} className={`${robotoMono.className} text-sm bg-gray-500 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>

      </div>

    </div>
  );
}