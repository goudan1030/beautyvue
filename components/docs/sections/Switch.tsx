import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SwitchProps {
  state: DocSectionState;
}

export const Switch: React.FC<SwitchProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Switch</h1><p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p></div>
      <ComponentPreview preview={<div className="flex items-center space-x-2"><button role="switch" aria-checked={state.isSwitchOn} onClick={() => state.setIsSwitchOn(!state.isSwitchOn)} className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${state.isSwitchOn ? 'bg-primary' : 'bg-input'}`}><span className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${state.isSwitchOn ? 'translate-x-5' : 'translate-x-0'}`} /></button><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" onClick={() => state.setIsSwitchOn(!state.isSwitchOn)}>Airplane Mode</label></div>} code={`<script setup>import { Switch } from '@/components/ui/switch'</script>

<template>
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/switch" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Switch } from '@/components/ui/switch'`} /><CodeBlock code={`<Switch />`} /></div>
    </div>
  );
};

