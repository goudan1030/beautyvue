import React from 'react';
import { LayoutDashboard, ShoppingCart, Package } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sidebar</h1><p className="text-xl text-muted-foreground">A composable sidebar structure for dashboards.</p></div>
      <ComponentPreview preview={<div className="flex h-[300px] w-full border rounded-lg overflow-hidden"><div className="w-[200px] border-r bg-muted/10 p-4 space-y-4"><div className="font-semibold px-2">My App</div><div className="space-y-1"><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md"><LayoutDashboard className="h-4 w-4" />Dashboard</button><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md text-muted-foreground"><ShoppingCart className="h-4 w-4" />Orders</button><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md text-muted-foreground"><Package className="h-4 w-4" />Products</button></div></div><div className="flex-1 p-6"><h3 className="text-lg font-medium">Dashboard Overview</h3><div className="grid gap-4 mt-4 grid-cols-2"><div className="h-20 rounded-md bg-muted/20 border border-dashed"></div><div className="h-20 rounded-md bg-muted/20 border border-dashed"></div><div className="h-20 rounded-md bg-muted/20 border border-dashed col-span-2"></div></div></div></div>} code={`<script setup>import { Sidebar } from '@/components/ui/sidebar'</script>

<template>
  <Sidebar>
    <!-- Sidebar content -->
  </Sidebar>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/sidebar" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Sidebar } from '@/components/ui/sidebar'`} /><CodeBlock code={`<Sidebar>
  Content
</Sidebar>`} /></div>
    </div>
  );
};

