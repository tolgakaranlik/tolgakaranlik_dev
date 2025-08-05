'use client';
import React from 'react';
import { robotoMono } from '@/components/ui/fonts';

type Props = {
  visit: string;
  window?: 'same' | 'new';
  children: React.ReactNode;
};

export function HeaderLink({ visit, window = 'same', children }: Props) {
  const isInternal = visit.startsWith('#') || visit.startsWith('/');
  const target = window === 'new' ? '_blank' : '_self';
  const rel = window === 'new' ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={visit}
      target={target}
      rel={rel}
      className={`${robotoMono.className} text-gray-700 dark:text-gray-200 hover:underline px-3 py-2`}
    >
      {children}
    </a>
  );
}