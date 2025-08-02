import { notFound } from 'next/navigation';
import { HeaderSection } from '@/components/HeaderSection';
import { HeaderLink } from '@/components/HeaderLink';
import { BlogPostFullPage, BlogPostComments, BlogPostRelatedPosts } from '@/components/BlogPostFullPage';
import { HeroSection } from '@/components/Hero';
import { fetchSingleBlogPost } from '@/lib/data';
import parse from 'html-react-parser';

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await fetchSingleBlogPost(params.id);

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
		id={post.id}
		title={post.title}
		date={post.datePublished.toLocaleDateString('tr-TR')}
		tags={post.tags.split(",")}
		authorName={post.authorName}
		authorIcon={`/images/${post.authorIcon}`}
		cover={`/images/${post.cover}`}>
		{post.content.split('\n').map((line, index) => (
        <span key={index}>
          {parse(line)}
          <br />
        </span>
      ))}
	</BlogPostFullPage>
	
	<BlogPostRelatedPosts id={post.id}>
	</BlogPostRelatedPosts>
	
	<BlogPostComments id={post.id}>
	</BlogPostComments>
    </>
  );
}
