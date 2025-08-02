import Image from "next/image";
import { HeaderSection } from '@/components/HeaderSection';
import { HeaderLink } from '@/components/HeaderLink';
import { HeroSection } from '@/components/Hero';
import { lusitana, inter, robotoMono } from '@/components/ui/fonts';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function Home() {
  return (
	<>
    <HeaderSection>
		<HeaderLink visit="#aboutme" window="same">About Me</HeaderLink>
		<HeaderLink visit="#myprojects" window="same">My Projects</HeaderLink>
		<HeaderLink visit="blog" window="same">Blog</HeaderLink>
		<HeaderLink visit="https://www.github.com/tolgakaranlik" window="new">Github</HeaderLink>
		<HeaderLink visit="https://www.linkedin.com/in/tolga-karanlikoglu" window="new">Linkedin</HeaderLink>
	</HeaderSection>
	
	<HeroSection img="/images/profile.jpg">
		I’m a veteran software engineer with over 20 years of experience. From leading game development in large-scale blockchain projects to building robust backend architectures, my journey spans C#, Unity, and now full-stack development with <span className="text-gray-100">Next.js</span> and <span className="text-gray-100">Tailwind CSS</span>.
	</HeroSection>

	<ProjectsSection>
	</ProjectsSection>

	</>
  );
}
