'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { lusitana } from '@/components/ui/fonts';

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
            className={`${lusitana.className} text-lg px-4 py-2 rounded-full border transition ${
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
            <ProjectCard title="Clover Slots Epic Casino Games" icon="/images/epic-logo.jpg" platforms={['Android', 'Apple']} tech={['Unity', 'Backend', 'In App Purchases', 'Unity Ads', 'Firebase Authentication', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Remote Config', 'Asset Bundles', 'Facebook SDK', 'Facebook Login', 'Apple Login', 'Digital Ocean Storage', 'Google Billing', 'Apple Store Kit', 'SendGrid', 'CI/CD', 'Jenkins', 'Editor Programming', 'ScriptableObject']}>A mobile game, which is published in both the Google Play and the Apple AppStore. Currently it was downloaded more than 50K times in Google Play alone and had 4.9 stars so far. I have been the head of development of its gameplay logic, client application, server side, database side and every single technical aspect of the game. Also, other than handling a fast and secure game play, a back office and a huge management portal was coded from scratched, and I was the one who planned, coordinated and coded the back bone of that backend system. <br />&nbsp;
				<br /><span className="text-gray-300">Google Play Link:</span> <Link className="text-gray-500 underline" href="https://play.google.com/store/apps/details?id=com.velogames.barracuda"><br />https://play.google.com/store/apps/details?id=com.velogames.barracuda</Link>
				<br /><span className="text-gray-300">AppStore Link:</span> <Link className="text-gray-500 underline" href="https://apps.apple.com/tr/app/clover-slots-epic-casino-games/id6499254862?l=en"><br />https://apps.apple.com/tr/app/clover-slots-epic-casino-games/id6499254862?l=en</Link>
			</ProjectCard>
            <ProjectCard title="Valtheron" platforms={['Windows']} tech={['Unity', 'C#']}>Project description will be here</ProjectCard>
          </div>
        )}
        {activeTab === 'Backend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Clover Backend" platforms={['Windows Server']} tech={['.NET', 'PostgreSQL']}>Project description will be here</ProjectCard>
          </div>
        )}
        {activeTab === 'Frontend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="tolgakaranlikoglu.dev" platforms={['Vercel', 'Neon', 'Github']} tech={['Next.js', 'Tailwind']}>Project description will be here</ProjectCard>
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
        <div className={`${lusitana.className} w-32 h-32 flex-shrink-0 relative`}>
          <Image
            src={icon}
            alt={`${title}`}
            fill
            className="object-contain rounded md:mt-10"
          />
        </div>
      )}

      <div className={`flex-1 ${icon ? '' : 'text-center'}`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`${lusitana.className} text-gray-600`}>{children}</p>
		  {/* Tags */}
		  <div className="p-2"></div>
		  <div className="flex gap-2 flex-wrap">
			{platforms.map((t) => (
			  <span key={t} className={`${lusitana.className} text-sm bg-red-600 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>
		  <div className="p-1"></div>
		  <div className="flex gap-2 flex-wrap">
			{tech.map((t) => (
			  <span key={t} className={`${lusitana.className} text-sm bg-gray-500 px-2 py-1 rounded`}>
				{t}
			  </span>
			))}
		  </div>

      </div>

    </div>
  );
}