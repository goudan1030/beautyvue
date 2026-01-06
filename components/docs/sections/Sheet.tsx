import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SheetProps {
  state: DocSectionState;
}

export const Sheet: React.FC<SheetProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sheet</h1><p className="text-xl text-muted-foreground">Extends the Dialog component to display content that complements the main screen.</p></div>
      <ComponentPreview preview={<div className="flex items-center justify-center"><button onClick={() => state.setIsSheetOpen(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Open Sheet</button></div>} code={`<script setup>
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Make changes to your profile here.</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/sheet" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'`} /><CodeBlock code={`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>Content</SheetContent>
</Sheet>`} /></div>
    </div>
  );
};

