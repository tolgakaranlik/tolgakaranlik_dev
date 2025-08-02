import Image from "next/image";
import { HeaderSection } from '@/components/HeaderSection';
import { HeaderLink } from '@/components/HeaderLink';
import { HeroSection } from '@/components/Hero';
import { lusitana, inter, robotoMono } from '@/components/ui/fonts';
import { BlogSection, BlogPost } from '@/components/BlogSection';
import { fetchBlogPosts } from '@/lib/data';

export default async function Home() {
  const posts = await fetchBlogPosts();

  return (
	<>
    <HeaderSection>
		<HeaderLink visit="../#aboutme" window="same">About Me</HeaderLink>
		<HeaderLink visit="../#myprojects" window="same">My Projects</HeaderLink>
		<HeaderLink visit="#">Blog</HeaderLink>
		<HeaderLink visit="https://www.github.com/tolgakaranlik" window="new">Github</HeaderLink>
		<HeaderLink visit="https://www.linkedin.com/in/tolga-karanlikoglu" window="new">Linkedin</HeaderLink>
	</HeaderSection>
	
	<BlogSection>
		{posts.map((p) => (
		<BlogPost
			key={p.key}
			id={p.key}
			title={p.title}
			icon={`/images/${p.cover}`}
			authorIcon={`/images/${p.authorIcon}`}
			authorName={p.authorName}
			readTime="2"
			tags={p.tags.split(",")} >
			{p.summary}
			</BlogPost>
		))}
	</BlogSection>


	</>
  );
}
