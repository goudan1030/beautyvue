import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DrawerProps {
  state: DocSectionState;
}

export const Drawer: React.FC<DrawerProps> = ({ state }) => {
  const [goal, setGoal] = useState(350);

  // 生成柱状图数据（10个柱子）
  const chartData = Array.from({ length: 10 }, (_, i) => {
    // 生成随机高度，范围在 20% 到 100% 之间
    return Math.floor(Math.random() * 80) + 20;
  });

  const maxHeight = Math.max(...chartData);

  const handleDecrease = () => {
    setGoal((prev) => Math.max(0, prev - 10));
  };

  const handleIncrease = () => {
    setGoal((prev) => prev + 10);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Drawer</h1>
        <p className="text-xl text-muted-foreground">A drawer component for Vue.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="flex items-center justify-center w-full h-full">
            <button 
              onClick={() => state.setIsDrawerOpen(true)} 
              className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Open Drawer
            </button>
            
            {state.isDrawerOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" 
                  onClick={() => state.setIsDrawerOpen(false)} 
                />
                
                {/* Drawer Content */}
                <div 
                  className="fixed bottom-0 left-0 right-0 z-[101] bg-background border-t rounded-t-lg shadow-lg animate-in slide-in-from-bottom duration-300 max-h-[96vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                  style={{ backgroundColor: 'hsl(var(--background))' }}
                  onKeyDown={(e) => {
                    // ESC 键关闭抽屉
                    if (e.key === 'Escape') {
                      state.setIsDrawerOpen(false);
                    }
                  }}
                >
                  <div className="p-6 max-w-sm mx-auto">
                    {/* Handle bar */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-1.5 bg-muted rounded-full" />
                    </div>
                    
                    {/* Header */}
                    <div className="flex flex-col space-y-1.5 mb-6">
                      <h2 className="text-lg font-semibold leading-none tracking-tight">Move Goal</h2>
                      <p className="text-sm text-muted-foreground">
                        Set your daily activity goal.
                      </p>
                    </div>
                    
                    {/* Goal Value Section */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <button
                        onClick={handleDecrease}
                        className="h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold">{goal}</span>
                        <span className="text-sm text-muted-foreground mt-1">CALORIES/DAY</span>
                      </div>
                      
                      <button
                        onClick={handleIncrease}
                        className="h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Chart */}
                    <div className="mb-8">
                      <div className="flex items-end justify-center gap-1 h-32">
                        {chartData.map((value, index) => {
                          const height = (value / maxHeight) * 100;
                          return (
                            <div
                              key={index}
                              className="flex-1 bg-primary rounded-t-sm transition-all hover:opacity-80"
                              style={{
                                height: `${height}%`,
                                minHeight: '8px',
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t">
                      <button 
                        onClick={() => state.setIsDrawerOpen(false)}
                        className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => state.setIsDrawerOpen(false)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        } 
        code={`<script setup>
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger>Open Drawer</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>Cancel</DrawerClose>
        <Button>Submit</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/drawer" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'`} />
        <CodeBlock code={`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>Content</DrawerContent>
</Drawer>`} />
      </div>
    </div>
  );
};
