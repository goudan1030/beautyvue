import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DatePickerProps {
  state: DocSectionState;
}

export const DatePicker: React.FC<DatePickerProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Date Picker</h1><p className="text-xl text-muted-foreground">A date picker component with range and presets.</p></div>
      <ComponentPreview preview={<div className="relative"><button onClick={() => state.setDatePickerOpen(!state.datePickerOpen)} className={`w-[280px] justify-start text-left font-normal flex items-center h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${!state.datePickerDate ? 'text-muted-foreground' : ''}`}><CalendarIcon className="mr-2 h-4 w-4" />{state.datePickerDate ? state.datePickerDate.toLocaleDateString() : "Pick a date"}</button>{state.datePickerOpen && (<div className="absolute top-full mt-2 z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in zoom-in-95"><div className="space-y-2"><div className="flex justify-between items-center mb-2"><button className="p-1 hover:bg-muted rounded"><ChevronLeft className="w-4 h-4" /></button><span className="font-medium text-sm">Today</span><button className="p-1 hover:bg-muted rounded"><ChevronRight className="w-4 h-4" /></button></div><div className="grid grid-cols-7 gap-1 text-center text-xs mb-2"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div className="grid grid-cols-7 gap-1">{Array.from({length: 30}).map((_, i) => (<button key={i} onClick={() => { state.setDatePickerDate(new Date()); state.setDatePickerOpen(false); }} className="h-8 w-8 rounded-sm hover:bg-accent hover:text-accent-foreground flex items-center justify-center text-sm">{i + 1}</button>))}</div></div></div>)}</div>} code={`<script setup>
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-vue-next'

const date = ref()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" :class="cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')">
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ date ? date.toLocaleDateString() : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" mode="single" initial-focus />
    </PopoverContent>
  </Popover>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/calendar @beautyvue/popover" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'`} /><CodeBlock code={`<Popover>
  <PopoverTrigger>Pick date</PopoverTrigger>
  <PopoverContent>
    <Calendar />
  </PopoverContent>
</Popover>`} /></div>
    </div>
  );
};

