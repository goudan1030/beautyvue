import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Field: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Field</h1><p className="text-xl text-muted-foreground">A semantic wrapper for form controls with label and description.</p></div>
      <ComponentPreview preview={<div className="grid w-full max-w-sm items-center gap-1.5"><label className="text-sm font-medium leading-none">Email</label><input type="email" placeholder="Email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /><p className="text-[0.8rem] text-muted-foreground">We'll never share your email.</p></div>} code={`<script setup>import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field'</script>

<template>
  <Field>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="email@example.com" />
    <FieldDescription>We'll never share your email.</FieldDescription>
  </Field>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/field" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Field, FieldLabel } from '@/components/ui/field'`} /><CodeBlock code={`<Field>
  <FieldLabel>Label</FieldLabel>
  <Input />
</Field>`} /></div>
    </div>
  );
};

