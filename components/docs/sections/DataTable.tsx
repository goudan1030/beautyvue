import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const DataTable: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Data Table</h1><p className="text-xl text-muted-foreground">Powerful table and data grid components.</p></div>
      <ComponentPreview preview={<div className="w-full"><div className="flex items-center py-4"><input placeholder="Filter emails..." className="max-w-sm flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" /></div><div className="rounded-md border"><table className="w-full caption-bottom text-sm"><thead className="[&_tr]:border-b"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"><button className="inline-flex items-center hover:text-foreground">Status <ArrowUpDown className="ml-2 h-4 w-4" /></button></th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Email</th><th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Amount</th></tr></thead><tbody className="[&_tr:last-child]:border-0"><tr className="border-b transition-colors hover:bg-muted/50"><td className="p-4 align-middle">Success</td><td className="p-4 align-middle">ken99@yahoo.com</td><td className="p-4 align-middle text-right">$316.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50"><td className="p-4 align-middle">Processing</td><td className="p-4 align-middle">abe45@gmail.com</td><td className="p-4 align-middle text-right">$242.00</td></tr></tbody></table></div><div className="flex items-center justify-end space-x-2 py-4"><button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm">Previous</button><button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm">Next</button></div></div>} code={`<script setup>
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { payments } from './data'
</script>

<template>
  <DataTable :columns="columns" :data="payments" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @tanstack/vue-table" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { DataTable } from '@/components/ui/data-table'`} /><CodeBlock code={`<DataTable :columns="columns" :data="data" />`} /></div>
    </div>
  );
};

