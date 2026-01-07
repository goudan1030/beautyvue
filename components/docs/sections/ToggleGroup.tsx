import React, { useState } from 'react';
import { Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon, Star, Heart, Bookmark } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ToggleGroupProps {
  state: DocSectionState;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ state }) => {
  const [iconGroup, setIconGroup] = useState<string[]>([]);

  const toggleIcon = (value: string) => {
    setIconGroup(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle Group</h1><p className="text-xl text-muted-foreground">A set of two-state buttons that can be toggled on or off.</p></div>
      <ComponentPreview preview={<div className="flex flex-col items-center gap-6"><div className="flex items-center rounded-md border bg-transparent"><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('bold') ? state.toggleGroupValue.filter(i => i !== 'bold') : [...state.toggleGroupValue, 'bold'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('bold') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><BoldIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('italic') ? state.toggleGroupValue.filter(i => i !== 'italic') : [...state.toggleGroupValue, 'italic'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('italic') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><ItalicIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => state.setToggleGroupValue(state.toggleGroupValue.includes('underline') ? state.toggleGroupValue.filter(i => i !== 'underline') : [...state.toggleGroupValue, 'underline'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${state.toggleGroupValue.includes('underline') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><UnderlineIcon className="h-4 w-4" /></button></div><div className="flex items-center gap-2"><button onClick={() => toggleIcon('star')} className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border bg-background text-sm font-medium transition-colors hover:bg-muted ${iconGroup.includes('star') ? 'bg-accent text-accent-foreground' : ''}`}><Star className={`h-4 w-4 ${iconGroup.includes('star') ? 'fill-yellow-400 text-yellow-400' : ''}`} /><span>Star</span></button><button onClick={() => toggleIcon('heart')} className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border bg-background text-sm font-medium transition-colors hover:bg-muted ${iconGroup.includes('heart') ? 'bg-accent text-accent-foreground' : ''}`}><Heart className={`h-4 w-4 ${iconGroup.includes('heart') ? 'fill-red-500 text-red-500' : ''}`} /><span>Heart</span></button><button onClick={() => toggleIcon('bookmark')} className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border bg-background text-sm font-medium transition-colors hover:bg-muted ${iconGroup.includes('bookmark') ? 'bg-accent text-accent-foreground' : ''}`}><Bookmark className={`h-4 w-4 ${iconGroup.includes('bookmark') ? 'fill-blue-500 text-blue-500' : ''}`} /><span>Bookmark</span></button></div></div>} code={`<script setup>
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline, Star, Heart, Bookmark } from 'lucide-vue-next'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline class="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
  
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="star" aria-label="Toggle star">
      <Star class="h-4 w-4" />
      <span>Star</span>
    </ToggleGroupItem>
    <ToggleGroupItem value="heart" aria-label="Toggle heart">
      <Heart class="h-4 w-4" />
      <span>Heart</span>
    </ToggleGroupItem>
    <ToggleGroupItem value="bookmark" aria-label="Toggle bookmark">
      <Bookmark class="h-4 w-4" />
      <span>Bookmark</span>
    </ToggleGroupItem>
  </ToggleGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toggle-group" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`} /><CodeBlock code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="star" aria-label="Toggle star">
    <Star class="h-4 w-4" />
    <span>Star</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="heart" aria-label="Toggle heart">
    <Heart class="h-4 w-4" />
    <span>Heart</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="bookmark" aria-label="Toggle bookmark">
    <Bookmark class="h-4 w-4" />
    <span>Bookmark</span>
  </ToggleGroupItem>
</ToggleGroup>`} /></div>
    </div>
  );
};

