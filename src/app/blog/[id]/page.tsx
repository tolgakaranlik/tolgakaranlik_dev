import { notFound } from 'next/navigation';
import { HeaderSection } from '@/components/HeaderSection';
import { HeaderLink } from '@/components/HeaderLink';
import { BlogPostFullPage, BlogPostComments, BlogPostRelatedPosts, BlogRelatedPost } from '@/components/BlogPostFullPage';
import { HeroSection } from '@/components/Hero';
import { fetchSingleBlogPost, fetchBlogPostComments } from '@/lib/data';
import Image from 'next/image';
import parse from 'html-react-parser';

export default async function Page(props: { params: Promise<{ id: string }> })
{
  const params = await props.params;
  const post = await fetchSingleBlogPost(params.id);
  const postRelated1 = post.relatedPost1 == 0 ? null : await fetchSingleBlogPost(post.relatedPost1);
  const postRelated2 = post.relatedPost2 == 0 ? null : await fetchSingleBlogPost(post.relatedPost2);

  if (!post) return notFound(); // returns 404

  return (
	<>
    <HeaderSection>
		<HeaderLink visit="../#aboutme" window="same">About Me</HeaderLink>
		<HeaderLink visit="../#myprojects" window="same">My Projects</HeaderLink>
		<HeaderLink visit="../blog" window="same">Blog</HeaderLink>
		<HeaderLink visit="https://www.github.com/tolgakaranlik" window="new">Github</HeaderLink>
		<HeaderLink visit="https://www.linkedin.com/in/tolga-karanlikoglu" window="new">Linkedin</HeaderLink>
	</HeaderSection>
	
	<BlogPostFullPage 
		id={post.key}
		title={post.title}
		date={post.datePublished.toLocaleDateString('tr-TR')}
		tags={post.tags.split(",")}
		authorName={post.authorName}
		authorIcon={`/images/${post.authorIcon}`}
		cover={`/images/${post.cover}`}>
			{parse(post.content)}
		
	</BlogPostFullPage>
	
	<BlogPostRelatedPosts>
		{post.relatedPost1 != 0 && postRelated1 != null && 
		<BlogRelatedPost 
			id={postRelated1.key}
			cover={postRelated1.cover}
			title={postRelated1.title}
			summary={postRelated1.summary}
		/>
		}

		{post.relatedPost2 != 0 && postRelated2 != null &&
		<BlogRelatedPost 
			id={postRelated2.key}
			cover={postRelated2.cover}
			title={postRelated2.title}
			summary={postRelated2.summary}
		/>
		}
	</BlogPostRelatedPosts>
	
	<BlogPostComments id={post.key}>
		<BlogPostComment id={post.key} />
	</BlogPostComments>
    </>
  );
}

async function BlogPostComment({ id } : { id: string })
{
	const comments = await fetchBlogPostComments(id);
	return (
		<>
	      <h2 className="text-2xl font-semibold mb-4">Comments ({comments.length})</h2>
		  <div className="space-y-2">
		    {comments.map((comment) => (
		  	<div key="{comment.key}" className="flex border border-gray-700 rounded-lg p-4 bg-gray-800">
			  <div className="w-16 p-2">
			    <Image src="/images/user.png" alt="" width={256} height={256} />
			  </div>
			  <div className="flex flex-1 items-center pl-3">
			    <p className="text-sm text-gray-700 dark:text-gray-300">{comment.comment}<br />
			    <span className="text-xs text-gray-500 mt-2">by {comment.authorName} • {comment.dateAdded.toLocaleDateString('tr-TR')}</span></p>
			  </div>
		    </div>
			))}
		  </div>
		</>
	);
}
