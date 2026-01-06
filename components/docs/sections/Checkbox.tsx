import React from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface CheckboxProps {
  state: DocSectionState;
}

export const Checkbox: React.FC<CheckboxProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1><p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p></div>
      <ComponentPreview preview={<div className="flex items-center space-x-2"><div className={`h-4 w-4 rounded-sm border border-primary ${state.isChecked ? 'bg-primary' : ''} flex items-center justify-center`}><Check className="h-3 w-3 text-white" /></div><label>Accept terms</label></div>} code={`<script setup>import { Checkbox } from '@/components/ui/checkbox'</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/checkbox" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Checkbox } from '@/components/ui/checkbox'`} /><CodeBlock code={`<Checkbox id="terms" />`} /></div>
    </div>
  );
};

