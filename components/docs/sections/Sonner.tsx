import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SonnerProps {
  state: DocSectionState;
}

export const Sonner: React.FC<SonnerProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sonner</h1><p className="text-xl text-muted-foreground">An opinionated toast component for Vue.</p></div>
      <ComponentPreview preview={<><button onClick={() => state.setShowToast(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Show Toast</button>{state.showToast && (<div className="fixed bottom-4 right-4 z-[100] flex items-center w-full max-w-[356px] gap-4 rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300"><div className="grid gap-1"><h5 className="text-sm font-semibold">Event has been created</h5><p className="text-sm text-muted-foreground">Sunday, December 03, 2023 at 9:00 AM</p></div><button onClick={() => state.setShowToast(false)} className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive">Undo</button></div>)}</>} code={`<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <Button @click="toast('Event has been created')">Show Toast</Button>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install vue-sonner" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { toast } from 'vue-sonner'`} /><CodeBlock code={`toast('My message')`} /></div>
    </div>
  );
};

