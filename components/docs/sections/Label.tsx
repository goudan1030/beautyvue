import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Label: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Label</h1><p className="text-xl text-muted-foreground">Renders an accessible label associated with controls.</p></div>
      <ComponentPreview 
        preview={
          <div className="flex items-center space-x-2">
            <button
              type="button"
              role="checkbox"
              aria-checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              className={`
                h-4 w-4 shrink-0 rounded-sm border-2 
                flex items-center justify-center
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                ${
                  isChecked
                    ? 'bg-foreground border-foreground'
                    : 'border-primary bg-background'
                }
                hover:opacity-80
              `}
            >
              {isChecked && (
                <Check className="h-3 w-3 text-background strokeWidth={3}" />
              )}
            </button>
            <label 
              htmlFor="terms"
              className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              onClick={() => setIsChecked(!isChecked)}
            >
              Accept terms and conditions
            </label>
          </div>
        } 
        code={`<script setup>
import { Label } from '@/components/ui/label'
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

const isChecked = ref(true)
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      type="button"
      role="checkbox"
      :aria-checked="isChecked"
      @click="isChecked = !isChecked"
      :class="[
        'h-4 w-4 shrink-0 rounded-sm border-2 flex items-center justify-center transition-all',
        isChecked 
          ? 'bg-foreground border-foreground' 
          : 'border-primary bg-background'
      ]"
    >
      <Check v-if="isChecked" class="h-3 w-3 text-background" stroke-width="3" />
    </button>
    <Label for="terms" @click="isChecked = !isChecked">
      Accept terms and conditions
    </Label>
  </div>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/label" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Label } from '@/components/ui/label'
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

const isChecked = ref(true)`} /><CodeBlock code={`<div class="flex items-center space-x-2">
  <button
    type="button"
    role="checkbox"
    :aria-checked="isChecked"
    @click="isChecked = !isChecked"
    :class="[
      'h-4 w-4 shrink-0 rounded-sm border-2 flex items-center justify-center transition-all',
      isChecked 
        ? 'bg-foreground border-foreground' 
        : 'border-primary bg-background'
    ]"
  >
    <Check v-if="isChecked" class="h-3 w-3 text-background" stroke-width="3" />
  </button>
  <Label for="terms" @click="isChecked = !isChecked">
    Accept terms and conditions
  </Label>
</div>`} /></div>
    </div>
  );
};

