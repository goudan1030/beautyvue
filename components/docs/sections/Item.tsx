import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Item: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Item</h1><p className="text-xl text-muted-foreground">A basic list item component for building menus and lists.</p></div>
      <ComponentPreview 
        preview={
          <div className="w-full max-w-sm space-y-3">
            {/* Basic Item with Action Button */}
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-md border border-border hover:bg-muted/50 transition-colors">
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-semibold leading-none text-foreground">Basic Item</p>
                <p className="text-sm text-muted-foreground">A simple item with title and description.</p>
              </div>
              <button className="ml-4 px-3 py-1.5 text-sm font-medium bg-background border border-border rounded-md hover:bg-accent transition-colors">
                Action
              </button>
            </div>

            {/* Verified Item with Icon and Chevron */}
            <div className="flex items-center p-4 bg-muted/30 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors">
              <CheckCircle2 className="h-5 w-5 text-foreground mr-3 shrink-0" strokeWidth={2.5} />
              <p className="flex-1 text-sm text-foreground">Your profile has been verified.</p>
              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2 shrink-0" />
            </div>
          </div>
        } 
        code={`<script setup>
import { Item } from '@/components/ui/item'
import { CheckCircle2, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <!-- Basic Item with Action Button -->
  <Item class="flex items-center justify-between p-4 bg-muted/30 rounded-md border">
    <div class="flex-1 space-y-0.5">
      <p class="text-sm font-semibold">Basic Item</p>
      <p class="text-sm text-muted-foreground">A simple item with title and description.</p>
    </div>
    <button class="ml-4 px-3 py-1.5 text-sm font-medium bg-background border rounded-md">
      Action
    </button>
  </Item>

  <!-- Verified Item with Icon and Chevron -->
  <Item class="flex items-center p-4 bg-muted/30 rounded-md border">
    <CheckCircle2 class="h-5 w-5 mr-3" />
    <p class="flex-1 text-sm">Your profile has been verified.</p>
    <ChevronRight class="h-4 w-4 text-muted-foreground ml-2" />
  </Item>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/item" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Item } from '@/components/ui/item'
import { CheckCircle2, ChevronRight } from 'lucide-vue-next'`} /><CodeBlock code={`<!-- Basic Item with Action Button -->
<Item class="flex items-center justify-between p-4 bg-muted/30 rounded-md border">
  <div class="flex-1 space-y-0.5">
    <p class="text-sm font-semibold">Basic Item</p>
    <p class="text-sm text-muted-foreground">A simple item with title and description.</p>
  </div>
  <button class="ml-4 px-3 py-1.5 text-sm font-medium bg-background border rounded-md">
    Action
  </button>
</Item>

<!-- Verified Item with Icon and Chevron -->
<Item class="flex items-center p-4 bg-muted/30 rounded-md border">
  <CheckCircle2 class="h-5 w-5 mr-3" />
  <p class="flex-1 text-sm">Your profile has been verified.</p>
  <ChevronRight class="h-4 w-4 text-muted-foreground ml-2" />
</Item>`} /></div>
    </div>
  );
};

