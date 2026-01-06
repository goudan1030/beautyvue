import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Separator: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Separator</h1><p className="text-xl text-muted-foreground">Visually or semantically separates content.</p></div>
      <ComponentPreview preview={<div><div className="space-y-1"><h4 className="text-sm font-medium leading-none">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><div className="shrink-0 bg-border h-[1px] w-full my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><div className="shrink-0 bg-border w-[1px] h-full" /><div>Docs</div><div className="shrink-0 bg-border w-[1px] h-full" /><div>Source</div></div></div>} code={`<script setup>import { Separator } from '@/components/ui/separator'</script>

<template>
  <Separator />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/separator" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Separator } from '@/components/ui/separator'`} /><CodeBlock code={`<Separator />`} /></div>
    </div>
  );
};

