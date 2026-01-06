import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ButtonProps {
  state: DocSectionState;
}

export const Button: React.FC<ButtonProps> = ({ state }) => {
  const handleButtonClick = (id: string) => {
    state.setClickedButtonId(id);
    setTimeout(() => state.setClickedButtonId(null), 150);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1><p className="text-xl text-muted-foreground">Displays a button.</p></div>
      <ComponentPreview preview={
        <div className="flex flex-col gap-6 items-center">
          {/* Basic Variants */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => handleButtonClick('primary')}
              className={`bg-primary text-primary-foreground h-10 px-4 rounded-md text-sm font-medium transition-all shadow hover:bg-primary/90 hover:shadow-md active:scale-95 active:shadow-sm ${state.clickedButtonId === 'primary' ? 'scale-95' : ''}`}
            >
              Primary
            </button>
            <button
              onClick={() => handleButtonClick('secondary')}
              className={`bg-secondary text-secondary-foreground h-10 px-4 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-secondary/80 active:scale-95 ${state.clickedButtonId === 'secondary' ? 'scale-95' : ''}`}
            >
              Secondary
            </button>
          </div>
          {/* Outline and Ghost */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => handleButtonClick('outline')}
              className={`border border-input bg-transparent h-10 px-4 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-95 active:bg-accent/80 ${state.clickedButtonId === 'outline' ? 'scale-95' : ''}`}
            >
              Outline
            </button>
            <button
              onClick={() => handleButtonClick('ghost')}
              className={`h-10 px-4 rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground active:scale-95 active:bg-accent/80 ${state.clickedButtonId === 'ghost' ? 'scale-95' : ''}`}
            >
              Ghost
            </button>
          </div>
        </div>
      } code={`<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <!-- Primary Button -->
  <Button 
    variant="primary"
    class="transition-all active:scale-95"
    @click="handleClick"
  >
    Primary
  </Button>

  <!-- Secondary Button -->
  <Button 
    variant="secondary"
    class="transition-all active:scale-95"
  >
    Secondary
  </Button>

  <!-- Outline Button -->
  <Button 
    variant="outline"
    class="transition-all active:scale-95"
  >
    Outline
  </Button>

  <!-- Ghost Button -->
  <Button 
    variant="ghost"
    class="transition-all active:scale-95"
  >
    Ghost
  </Button>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/button" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Button } from '@/components/ui/button'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <CodeBlock code={`<Button>Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`} />
        <h3 className="text-lg font-semibold">With Click and Press Effects</h3>
        <CodeBlock code={`<Button 
  class="transition-all active:scale-95 active:shadow-sm"
  @click="handleClick"
>
  Click Me
</Button>`} />
      </div>
      </div>
    </div>
  );
};

