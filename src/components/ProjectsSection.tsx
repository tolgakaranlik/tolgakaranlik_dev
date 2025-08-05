'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { lusitana, robotoMono } from '@/components/ui/fonts';

const tabs = ['Game Dev', 'Backend', 'Frontend'];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('Game Dev');

  return (
    <section className="px-6 py-12">

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${robotoMono.className} text-lg px-4 py-2 rounded-full border transition ${
              activeTab === tab
                ? 'bg-gray-600 text-gray-400 border-gray-700'
                : 'bg-gray-800 text-gray-300 border-gray-900 hover:bg-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'Game Dev' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
				title="Clover Slots Epic Casino Games (Lead Developer)" 
				icon="/images/epic-logo.jpg" 
				platforms={['Android', 'Apple']} 
				tech={['Unity', 'Backend', 'In App Purchases', 'Unity Ads', 'Firebase Authentication', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Remote Config', 'Asset Bundles', 'Facebook SDK', 'Facebook Login', 'Apple Login', 'Digital Ocean Storage', 'Google Billing', 'Apple Store Kit', 'SendGrid', 'CI/CD', 'Jenkins', 'Editor Programming', 'ScriptableObject', 'AntiCheat Toolkit', 'Trello']}>
					A mobile game, which is published in both the Google Play and the Apple AppStore. Currently it was downloaded more than 50K times in Google Play alone and had 4.9 stars so far. I have been the head of development of its gameplay logic, client application, server side, database side and every single technical aspect of the game. Also, other than handling a fast and secure game play, a back office and a huge management portal was coded from scratched, and I was the one who planned, coordinated and coded the back bone of that backend system. <br />&nbsp;
					<br /><span className="text-gray-300">Google Play Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://play.google.com/store/apps/details?id=com.velogames.barracuda">here</Link>
					<br /><span className="text-gray-300">AppStore Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://apps.apple.com/tr/app/clover-slots-epic-casino-games/id6499254862?l=en">here</Link>
			</ProjectCard>
            <ProjectCard 
				title="Illuvium Zero (Lead Developer)" 
				icon="/images/illuvium-zero.jpg" 
				platforms={['Windows', 'Android', 'Apple']} 
				tech={['Unity', 'C#', 'BlockChain', 'NFT', 'Ethereum', 'Moralis', 'Facebook SDK', 'NextJS', 'PostgreSQL', 'AssetBundles', 'Amazon Cognito', 'Google Signin', 'Apple Signin', 'AWS', 'EC2', 'Google Billing', 'Apple StoreKit', 'Amazon RDS', 'Binance', 'OKX', 'CI/CD', 'Unity CloudBuild', 'Jira']}>
					I have been the lead developer of the biggest crypto based game in the world. Led the team of 6 people from all around the world, by applying Scrum structure. I planned 15 day sprints and released new versions at the end of each sprint. I was answering to the CTO of the company. With my presence, the project gained speed and efficiency. The year-long distribution delays has ended and everything went back on to the track after my presence.<br />
					<br /><span className="text-gray-300">Epic Games Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://store.epicgames.com/en-US/p/illuvium-zero-ca46a6">here</Link>
					<br /><span className="text-gray-300">Google Play Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://play.google.com/store/apps/details?id=io.illuvium.zero&hl=en_IN">here</Link>
					<br /><span className="text-gray-300">AppStore Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://apps.apple.com/us/app/illuvium-zero/id6502333482">here</Link>
				</ProjectCard>
            <ProjectCard 
				title="Kryptomon World of Kogea (Senior Unity Developer)" 
				icon="/images/kryptomon.jpg" 
				platforms={['Windows', 'Android', 'Apple']} 
				tech={['Unity', 'C#', 'BlockChain', 'NFT', 'Microsoft Azure', 'SQL Server', 'Playfab', 'Multiplayer', 'Ethereum', 'Moralis', 'Unity Authentication', 'Unity Analytics', 'Unity Remote Config', 'Google Signin', 'Apple Signin', 'Binance', 'OKX', 'CI/CD', 'Unity CloudBuild', 'Jira', 'Quartz Job Scheduler']}
				>I have been a senior developer of a passionate crypto based MMO game in the world. My task was to create the seamless navigation system of huge Kogea world. I was reporting the lead developer Bryan, they wanted me to find efficient ways to roam seamlessly in a huge world without any loading screen or any sort of wait. For this purpose, I had to implement an interest based system, which had to dynamically load and unload some parts of Unity terrain with a 100% compatibility to the games Playfab based multiplayer system.
				<br />&nbsp;<br />
				Project is in early access, so you need to apply from web site to see it in action.<br />&nbsp;
				<br /><span className="text-gray-300">Web site link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.kryptomon.co/wok">here</Link>
				</ProjectCard>
            <ProjectCard 
				title="VR Edu, A VR Based Flexible Realtime Training System" 
				icon="/images/vr-edu.jpg" 
				platforms={['Occulus Store']} 
				tech={['Unity', 'C#', 'VR', 'XR Kit', 'Firebase Realtime Database', 'NodeJS', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Remote Config', 'Firebase Storage']}
				>That project was a freelance project, made for a special customer from Canada. Company's name was VR Edu and they were specialized in creating tailor made training applications for companies who wish to lower their cost of training. From health to mechinery, sensitive equipment to military facilities, they had so many customers to utilize their custom made VR education platform solution. And my job was to create a bakc bone solution for their platform and I did it. <br />
				<br /><span className="text-gray-300">Video link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.youtube.com/watch?v=is8X1EoLV1k&ab_channel=TolgaKaranlikoglu">here</Link>
				</ProjectCard>
            <ProjectCard 
				title="The Rome, A Windows Based RTS Game (Personal Project)" 
				icon="/images/the-rome.jpg" 
				platforms={['Windows']} 
				tech={['Unity', 'C#', 'Deterministic Computing', 'Full Game Replay', 'Multiplayer', 'Photon Fusion', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Remote Config']}
				>In this project I have coded a real time strategy game from scratch. I did not code only a game play with single player campaign, different unit types with different capabilities, different skill trees and different states; as well as its AI system with the variable difficulty system; I also coded a replay system with the deterministic computation to lower the disk cost of replay files dramatically while maintaining the accuracy of providing a full replay session. Finally, I have coded a multiplayer system on Photon Fusion which would allow being able to play the game upto 8 players on the same session. Although the project is not published on any game store, you can see the video and view the Github repository. You may be asked for approval on Github, so contact me if you need to access that repository. <br />
				<br /><span className="text-gray-300">Video link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.youtube.com/watch?v=19bNxVTw3dQ&ab_channel=TolgaKaranlikoglu">here</Link>
				<br /><span className="text-gray-300">Github link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://github.com/tolgakaranlik/therome">here</Link>
				</ProjectCard>
            <ProjectCard 
				title="Valtheron, A Single Player ARPG Game (Personal Project)" 
				icon="/images/valtheron.jpg" 
				platforms={['Windows']} 
				tech={['Unity', 'C#', 'Level Editor', 'Prefab Painter', 'Runtime Level Generation', 'Asset Bundles', 'Downloadable Levels', 'In Game Market', 'External Payment Processor', 'Quest System', 'Inventory', 'Unity Analytics', 'Unity Crashlytics', 'Unity Remote Config', 'Runtime Level Loading', 'Terrain']}
				>In this project, I fully coded an ARPG game with a single player story driven game mechanics with some challenges. Instead of designing the level on Unity Editor, I coded a system to design the level while I am playing (in the Play mode of Unity). Moreover, I also did not want to see any "loading" signs, I coded a system to partially load the environment on the fly and release the parts that I went far from. One final challenge was to generate the dungeons that we enter on the fly. After spending some time on it, I thought it would be easier to use an asset named Dungeon Architect so I used it instead of designing the same mechanism from scratch.<br />
				<br /><span className="text-gray-300">Video link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.youtube.com/watch?v=fjTI0aBBzng&ab_channel=TolgaKaranlikoglu">here</Link>
				<br /><span className="text-gray-300">Github link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://github.com/tolgakaranlik/valtheron">here</Link>
				</ProjectCard>
          </div>
        )}
        {activeTab === 'Backend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
				title="Backend Systems of Clover Slots Epic Casino Games" 
				icon="/images/epic-logo.jpg" 
				platforms={['NodeJS', 'Neon', 'PostgreSQL']} 
				tech={['Firebase Authentication', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Remote Config', 'Digital Ocean Storage', 'SendGrid', 'CI/CD', 'Jenkins']}>
					I was the one who planned and implementing the full backend infrastructure. The whole infrastructure was designed on the NodeJS and the PosgreSQL that was hosted on the Neon servers. File storage was running on the Digital Ocean space. The biggest challenge of this project was to build the landscape to handle the huge workload of database systems, but thanks to the flexability and the reliability of the Neon and Digital Ocean systems, everything went on track. In this project, I also established a fully automated CI/CD system based on Jenkins, which automated the build, sign and update our weekly builds on target platforms, such as Google Play and Apple App Store.<br />
					<br /><span className="text-gray-300">Google Play Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://play.google.com/store/apps/details?id=com.velogames.barracuda">here</Link>
					<br /><span className="text-gray-300">AppStore Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://apps.apple.com/tr/app/clover-slots-epic-casino-games/id6499254862?l=en">here</Link>
			</ProjectCard>
            <ProjectCard 
				title="Backend Systems of Illuvium Zero" 
				icon="/images/illuvium-zero.jpg" 
				platforms={['Moralis', 'AWS', 'EC2', 'NodeJS', 'Amazon RDS', 'PostgreSQL']} 
				tech={['AWS', 'BlockChain', 'NFT', 'Ethereum', 'Moralis', 'Amazon EC2', 'Amazon RDS', 'NextJS', 'PostgreSQL', 'Amazon Cognito']}>
					Basics of this system was established when I joined the team, so my job was to plan and to monitor the development cycle. The whole backend system had two major components: the blockhain side and the operational side. The Blockchain part was more straight forward, Moralis system was capable of managing the whole Solidity and Ethereum side. We didn't have an in-house Solidity team so I did not have much influence on them, that team was responding to the CTO. When it come tho the operation side, that was my field of play. Entire system is placed on the AWS landscape, so we used Amazon RDS (Remote Dabatase System) infrastructure with PostgreSQL. It was operated on NodeJS which are located on EC2 servers. By the time we added some additional support by occupying side systems like Amazon Cognito for user authentication, Unity Cloud Build for CI/CD, etc.<br />
					<br /><span className="text-gray-300">Epic Games Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://store.epicgames.com/en-US/p/illuvium-zero-ca46a6">here</Link>
					<br /><span className="text-gray-300">Google Play Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://play.google.com/store/apps/details?id=io.illuvium.zero&hl=en_IN">here</Link>
					<br /><span className="text-gray-300">AppStore Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://apps.apple.com/us/app/illuvium-zero/id6502333482">here</Link>
			</ProjectCard>
            <ProjectCard 
				title="TolgaKaranlik Dev (This Site) Blog System" 
				icon="/images/profile.jpg" 
				platforms={['HTML5']} 
				tech={['Vercel Servers', 'Neon', 'React', 'NextJS', 'AuthJS', 'PostgreSQL', 'Google Fonts', 'Zod', 'HTML React Parser']}>
					Full blog system was built from scratch by me. I have built an authentication system with AuthJS & Postgres and created a CRUD based administration panel. I enter all new blog posts and maintain the existing ones from there. I also have a comment approval system in there. When you write a comment, I am notified with a mail and it waits for my approval. When I approve or deny it from the administration panel, the result is reflected in the web site immediately. You can access its full source code from the Github link below.<br />&nbsp;
					<br /><span className="text-gray-300">Github Source Code Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://github.com/tolgakaranlik/tolgakaranlik_dev">here</Link>
			</ProjectCard>
            <ProjectCard 
				title="VR EDU Backend System" 
				icon="/images/vr-edu.jpg" 
				platforms={['Windows Server']} 
				tech={['NodeJS', 'PostgreSQL', 'Firebase Remote Config', 'Firebase Storage']}>
					This project contains a heavy file storage, because every client have a different environment to display in VR. These environments are simple Unity prefabs that are stored in remote ly downloadable asset bundles. Those bundles are stored in Firebase Storage. All the downloadable environment and downloadable equipment information is stored in PostgreSQL in a Windows Server environment.<br />
					<br /><span className="text-gray-300">Video link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.youtube.com/watch?v=is8X1EoLV1k&ab_channel=TolgaKaranlikoglu">here</Link>
			</ProjectCard>
          </div>
        )}
        {activeTab === 'Frontend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
				title="Admin Panel of Clover Slots Epic Casino Games" 
				icon="/images/velo-panel.jpg" 
				platforms={['Firebase', 'Digital Ocean']} 
				tech={['PostgreSQL', 'NextJS', 'AuthJS', 'Tailwind CSS', 'Google Fonts']}>
					I preferred to put the whole backend infrastructure on NodeJS platform. Because it is modern, fast, secure and efficient. So the administration panel was a natural continuation of this philosophy. For implementing the administration panel, I preferred the NextJS and Tailwind CSS system. That was a complicated project, required creation of summarization tables on the database for displaying special reports and required creation of server side jobs to populate daily, weekly and monthly summaries and to esablish some early warning systems against cheaters.<br />
			</ProjectCard>
            <ProjectCard 
				title="TolgaKaranlik Dev (This Site) & Admin Panel" 
				icon="/images/profile.jpg" 
				platforms={['HTML5','Vercel Servers', 'Neon']} 
				tech={['NextJS', 'Tailwind CSS', 'React', 'AuthJS', 'bcrypt', 'PostgreSQL', 'Google Fonts', 'Zod']}>
					Full web site was built from scratch by me. I have built a professional but sharp looking web site in order to display my expertise and demonstrate my recent experience as a portfolio, then deployed it onto the Vercel servers. I used Neon as the database infrastructure. I used NextJS as the main infrastructure and enhanced the experience with the Tailwind CSS. I also created an administration panel to maintain the web site and the blog. You can access full soure code from the link below.<br />&nbsp;
					<br /><span className="text-gray-300">Github Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://github.com/tolgakaranlik/tolgakaranlik_dev">here</Link><br />
					<br /><span className="text-gray-300">Admin Panel Link:</span> <Link target="_blank" className="text-gray-500 underline" href="https://www.tolgakaranlik.dev/admin">here</Link><br />
					Try user name <span className="text-gray-500">demo@tolgakaranlik.dev</span> with password <span className="text-gray-500">demodemo</span>
			</ProjectCard>
            <ProjectCard 
				title="VR EDU Administration Panel" 
				icon="/images/vr-edu.jpg" 
				platforms={['Vercel', 'Neon', 'Github']} 
				tech={['Next.js', 'Tailwind', 'AuthJS']}>
					In this project we started with a template, but later on I had to write the whole project from scratch with NextJS and the Tailwind CSS. The project was rather a simple CRUD system, which is heavy on the file operation side. Basic operations on that panel were; user management, uploading customer specific content (environments & props), maintaining user specific data related with their uploads.
			</ProjectCard>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ title, platforms, tech, icon, children }: { title: string; platforms: string[]; tech: string[], icon?:string, children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 flex flex-col md:flex-row items-center md:items-start gap-4 shadow-md rounded-lg p-6">
      {icon && (
        <div className={`${robotoMono.className} w-32 h-32 flex-shrink-0 relative`}>
          <Image
            src={icon}
            alt={`${title}`}
            fill
            className="object-contain rounded md:mt-10"
          />
        </div>
      )}

      <div className={`flex-1 ${icon ? '' : 'text-center'}`}>
        <h2 className={`${robotoMono.className} text-lg font-semibold mb-2`}>{title}</h2>
        <p className={`${robotoMono.className} text-sm text-gray-600`}>{children}</p>
		  {/* Tags */}
		  <div className="p-2"></div>
		  <div className="flex gap-2 flex-wrap">
			{platforms.map((t) => (
			  <span key={t} className={`${robotoMono.className} text-sm bg-red-600 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>
		  <div className="p-1"></div>
		  <div className="flex gap-2 flex-wrap">
			{tech.map((t) => (
			  <span key={t} className={`${robotoMono.className} text-sm bg-gray-500 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>

      </div>

    </div>
  );
}