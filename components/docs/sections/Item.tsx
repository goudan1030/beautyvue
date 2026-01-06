import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Item: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Item</h1><p className="text-xl text-muted-foreground">A basic list item component for building menus and lists.</p></div>
      <ComponentPreview preview={<div className="w-full max-w-sm border rounded-md divide-y"><div className="flex items-center p-4 hover:bg-muted/50 cursor-pointer transition-colors"><div className="flex-1 space-y-1"><p className="text-sm font-medium leading-none">Notifications</p><p className="text-sm text-muted-foreground">Manage your notification preferences.</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div><div className="flex items-center p-4 hover:bg-muted/50 cursor-pointer transition-colors"><div className="flex-1 space-y-1"><p className="text-sm font-medium leading-none">Privacy</p><p className="text-sm text-muted-foreground">Manage your data and privacy.</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div></div>} code={`<script setup>import { Item } from '@/components/ui/item'</script>

<template>
  <Item>Content</Item>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/item" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Item } from '@/components/ui/item'`} /><CodeBlock code={`<Item>Content</Item>`} /></div>
    </div>
  );
};

