import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface CarouselProps {
  state: DocSectionState;
}

export const Carousel: React.FC<CarouselProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Carousel</h1><p className="text-xl text-muted-foreground">A carousel with motion and swipe built using Embla.</p></div>
      <ComponentPreview preview={<div className="relative w-full max-w-xs mx-auto"><div className="overflow-hidden rounded-xl border bg-card"><div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${state.currentSlide * 100}%)` }}>{Array.from({ length: 5 }).map((_, index) => (<div key={index} className="min-w-full p-6"><div className="flex aspect-square items-center justify-center rounded-lg border bg-muted"><span className="text-4xl font-semibold">{index + 1}</span></div></div>))}</div></div><button onClick={() => state.setCurrentSlide(state.currentSlide === 0 ? 4 : state.currentSlide - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => state.setCurrentSlide(state.currentSlide === 4 ? 0 : state.currentSlide + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-accent"><ChevronRight className="h-4 w-4" /></button></div>} code={`<script setup>
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>

<template>
  <Carousel class="w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/carousel embla-carousel-vue" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'`} /><CodeBlock code={`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} /></div>
    </div>
  );
};

