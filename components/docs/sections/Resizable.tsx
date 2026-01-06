import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Resizable: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Resizable</h1><p className="text-xl text-muted-foreground">Accessible resizable panel groups and layouts with keyboard support.</p></div>
      <ComponentPreview preview={<div className="w-full max-w-md border rounded-lg h-[200px] flex overflow-hidden"><div className="w-1/3 bg-background p-6 flex items-center justify-center border-r"><span className="font-semibold">One</span></div><div className="w-2/3 flex flex-col"><div className="h-1/2 bg-background p-6 flex items-center justify-center border-b"><span className="font-semibold">Two</span></div><div className="h-1/2 bg-background p-6 flex items-center justify-center"><span className="font-semibold">Three</span></div></div></div>} code={`<script setup>
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/resizable" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'`} /><CodeBlock code={`<ResizablePanelGroup>
  <ResizablePanel>Content</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Content</ResizablePanel>
</ResizablePanelGroup>`} /></div>
    </div>
  );
};

