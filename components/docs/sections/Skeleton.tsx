import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Skeleton: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Skeleton</h1><p className="text-xl text-muted-foreground">Use to show a placeholder while content is loading.</p></div>
      <ComponentPreview preview={<div className="flex items-center space-x-4"><div className="h-12 w-12 rounded-full bg-muted animate-pulse" /><div className="space-y-2"><div className="h-4 w-[250px] bg-muted animate-pulse rounded" /><div className="h-4 w-[200px] bg-muted animate-pulse rounded" /></div></div>} code={`<script setup>import { Skeleton } from '@/components/ui/skeleton'</script>

<template>
  <div class="flex items-center space-x-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/skeleton" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Skeleton } from '@/components/ui/skeleton'`} /><CodeBlock code={`<Skeleton class="h-4 w-[250px]" />`} /></div>
    </div>
  );
};

