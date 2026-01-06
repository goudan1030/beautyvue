import React from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Collapsible: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Collapsible</h1><p className="text-xl text-muted-foreground">An interactive component which expands/collapses a panel.</p></div>
      <ComponentPreview preview={<div><div className="flex justify-between w-[350px] px-4"><h4>@beautyvue/core</h4><ChevronsUpDown className="h-4 w-4" /></div></div>} code={`<script setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution required.
    </CollapsibleContent>
  </Collapsible>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/collapsible" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'`} /><CodeBlock code={`<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>`} /></div>
    </div>
  );
};

