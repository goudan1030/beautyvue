import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const ScrollArea: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Scroll Area</h1><p className="text-xl text-muted-foreground">Augments native scroll functionality for custom, cross-browser styling.</p></div>
      <ComponentPreview preview={<div className="h-[200px] w-[350px] rounded-md border p-4 overflow-y-auto"><h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>{Array.from({length: 50}).map((_, i) => (<div key={i} className="text-sm py-2 border-b last:border-0">v1.2.0-beta.{50 - i}</div>))}</div>} code={`<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night...
  </ScrollArea>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/scroll-area" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ScrollArea } from '@/components/ui/scroll-area'`} /><CodeBlock code={`<ScrollArea class="h-[200px] w-[350px]">
  Content...
</ScrollArea>`} /></div>
    </div>
  );
};

