import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface AccordionProps {
  state: DocSectionState;
}

export const Accordion: React.FC<AccordionProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Accordion</h1><p className="text-xl text-muted-foreground">A vertically stacked set of interactive headings that each reveal a section of content.</p></div>
      <ComponentPreview preview={<div className="w-full max-w-sm">{['Is it accessible?', 'Is it styled?', 'Is it animated?'].map((question, i) => (<div key={i} className="border-b"><button onClick={() => state.setAccordionValue(state.accordionValue === `item-${i+1}` ? null : `item-${i+1}`)} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left">{question}<ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${state.accordionValue === `item-${i+1}` ? "rotate-180" : ""}`} /></button><div className={`overflow-hidden text-sm transition-all duration-300 ${state.accordionValue === `item-${i+1}` ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>Yes. It adheres to WAI-ARIA design patterns.</div></div>))}</div>} code={`<script setup>
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@beautyvue/core'
</script>

<template>
<Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger>Is it accessible?</AccordionTrigger>
  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
</AccordionItem>
</Accordion>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/accordion" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'`} /><CodeBlock code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`} /></div>
    </div>
  );
};

