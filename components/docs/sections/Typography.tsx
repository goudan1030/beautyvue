import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Typography: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Typography</h1><p className="text-xl text-muted-foreground">Styles for headings, paragraphs, lists...etc.</p></div>
      <ComponentPreview preview={<div className="space-y-4 max-w-lg"><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">The Joke Tax Chronicles</h1><p className="leading-7 [&:not(:first-child)]:mt-6">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.</p><blockquote className="mt-6 border-l-2 pl-6 italic">"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote><ul className="my-6 ml-6 list-disc [&>li]:mt-2"><li>1st level of puns: 5 gold coins</li><li>2nd level of jokes: 10 gold coins</li><li>3rd level of one-liners : 20 gold coins</li></ul></div>} code={`<template>
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    The Joke Tax Chronicles
  </h1>
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    Once upon a time, in a far-off land, there was a very lazy king who
    spent all day lounging on his throne. One day, his advisors came to him
    with a problem: the kingdom was running out of money.
  </p>
  <blockquote class="mt-6 border-l-2 pl-6 italic">
    "After all," he said, "everyone enjoys a good joke, so it's only fair
    that they should pay for the privilege."
  </blockquote>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/typography" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`Typography styles are included by default.`} /></div>
    </div>
  );
};

