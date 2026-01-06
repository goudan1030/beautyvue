import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Textarea: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Textarea</h1><p className="text-xl text-muted-foreground">Displays a form textarea or a component that looks like an textarea.</p></div>
      <ComponentPreview preview={<div className="grid w-full gap-1.5"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Message</label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type your message here." /><p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p></div>} code={`<script setup>import { Textarea } from '@/components/ui/textarea'</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/textarea" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Textarea } from '@/components/ui/textarea'`} /><CodeBlock code={`<Textarea />`} /></div>
    </div>
  );
};

