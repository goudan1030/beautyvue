import React from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Badge: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Badge</h1><p className="text-xl text-muted-foreground">Displays a badge.</p></div>
      <ComponentPreview preview={
        <div className="flex flex-col gap-6 items-center">
          {/* Variants Row 1 */}
          <div className="flex gap-4 flex-wrap items-center">
            <div className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Badge</div>
            <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Secondary</div>
            <div className="inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">Destructive</div>
            <div className="inline-flex items-center rounded-full border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground">Outline</div>
          </div>
          {/* Variants Row 2 - With Icons and Circular */}
          <div className="flex gap-4 flex-wrap items-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
              <Check className="h-3 w-3" />
              Verified
            </div>
            <div className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary w-6 h-6 text-xs font-semibold text-primary-foreground">8</div>
            <div className="inline-flex items-center justify-center rounded-full border border-transparent bg-destructive w-6 h-6 text-xs font-semibold text-destructive-foreground">99</div>
            <div className="inline-flex items-center justify-center rounded-full border border-input bg-background w-6 h-6 text-xs font-semibold text-foreground">20+</div>
          </div>
        </div>
      } code={`<script setup>
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-vue-next'
</script>

<template>
  <!-- Default Variants -->
  <Badge>Badge</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>

  <!-- With Icon -->
  <Badge class="bg-blue-600 text-white">
    <Check class="h-3 w-3 mr-1" />
    Verified
  </Badge>

  <!-- Circular Badges -->
  <Badge class="w-6 h-6 p-0 flex items-center justify-center">8</Badge>
  <Badge variant="destructive" class="w-6 h-6 p-0 flex items-center justify-center">99</Badge>
  <Badge variant="outline" class="w-6 h-6 p-0 flex items-center justify-center">20+</Badge>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/badge" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Badge } from '@/components/ui/badge'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <CodeBlock code={`<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`} />
        <h3 className="text-lg font-semibold">With Icon</h3>
        <CodeBlock code={`<script setup>
import { Check } from 'lucide-vue-next'
</script>

<template>
  <Badge class="bg-blue-600 text-white">
    <Check class="h-3 w-3 mr-1" />
    Verified
  </Badge>
</template>`} />
        <h3 className="text-lg font-semibold">Circular Badges</h3>
        <CodeBlock code={`<Badge class="w-6 h-6 p-0 flex items-center justify-center">8</Badge>
<Badge variant="destructive" class="w-6 h-6 p-0 flex items-center justify-center">99</Badge>
<Badge variant="outline" class="w-6 h-6 p-0 flex items-center justify-center">20+</Badge>`} />
      </div>
      </div>
    </div>
  );
};

