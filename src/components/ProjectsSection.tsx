'use client';
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
            {/* Game kartları buraya */}
            <ProjectCard title="Valtheron" tech={['Unity', 'C#']}>Project description will be here</ProjectCard>
            <ProjectCard title="Clover Slots" tech={['Unity', 'Backend']}>Project description will be here</ProjectCard>
          </div>
        )}
        {activeTab === 'Backend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Clover Backend" tech={['.NET', 'PostgreSQL']}>Project description will be here</ProjectCard>
          </div>
        )}
        {activeTab === 'Frontend' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="tolgakaranlikoglu.dev" tech={['Next.js', 'Tailwind']}>Project description will be here</ProjectCard>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ title, tech, children }: { title: string; tech: string[], children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className={`${lusitana.className} text-lg font-bold mb-2`}>{title}</h3>
      <p className={`${lusitana.className} mb-2 text-gray-500`}>{children}</p>
      <div className="flex gap-2 flex-wrap">
        {tech.map((t) => (
          <span key={t} className={`${lusitana.className} text-xs bg-gray-200 px-2 py-1 rounded`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}