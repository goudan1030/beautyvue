import React from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface RadioGroupProps {
  state: DocSectionState;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radio Group</h1><p className="text-xl text-muted-foreground">A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</p></div>
      <ComponentPreview preview={<div className="grid gap-4"><div className="flex items-center space-x-2"><button onClick={() => state.setRadioValue("default")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.radioValue === "default" ? "flex items-center justify-center" : ""}`}>{state.radioValue === "default" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => state.setRadioValue("default")}>Default</label></div><div className="flex items-center space-x-2"><button onClick={() => state.setRadioValue("comfortable")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.radioValue === "comfortable" ? "flex items-center justify-center" : ""}`}>{state.radioValue === "comfortable" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => state.setRadioValue("comfortable")}>Comfortable</label></div><div className="flex items-center space-x-2"><button onClick={() => state.setRadioValue("compact")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.radioValue === "compact" ? "flex items-center justify-center" : ""}`}>{state.radioValue === "compact" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => state.setRadioValue("compact")}>Compact</label></div></div>} code={`<script setup>
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/radio-group" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'`} /><CodeBlock code={`<RadioGroup>
  <RadioGroupItem value="default" id="r1" />
  <Label htmlFor="r1">Default</Label>
</RadioGroup>`} /></div>
    </div>
  );
};

