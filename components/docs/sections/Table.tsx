import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Table: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Table</h1><p className="text-xl text-muted-foreground">A responsive table component.</p></div>
      <ComponentPreview preview={<div className="w-full overflow-auto rounded-md border"><table className="w-full caption-bottom text-sm"><thead className="[&_tr]:border-b"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">Invoice</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Method</th><th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Amount</th></tr></thead><tbody className="[&_tr:last-child]:border-0"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV001</td><td className="p-4 align-middle">Paid</td><td className="p-4 align-middle">Credit Card</td><td className="p-4 align-middle text-right">$250.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV002</td><td className="p-4 align-middle">Pending</td><td className="p-4 align-middle">PayPal</td><td className="p-4 align-middle text-right">$150.00</td></tr></tbody></table></div>} code={`<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
</script>

<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell class="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/table" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Table, TableRow, TableCell, TableHead } from '@/components/ui/table'`} /><CodeBlock code={`<Table>
  <TableRow>
    <TableCell>Content</TableCell>
  </TableRow>
</Table>`} /></div>
    </div>
  );
};

