import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ProgressProps {
  state: DocSectionState;
}

export const Progress: React.FC<ProgressProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Progress</h1><p className="text-xl text-muted-foreground">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</p></div>
      <ComponentPreview preview={<div className="w-[60%]"><div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary"><div className="h-full w-full flex-1 bg-primary transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${100 - (state.progressValue || 0)}%)` }} /></div></div>} code={`<script setup>
import { Progress } from '@/components/ui/progress'
import { ref, onMounted } from 'vue'

const progress = ref(13)

onMounted(() => {
  const timer = setTimeout(() => (progress.value = 66), 500)
  return () => clearTimeout(timer)
})
</script>

<template>
  <Progress :model-value="progress" class="w-[60%]" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/progress" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Progress } from '@/components/ui/progress'`} /><CodeBlock code={`<Progress :model-value="33" />`} /></div>
    </div>
  );
};

