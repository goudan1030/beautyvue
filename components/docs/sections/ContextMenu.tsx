import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const ContextMenu: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Context Menu</h1><p className="text-xl text-muted-foreground">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</p></div>
      <ComponentPreview preview={<div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm font-medium text-muted-foreground relative group">Right click here<div className="absolute left-1/2 top-1/2 w-64 rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95 hidden group-active:block group-hover:block translate-x-4 translate-y-4 z-50"><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Back</div><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground" disabled>Forward</div><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Reload</div><div className="h-px my-1 bg-border" /><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Save As...</div></div></div>} code={`<script setup>
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent class="w-64">
      <ContextMenuItem inset>Back</ContextMenuItem>
      <ContextMenuItem inset disabled>Forward</ContextMenuItem>
      <ContextMenuItem inset>Reload</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem inset>Save As...</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/context-menu" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from '@/components/ui/context-menu'`} /><CodeBlock code={`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>Menu Content</ContextMenuContent>
</ContextMenu>`} /></div>
    </div>
  );
};

