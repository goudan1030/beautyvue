import React from 'react';
import { Search, Calendar as CalendarIcon } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Command: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Command</h1><p className="text-xl text-muted-foreground">Fast, composable, unstyled command menu for Vue.</p></div>
      <ComponentPreview preview={<div className="rounded-xl border bg-card text-card-foreground shadow-md w-[450px]"><div className="flex items-center border-b px-3"><Search className="mr-2 h-4 w-4 shrink-0 opacity-50" /><input className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type a command or search..." /></div><div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2"><div className="overflow-hidden px-1 py-1"><div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Suggestions</div><div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"><CalendarIcon className="mr-2 h-4 w-4" /> <span>Calendar</span></div></div></div></div>} code={`<script setup>
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
</script>

<template>
  <Command class="rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/command" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Command, CommandInput } from '@/components/ui/command'`} /><CodeBlock code={`<Command>
  <CommandInput placeholder="Type a command or search..." />
</Command>`} /></div>
    </div>
  );
};

