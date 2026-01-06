import React from 'react';
import { Loader2 } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Spinner: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Spinner</h1><p className="text-xl text-muted-foreground">A loading spinner.</p></div>
      <ComponentPreview preview={<div className="flex items-center gap-4"><Loader2 className="h-4 w-4 animate-spin" /><Loader2 className="h-6 w-6 animate-spin text-primary" /><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /><button disabled className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</button></div>} code={`<script setup>import { Loader2 } from 'lucide-vue-next'</script>

<template>
  <Loader2 class="h-4 w-4 animate-spin" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install lucide-vue-next" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Loader2 } from 'lucide-vue-next'`} /><CodeBlock code={`<Loader2 class="animate-spin" />`} /></div>
    </div>
  );
};

