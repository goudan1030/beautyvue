import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DialogProps {
  state: DocSectionState;
}

export const Dialog: React.FC<DialogProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dialog</h1><p className="text-xl text-muted-foreground">A modal dialog that interrupts the user.</p></div>
      <ComponentPreview preview={<button onClick={() => state.setIsDialogOpen(true)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Edit Profile</button>} code={`<script setup>
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/dialog" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'`} /><CodeBlock code={`<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Content</DialogContent>
</Dialog>`} /></div>
    </div>
  );
};

