import React from 'react';

export type Language = 'en' | 'zh';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  language: string;
}

export enum PageView {
  LANDING = 'LANDING',
  DOCS = 'DOCS',
  COMPONENTS = 'COMPONENTS'
}