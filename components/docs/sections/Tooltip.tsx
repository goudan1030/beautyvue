import React from 'react';
import { Plus } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Tooltip: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tooltip</h1><p className="text-xl text-muted-foreground">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p></div>
      <ComponentPreview preview={<div className="flex items-center justify-center"><div className="relative group"><button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background h-10 w-10 hover:bg-accent hover:text-accent-foreground transition-colors"><Plus className="h-4 w-4" /><span className="sr-only">Add</span></button><div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 hidden group-hover:block whitespace-nowrap">Add to library</div></div></div>} code={`<script setup>
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/tooltip" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'`} /><CodeBlock code={`<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>Label</TooltipContent>
</Tooltip>`} /></div>
    </div>
  );
};

