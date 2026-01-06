import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DropdownMenuProps {
  state: DocSectionState;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dropdown Menu</h1><p className="text-xl text-muted-foreground">Displays a menu to the user.</p></div>
      <ComponentPreview preview={<button onClick={() => state.setIsDropdownOpen(!state.isDropdownOpen)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Open Menu</button>} code={`<script setup>
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/dropdown-menu" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu'`} /><CodeBlock code={`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>Content</DropdownMenuContent>
</DropdownMenu>`} /></div>
    </div>
  );
};

