import React from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface CheckboxProps {
  state: DocSectionState;
}

export const Checkbox: React.FC<CheckboxProps> = ({ state }) => {
  // Checkbox 组件样式和交互
  const CheckboxItem = ({ 
    checked, 
    onToggle, 
    label, 
    description, 
    disabled = false,
    highlighted = false 
  }: {
    checked: boolean;
    onToggle: () => void;
    label: string;
    description?: string;
    disabled?: boolean;
    highlighted?: boolean;
  }) => {
    return (
      <div 
        className={`flex ${description ? 'items-start' : 'items-center'} space-x-2 p-3 rounded-md transition-colors ${
          highlighted 
            ? 'border border-primary/50 bg-primary/5' 
            : ''
        }`}
      >
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          disabled={disabled}
          onClick={disabled ? undefined : onToggle}
          className={`
            h-4 w-4 shrink-0 rounded-sm border-2 
            flex items-center justify-center
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50
            ${description ? 'mt-0.5' : ''}
            ${
              checked
                ? 'bg-primary border-primary text-primary-foreground'
                : 'border-primary bg-background'
            }
            ${
              disabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:border-primary'
            }
          `}
        >
          {checked && (
            <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
          )}
        </button>
        <div className="flex-1 space-y-1">
          <label
            onClick={disabled ? undefined : onToggle}
            className={`
              text-sm font-medium leading-none
              cursor-pointer select-none
              ${
                disabled
                  ? 'cursor-not-allowed text-muted-foreground'
                  : 'cursor-pointer'
              }
            `}
          >
            {label}
          </label>
          {description && (
            <p className="text-sm text-muted-foreground leading-none">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>
      </div>

      <ComponentPreview 
        preview={
          <div className="space-y-4">
            {/* Example 1: Basic checked */}
            <CheckboxItem
              checked={state.isChecked}
              onToggle={() => state.setIsChecked(!state.isChecked)}
              label="Accept terms and conditions"
            />

            {/* Example 2: Checked with description */}
            <CheckboxItem
              checked={state.isChecked2}
              onToggle={() => state.setIsChecked2(!state.isChecked2)}
              label="Accept terms and conditions"
              description="By clicking this checkbox, you agree to the terms and conditions."
            />

            {/* Example 3: Disabled unchecked */}
            <CheckboxItem
              checked={state.isChecked3}
              onToggle={() => state.setIsChecked3(!state.isChecked3)}
              label="Enable notifications"
              disabled={true}
            />

            {/* Example 4: Highlighted checked with description */}
            <CheckboxItem
              checked={state.isChecked4}
              onToggle={() => state.setIsChecked4(!state.isChecked4)}
              label="Enable notifications"
              description="You can enable or disable notifications at any time."
              highlighted={true}
            />
          </div>
        } 
        code={`<script setup>
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox 
      id="terms" 
      :checked="checked"
      @update:checked="checked = $event"
    />
    <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      Accept terms and conditions
    </label>
  </div>
</template>`} 
      />

      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/checkbox" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Checkbox } from '@/components/ui/checkbox'`} />
        
        <div className="space-y-3 mt-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <CodeBlock code={`<script setup>
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>`} />

          <h3 className="text-lg font-semibold">With Description</h3>
          <CodeBlock code={`<script setup>
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-start space-x-3">
    <Checkbox id="terms" />
    <div class="space-y-1">
      <label for="terms" class="text-sm font-medium leading-none">
        Accept terms and conditions
      </label>
      <p class="text-sm text-muted-foreground">
        By clicking this checkbox, you agree to the terms and conditions.
      </p>
    </div>
  </div>
</template>`} />

          <h3 className="text-lg font-semibold">Disabled</h3>
          <CodeBlock code={`<script setup>
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="notifications" disabled />
    <label for="notifications" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      Enable notifications
    </label>
  </div>
</template>`} />
        </div>
      </div>
    </div>
  );
};

