import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface PopoverProps {
  state: DocSectionState;
}

export const Popover: React.FC<PopoverProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Popover</h1><p className="text-xl text-muted-foreground">Displays rich content in a portal, triggered by a button.</p></div>
      <ComponentPreview preview={<div className="flex items-center justify-center"><div className="relative"><button onClick={() => state.setIsPopoverOpen(!state.isPopoverOpen)} className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors">Open Popover</button>{state.isPopoverOpen && (<div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 rounded-md border bg-background p-4 text-foreground shadow-md outline-none z-50" style={{ backgroundColor: 'hsl(var(--background))' }}>Content</div>)}</div></div>} code={`<script setup>
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/popover" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'`} /><CodeBlock code={`<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`} /></div>
    </div>
  );
};

