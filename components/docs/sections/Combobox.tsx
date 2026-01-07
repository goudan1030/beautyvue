import React from 'react';
import { ChevronsUpDown, Search, Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ComboboxProps {
  state: DocSectionState;
}

export const Combobox: React.FC<ComboboxProps> = ({ state }) => {
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Combobox</h1><p className="text-xl text-muted-foreground">Autocomplete input and command palette with a list of suggestions.</p></div>
      <ComponentPreview preview={
        <div className="relative w-[200px]">
          <button 
            role="combobox" 
            aria-expanded={state.comboboxOpen} 
            onClick={() => state.setComboboxOpen(!state.comboboxOpen)} 
            className="w-full justify-between flex items-center border border-input bg-background px-3 py-2 rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.comboboxValue 
              ? frameworks.find((framework) => framework.value === state.comboboxValue)?.label 
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
          {state.comboboxOpen && (
            <div className="absolute top-full left-0 mt-2 w-[200px] rounded-md border bg-background text-foreground shadow-md outline-none animate-in fade-in zoom-in-95 z-[100]" style={{ backgroundColor: 'hsl(var(--background))' }}>
              <div className="p-1">
                <div className="flex items-center px-2 py-2 border-b mb-1">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input 
                    placeholder="Search..." 
                    className="flex h-5 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                  />
                </div>
                {frameworks.map((framework) => (
                  <div 
                    key={framework.value} 
                    onClick={() => { 
                      state.setComboboxValue(framework.value === state.comboboxValue ? "" : framework.value); 
                      state.setComboboxOpen(false); 
                    }} 
                    className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}
                  >
                    <Check className={`mr-2 h-4 w-4 ${state.comboboxValue === framework.value ? "opacity-100" : "opacity-0"}`} />
                    {framework.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      } code={`<script setup>
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">
        {{ value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..." }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value" @select="onSelect">
              <Check :class="cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')" />
              {{ framework.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/combobox" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Combobox } from '@/components/ui/combobox'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandInput, CommandList, CommandItem } from '@/components/ui/command'`} /><CodeBlock code={`<Popover>
  <PopoverTrigger>
    <Button variant="outline">Select framework...</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandItem>React</CommandItem>
        <CommandItem>Vue</CommandItem>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`} /></div>
    </div>
  );
};

