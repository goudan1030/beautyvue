import React from 'react';
import { Search } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const InputGroup: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input Group</h1><p className="text-xl text-muted-foreground">Attach labels and buttons to your inputs.</p></div>
      <ComponentPreview preview={<div className="flex w-full max-w-sm items-center space-x-2"><div className="relative flex w-full items-center"><Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" /><input type="search" placeholder="Search..." className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9" /></div></div>} code={`<script setup>import { InputGroup } from '@/components/ui/input-group'</script>

<template>
  <InputGroup>
    <template #prefix>
      <Search class="h-4 w-4" />
    </template>
    <Input placeholder="Search..." />
  </InputGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/input-group" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { InputGroup } from '@/components/ui/input-group'`} /><CodeBlock code={`<InputGroup>
  <Input />
</InputGroup>`} /></div>
    </div>
  );
};

