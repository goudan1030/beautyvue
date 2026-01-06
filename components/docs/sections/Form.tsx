import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Form: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Form</h1><p className="text-xl text-muted-foreground">Building forms with VeeValidate and Zod.</p></div>
      <ComponentPreview preview={<form className="w-2/3 space-y-6" onSubmit={(e) => e.preventDefault()}><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label><input placeholder="shadcn" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /><p className="text-[0.8rem] text-muted-foreground">This is your public display name.</p></div><button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Submit</button></form>} code={`<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Submit</Button>
  </form>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install vee-validate zod @vee-validate/zod" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'`} /><CodeBlock code={`<form @submit="onSubmit">
  <FormField name="username">
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</form>`} /></div>
    </div>
  );
};

