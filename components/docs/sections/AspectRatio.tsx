import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const AspectRatio: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Aspect Ratio</h1><p className="text-xl text-muted-foreground">Displays content within a desired ratio.</p></div>
      <ComponentPreview preview={<div className="w-[450px] overflow-hidden rounded-md shadow-sm"><div style={{ paddingBottom: '56.25%' }} className="relative w-full bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" className="absolute inset-0 h-full w-full object-cover"/></div></div>} code={`<script setup>import { AspectRatio } from '@/components/ui/aspect-ratio'</script>

<template>
  <div class="w-[450px]">
    <AspectRatio :ratio="16 / 9">
      <img src="..." alt="Image" class="rounded-md object-cover" />
    </AspectRatio>
  </div>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/aspect-ratio" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { AspectRatio } from '@/components/ui/aspect-ratio'`} /><CodeBlock code={`<AspectRatio :ratio="16 / 9">
  <img src="..." alt="Image" class="rounded-md object-cover" />
</AspectRatio>`} /></div>
    </div>
  );
};

