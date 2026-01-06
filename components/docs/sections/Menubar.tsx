import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Menubar: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Menubar</h1><p className="text-xl text-muted-foreground">A visually persistent menu common in desktop applications.</p></div>
      <ComponentPreview preview={<div className="flex h-10 items-center space-x-1 rounded-md border bg-background p-1"><button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground">File</button><button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground">Edit</button></div>} code={`<script setup>
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/menubar" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'`} /><CodeBlock code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} /></div>
    </div>
  );
};

