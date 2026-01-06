import React from 'react';
import { Package } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Empty: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Empty</h1><p className="text-xl text-muted-foreground">A placeholder state for when there is no data to display.</p></div>
      <ComponentPreview preview={<div className="flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-lg bg-muted/20 w-full max-w-sm"><div className="rounded-full bg-muted p-3 mb-4"><Package className="h-6 w-6 text-muted-foreground" /></div><h3 className="text-lg font-semibold">No products created</h3><p className="text-sm text-muted-foreground mt-2 mb-6">You have not created any products yet. Add a new product to get started.</p><button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Add Product</button></div>} code={`<script setup>import { EmptyState } from '@/components/ui/empty'</script>

<template>
  <EmptyState>
    <template #icon><Package /></template>
    <template #title>No data</template>
    <template #description>There is no data to display.</template>
    <Button>Add Data</Button>
  </EmptyState>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/empty" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { EmptyState } from '@/components/ui/empty'`} /><CodeBlock code={`<EmptyState>
  <template #title>Title</template>
</EmptyState>`} /></div>
    </div>
  );
};

