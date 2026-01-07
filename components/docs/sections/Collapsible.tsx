import React from 'react';
import { ChevronUp } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface CollapsibleProps {
  state: DocSectionState;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ state }) => {
  const repositories = [
    '@radix-ui/primitives',
    '@radix-ui/colors',
    '@stitches/react',
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-xl text-muted-foreground">An interactive component which expands/collapses a panel.</p>
      </div>

      <ComponentPreview 
        preview={
          <div className="w-[350px] space-y-2">
            {/* Collapsible Trigger */}
            <button
              onClick={() => state.setIsCollapsibleOpen(!state.isCollapsibleOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-muted/50 rounded-md transition-colors"
            >
              <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <ChevronUp 
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                  state.isCollapsibleOpen ? '' : 'rotate-180'
                }`}
              />
            </button>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                state.isCollapsibleOpen 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-2 px-4 pb-2">
                {repositories.map((repo, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-md border bg-card text-card-foreground text-sm font-mono hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    {repo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        } 
        code={`<script setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <Collapsible v-model:open="open">
    <CollapsibleTrigger class="flex items-center justify-between w-full">
      <h4>@peduarte starred 3 repositories</h4>
      <ChevronUp class="h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div class="space-y-2">
        <div class="px-3 py-2 rounded-md border bg-card">
          @radix-ui/primitives
        </div>
        <div class="px-3 py-2 rounded-md border bg-card">
          @radix-ui/colors
        </div>
        <div class="px-3 py-2 rounded-md border bg-card">
          @stitches/react
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>`} 
      />

      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/collapsible" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'`} />
        
        <div className="space-y-3 mt-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <CodeBlock code={`<script setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution required.
    </CollapsibleContent>
  </Collapsible>
</template>`} />

          <h3 className="text-lg font-semibold">Controlled</h3>
          <CodeBlock code={`<script setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <Collapsible v-model:open="open">
    <CollapsibleTrigger>Toggle</CollapsibleTrigger>
    <CollapsibleContent>
      Content that can be expanded or collapsed.
    </CollapsibleContent>
  </Collapsible>
</template>`} />
        </div>
      </div>
    </div>
  );
};

