import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Kbd: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Kbd</h1><p className="text-xl text-muted-foreground">Displays a keyboard key or shortcut.</p></div>
      <ComponentPreview preview={<div className="flex justify-center gap-4"><div className="flex items-center gap-2"><p className="text-sm text-muted-foreground">Press</p><kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>K</kbd></div><div className="flex items-center gap-2"><p className="text-sm text-muted-foreground">to search</p></div></div>} code={`<script setup>import { Kbd } from '@/components/ui/kbd'</script>

<template>
  <Kbd>⌘K</Kbd>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/kbd" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Kbd } from '@/components/ui/kbd'`} /><CodeBlock code={`<Kbd>Ctrl + C</Kbd>`} /></div>
    </div>
  );
};

