import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const NativeSelect: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Native Select</h1><p className="text-xl text-muted-foreground">A wrapper for the native HTML select element.</p></div>
      <ComponentPreview preview={<div className="w-[280px]"><select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><option value="" disabled selected>Select a fruit</option><option value="apple">Apple</option><option value="banana">Banana</option><option value="blueberry">Blueberry</option><option value="grapes">Grapes</option><option value="pineapple">Pineapple</option></select></div>} code={`<script setup>import { NativeSelect } from '@/components/ui/native-select'</script>

<template>
  <NativeSelect>
    <option>Option 1</option>
  </NativeSelect>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/native-select" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { NativeSelect } from '@/components/ui/native-select'`} /><CodeBlock code={`<NativeSelect>
  <option>Option</option>
</NativeSelect>`} /></div>
    </div>
  );
};

