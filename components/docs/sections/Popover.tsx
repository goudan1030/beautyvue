import React, { useEffect, useRef, useState } from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface PopoverProps {
  state: DocSectionState;
}

export const Popover: React.FC<PopoverProps> = ({ state }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState('100%');
  const [maxWidth, setMaxWidth] = useState('300px');
  const [height, setHeight] = useState('25px');
  const [maxHeight, setMaxHeight] = useState('none');

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        state.setIsPopoverOpen(false);
      }
    };

    if (state.isPopoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [state.isPopoverOpen, state]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Popover</h1><p className="text-xl text-muted-foreground">Displays rich content in a portal, triggered by a button.</p></div>
      <ComponentPreview 
        preview={
          <div className="flex items-center justify-center">
            <div className="relative">
              <button
                ref={triggerRef}
                onClick={() => state.setIsPopoverOpen(!state.isPopoverOpen)}
                className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Open popover
              </button>
              {state.isPopoverOpen && (
                <div
                  ref={popoverRef}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 rounded-md border bg-background p-3 text-foreground shadow-md outline-none z-50"
                  style={{ backgroundColor: 'hsl(var(--background))' }}
                >
                  <div className="space-y-3">
                    <div className="space-y-0.5">
                      <h4 className="font-semibold leading-none text-sm">Dimensions</h4>
                      <p className="text-xs text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2.5">
                      <div className="grid grid-cols-[80px_1fr] items-center gap-3">
                        <label htmlFor="width" className="text-sm font-medium leading-none whitespace-nowrap">
                          Width
                        </label>
                        <input
                          id="width"
                          type="text"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          className="h-8 rounded-md border border-input bg-background px-2.5 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-[80px_1fr] items-center gap-3">
                        <label htmlFor="max-width" className="text-sm font-medium leading-none whitespace-nowrap">
                          Max. width
                        </label>
                        <input
                          id="max-width"
                          type="text"
                          value={maxWidth}
                          onChange={(e) => setMaxWidth(e.target.value)}
                          className="h-8 rounded-md border border-input bg-background px-2.5 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-[80px_1fr] items-center gap-3">
                        <label htmlFor="height" className="text-sm font-medium leading-none whitespace-nowrap">
                          Height
                        </label>
                        <input
                          id="height"
                          type="text"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className="h-8 rounded-md border border-input bg-background px-2.5 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-[80px_1fr] items-center gap-3">
                        <label htmlFor="max-height" className="text-sm font-medium leading-none whitespace-nowrap">
                          Max. height
                        </label>
                        <input
                          id="max-height"
                          type="text"
                          value={maxHeight}
                          onChange={(e) => setMaxHeight(e.target.value)}
                          className="h-8 rounded-md border border-input bg-background px-2.5 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        } 
        code={`<script setup>
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open popover</PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="space-y-4">
        <div class="space-y-1">
          <h4 class="font-semibold leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="width">Width</Label>
            <Input id="width" value="100%" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="max-width">Max. width</Label>
            <Input id="max-width" value="300px" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="height">Height</Label>
            <Input id="height" value="25px" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="max-height">Max. height</Label>
            <Input id="max-height" value="none" class="col-span-3" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/popover" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'`} /><CodeBlock code={`<Popover>
  <PopoverTrigger>Open popover</PopoverTrigger>
  <PopoverContent class="w-80">
    <div class="space-y-4">
      <div class="space-y-1">
        <h4 class="font-semibold leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div class="grid gap-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="width">Width</Label>
          <Input id="width" value="100%" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="max-width">Max. width</Label>
          <Input id="max-width" value="300px" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="height">Height</Label>
          <Input id="height" value="25px" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="max-height">Max. height</Label>
          <Input id="max-height" value="none" class="col-span-3" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`} /></div>
    </div>
  );
};

