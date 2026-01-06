import React from 'react';
import { Bold as BoldIcon } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ToggleProps {
  state: DocSectionState;
}

export const Toggle: React.FC<ToggleProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle</h1><p className="text-xl text-muted-foreground">A two-state button that can be either on or off.</p></div>
      <ComponentPreview preview={<button onClick={() => state.setToggleState(!state.toggleState)} className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${state.toggleState ? 'bg-accent text-accent-foreground' : 'bg-transparent'}`}><BoldIcon className="h-4 w-4" /></button>} code={`<script setup>
import { Toggle } from '@/components/ui/toggle'
import { Bold } from 'lucide-vue-next'
</script>

<template>
  <Toggle aria-label="Toggle bold">
    <Bold class="h-4 w-4" />
  </Toggle>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toggle" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Toggle } from '@/components/ui/toggle'`} /><CodeBlock code={`<Toggle>B</Toggle>`} /></div>
    </div>
  );
};

