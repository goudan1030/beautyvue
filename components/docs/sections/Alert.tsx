import React from 'react';
import { Rocket, AlertCircle } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Alert: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Alert</h1><p className="text-xl text-muted-foreground">Displays a callout for user attention.</p></div>
      
      <ComponentPreview preview={
        <div className="w-full max-w-lg space-y-4">
          <div className="relative w-full rounded-lg border px-4 py-3 text-sm flex gap-3 items-start bg-background text-foreground">
            <Rocket className="h-4 w-4 mt-0.5" />
            <div>
              <h5 className="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
              <div className="text-sm opacity-90">You can add components to your app using the cli.</div>
            </div>
          </div>
        </div>
      } code={`<script setup>
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <Alert>
    <Rocket class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>`} />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Destructive</h3>
        <p className="text-muted-foreground">Used to indicate a critical error or warning.</p>
        <ComponentPreview preview={
          <div className="w-full max-w-lg space-y-4">
            <div className="relative w-full rounded-lg border border-destructive/50 px-4 py-3 text-sm flex gap-3 items-start text-destructive dark:border-destructive bg-background">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <div>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Error</h5>
                <div className="text-sm opacity-90">Your session has expired. Please log in again.</div>
              </div>
            </div>
          </div>
        } code={`<script setup>
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-vue-next'
</script>

<template>
  <Alert variant="destructive">
    <AlertCircle class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</template>`} />
      </div>

      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/alert" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"`} /><CodeBlock code={`<Alert>
  <Rocket class="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`} /></div>
    </div>
  );
};

