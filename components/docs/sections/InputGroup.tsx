import React from 'react';
import { Search, Info, Check, ArrowUp, Plus } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const InputGroup: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input Group</h1>
        <p className="text-xl text-muted-foreground">Attach labels and buttons to your inputs.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="space-y-4 w-full max-w-md">
            {/* Search with results */}
            <div className="relative flex w-full items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Search..." 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9 pr-20" 
              />
              <span className="absolute right-3 text-sm text-muted-foreground">12 results</span>
            </div>

            {/* URL with info icon */}
            <div className="relative flex w-full items-center">
              <input 
                type="text" 
                defaultValue="https:// example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-9" 
              />
              <button className="absolute right-2.5 h-5 w-5 rounded-full border border-input bg-background flex items-center justify-center hover:bg-accent transition-colors">
                <Info className="h-3 w-3 text-muted-foreground" />
              </button>
            </div>

            {/* Multi-purpose input with controls */}
            <div className="relative flex flex-col w-full">
              <textarea 
                placeholder="Ask, Search or Chat..."
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none pb-12"
              />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="h-6 w-6 rounded-full border border-input bg-background flex items-center justify-center hover:bg-accent transition-colors">
                    <Plus className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <span className="text-xs text-muted-foreground">Auto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">52% used</span>
                  <button className="h-6 w-6 rounded-full border border-input bg-background flex items-center justify-center hover:bg-accent transition-colors">
                    <ArrowUp className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Username with check icon */}
            <div className="relative flex w-full items-center">
              <input 
                type="text" 
                defaultValue="@shadcn"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-9" 
              />
              <div className="absolute right-2.5 h-5 w-5 rounded-full bg-foreground flex items-center justify-center">
                <Check className="h-3 w-3 text-background" strokeWidth={3} />
              </div>
            </div>
          </div>
        } 
        code={`<script setup>
import { InputGroup } from '@/components/ui/input-group'
import { Search } from 'lucide-vue-next'
</script>

<template>
  <InputGroup>
    <template #prefix>
      <Search class="h-4 w-4" />
    </template>
    <Input placeholder="Search..." />
  </InputGroup>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/input-group" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { InputGroup } from '@/components/ui/input-group'`} />
        <CodeBlock code={`<InputGroup>
  <template #prefix>
    <Search />
  </template>
  <Input placeholder="Search..." />
</InputGroup>`} />
      </div>
    </div>
  );
};
