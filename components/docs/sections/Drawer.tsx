import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DrawerProps {
  state: DocSectionState;
}

export const Drawer: React.FC<DrawerProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Drawer</h1><p className="text-xl text-muted-foreground">A drawer component for Vue.</p></div>
      <ComponentPreview preview={<button onClick={() => state.setIsDrawerOpen(true)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Open Drawer</button>} code={`<script setup>
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger>Open</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/drawer" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'`} /><CodeBlock code={`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>Content</DrawerContent>
</Drawer>`} /></div>
    </div>
  );
};

