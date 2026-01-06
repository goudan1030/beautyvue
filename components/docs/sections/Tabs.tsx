import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface TabsProps {
  state: DocSectionState;
}

export const Tabs: React.FC<TabsProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tabs</h1><p className="text-xl text-muted-foreground">A set of layered sections of content—known as tab panels—that are displayed one at a time.</p></div>
      <ComponentPreview preview={<div className="w-[400px]"><div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full grid grid-cols-2"><button onClick={() => state.setActiveTab("account")} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${state.activeTab === "account" ? "bg-background text-foreground shadow-sm" : ""}`}>Account</button><button onClick={() => state.setActiveTab("password")} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${state.activeTab === "password" ? "bg-background text-foreground shadow-sm" : ""}`}>Password</button></div>{state.activeTab === "account" && (<div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200"><div className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-2"><div className="space-y-1"><h3 className="font-semibold leading-none tracking-tight">Account</h3><p className="text-sm text-muted-foreground">Make changes to your account here.</p></div></div></div>)}{state.activeTab === "password" && (<div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200"><div className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-2"><div className="space-y-1"><h3 className="font-semibold leading-none tracking-tight">Password</h3><p className="text-sm text-muted-foreground">Change your password here.</p></div></div></div>)}</div>} code={`<script setup>import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Make changes to your account here.</TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/tabs" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'`} /><CodeBlock code={`<Tabs>
  <TabsList>
    <TabsTrigger value="1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="1">Content</TabsContent>
</Tabs>`} /></div>
    </div>
  );
};

