import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SliderProps {
  state: DocSectionState;
}

export const Slider: React.FC<SliderProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Slider</h1><p className="text-xl text-muted-foreground">An input where the user selects a value from within a given range.</p></div>
      <ComponentPreview preview={<div className="w-[60%]"><div className="relative flex w-full touch-none select-none items-center"><div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><div className="absolute h-full bg-primary" style={{ width: `${state.sliderValue}%` }} /></div><input type="range" min="0" max="100" value={state.sliderValue} onChange={(e) => state.setSliderValue(Number(e.target.value))} className="absolute w-full h-full opacity-0 cursor-pointer"/><div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 absolute -translate-x-1/2 pointer-events-none" style={{ left: `${state.sliderValue}%` }}/></div></div>} code={`<script setup>import { Slider } from '@/components/ui/slider'</script>

<template>
  <Slider :default-value="[50]" max="100" step="1" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/slider" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Slider } from '@/components/ui/slider'`} /><CodeBlock code={`<Slider :max="100" :step="1" />`} /></div>
    </div>
  );
};

