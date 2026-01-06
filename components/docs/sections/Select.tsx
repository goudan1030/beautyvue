import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SelectProps {
  state: DocSectionState;
}

export const Select: React.FC<SelectProps> = ({ state }) => {
  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1><p className="text-xl text-muted-foreground">Displays a list of options for the user to pick from—triggered by a button.</p></div>
      <ComponentPreview preview={<div className="relative"><button onClick={() => state.setIsSelectOpen(!state.isSelectOpen)} className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span>{state.selectValue ? fruits.find(f => f.value === state.selectValue)?.label : "Select a fruit"}</span><ChevronDown className="h-4 w-4 opacity-50" /></button>{state.isSelectOpen && (<div className="absolute top-full mt-2 w-[180px] rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in zoom-in-95 z-50 p-1">{fruits.map(f => (<div key={f.value} onClick={() => { state.setSelectValue(f.value); state.setIsSelectOpen(false); }} className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}>{state.selectValue === f.value && <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><Check className="h-4 w-4" /></span>}<span>{f.label}</span></div>))}</div>)}</div>} code={`<script setup>
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/select" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'`} /><CodeBlock code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="item1">Item 1</SelectItem>
  </SelectContent>
</Select>`} /></div>
    </div>
  );
};

