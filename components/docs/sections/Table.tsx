import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Table: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Table</h1><p className="text-xl text-muted-foreground">A responsive table component.</p></div>
      <ComponentPreview preview={<div className="w-full overflow-auto"><table className="w-full caption-bottom text-sm"><caption className="mt-4 text-sm text-muted-foreground">A list of your recent invoices.</caption><thead className="[&_tr]:border-b"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">Invoice</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Method</th><th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Amount</th></tr></thead><tbody className="[&_tr:last-child]:border-0"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV001</td><td className="p-4 align-middle">Paid</td><td className="p-4 align-middle">Credit Card</td><td className="p-4 align-middle text-right">$250.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV002</td><td className="p-4 align-middle">Pending</td><td className="p-4 align-middle">PayPal</td><td className="p-4 align-middle text-right">$150.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV003</td><td className="p-4 align-middle">Unpaid</td><td className="p-4 align-middle">Bank Transfer</td><td className="p-4 align-middle text-right">$350.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV004</td><td className="p-4 align-middle">Paid</td><td className="p-4 align-middle">Credit Card</td><td className="p-4 align-middle text-right">$450.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV005</td><td className="p-4 align-middle">Paid</td><td className="p-4 align-middle">PayPal</td><td className="p-4 align-middle text-right">$550.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV006</td><td className="p-4 align-middle">Pending</td><td className="p-4 align-middle">Bank Transfer</td><td className="p-4 align-middle text-right">$200.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV007</td><td className="p-4 align-middle">Unpaid</td><td className="p-4 align-middle">Credit Card</td><td className="p-4 align-middle text-right">$300.00</td></tr></tbody><tfoot><tr className="border-t-2 border-muted bg-muted/30 transition-colors"><td className="p-4 align-middle font-medium">Total</td><td className="p-4 align-middle"></td><td className="p-4 align-middle"></td><td className="p-4 align-middle text-right font-semibold">$2,500.00</td></tr></tfoot></table></div>} code={`<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '@/components/ui/table'
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
      <TableRow>
        <TableCell class="font-medium">INV002</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>PayPal</TableCell>
        <TableCell class="text-right">$150.00</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell class="font-medium">Total</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell class="text-right font-semibold">$2,500.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/table" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '@/components/ui/table'`} /><CodeBlock code={`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
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
  <TableFooter>
    <TableRow>
      <TableCell class="font-medium">Total</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell class="text-right font-semibold">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`} /></div>
    </div>
  );
};

