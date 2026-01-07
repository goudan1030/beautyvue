import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Kbd: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Kbd</h1><p className="text-xl text-muted-foreground">Displays a keyboard key or shortcut.</p></div>
      <ComponentPreview 
        preview={
          <div className="w-full space-y-6">
            {/* Modifier Keys - Mac */}
            <div className="flex items-center justify-center gap-1.5">
              <kbd className="pointer-events-none inline-flex h-6 w-6 select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-medium text-foreground shadow-sm">
                <span className="text-sm">⌘</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-6 w-6 select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-medium text-foreground shadow-sm">
                <span className="text-sm">⇧</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-6 w-6 select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-medium text-foreground shadow-sm">
                <span className="text-sm">⌥</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-6 w-6 select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-medium text-foreground shadow-sm">
                <span className="text-sm">⌃</span>
              </kbd>
            </div>

            {/* Key Combination - Windows */}
            <div className="flex items-center justify-center gap-1.5">
              <kbd className="pointer-events-none inline-flex h-6 select-none items-center justify-center rounded border border-border bg-muted px-2 font-mono text-xs font-medium text-foreground shadow-sm">
                Ctrl
              </kbd>
              <span className="text-muted-foreground text-xs">+</span>
              <kbd className="pointer-events-none inline-flex h-6 w-6 select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-medium text-foreground shadow-sm">
                B
              </kbd>
            </div>
          </div>
        } 
        code={`<script setup>
import { Kbd } from '@/components/ui/kbd'
</script>

<template>
  <!-- Modifier Keys - Mac -->
  <div class="flex items-center gap-2">
    <Kbd>⌘</Kbd>
    <Kbd>⇧</Kbd>
    <Kbd>⌥</Kbd>
    <Kbd>⌃</Kbd>
  </div>

  <!-- Key Combination - Windows -->
  <div class="flex items-center gap-2">
    <Kbd>Ctrl</Kbd>
    <span class="text-muted-foreground">+</span>
    <Kbd>B</Kbd>
  </div>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/kbd" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Kbd } from '@/components/ui/kbd'`} /><CodeBlock code={`<!-- Modifier Keys - Mac -->
<div class="flex items-center gap-2">
  <Kbd>⌘</Kbd>
  <Kbd>⇧</Kbd>
  <Kbd>⌥</Kbd>
  <Kbd>⌃</Kbd>
</div>

<!-- Key Combination - Windows -->
<div class="flex items-center gap-2">
  <Kbd>Ctrl</Kbd>
  <span class="text-muted-foreground">+</span>
  <Kbd>B</Kbd>
</div>`} /></div>
    </div>
  );
};

