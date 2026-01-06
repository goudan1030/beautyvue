import React from 'react';
import { Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ToggleGroupProps {
  state: DocSectionState;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle Group</h1><p className="text-xl text-muted-foreground">A set of two-state buttons that can be toggled on or off.</p></div>
      <ComponentPreview preview={<div className="flex items-center justify-center"><div className="flex items-center rounded-md border bg-transparent"><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('bold') ? state.toggleGroupValue.filter(i => i !== 'bold') : [...state.toggleGroupValue, 'bold'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('bold') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><BoldIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('italic') ? state.toggleGroupValue.filter(i => i !== 'italic') : [...state.toggleGroupValue, 'italic'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('italic') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><ItalicIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('underline') ? state.toggleGroupValue.filter(i => i !== 'underline') : [...state.toggleGroupValue, 'underline'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('underline') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><UnderlineIcon className="h-4 w-4" /></button></div></div>} code={`<script setup>
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline } from 'lucide-vue-next'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline class="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toggle-group" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`} /><CodeBlock code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
</ToggleGroup>`} /></div>
    </div>
  );
};

