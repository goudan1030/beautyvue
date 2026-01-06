import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ToastProps {
  state: DocSectionState;
}

export const Toast: React.FC<ToastProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toast</h1><p className="text-xl text-muted-foreground">A succinct message that is displayed temporarily.</p></div>
      <ComponentPreview preview={<><button onClick={() => state.setShowSimpleToast(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Add to calendar</button>{state.showSimpleToast && (<div className="fixed bottom-4 right-4 z-[100] flex w-full max-w-md flex-col gap-2 bg-background p-6 shadow-lg rounded-lg border animate-in slide-in-from-right-full duration-300"><div className="grid gap-1"><div className="font-semibold text-sm">Scheduled: Catch up</div><div className="text-sm opacity-90">Friday, February 10, 2023 at 5:57 PM</div></div></div>)}</>} code={`<script setup>
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'

const { toast } = useToast()
</script>

<template>
  <Button
    variant="outline"
    @click="toast({
      title: 'Scheduled: Catch up',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    })"
  >
    Add to calendar
  </Button>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toast" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { useToast } from '@/components/ui/toast'`} /><CodeBlock code={`const { toast } = useToast()
toast({ title: 'Hello', description: 'World' })`} /></div>
    </div>
  );
};

