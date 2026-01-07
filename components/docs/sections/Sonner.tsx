import React, { useState } from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SonnerProps {
  state: DocSectionState;
}

export const Sonner: React.FC<SonnerProps> = ({ state }) => {
  const [toasts, setToasts] = useState<Array<{ id: number; title: string; description: string }>>([]);
  const [isHovered, setIsHovered] = useState(false);

  const addToast = () => {
    const newToast = {
      id: Date.now(),
      title: 'Event has been created',
      description: 'Sunday, December 03, 2023 at 9:00 AM'
    };
    setToasts(prev => {
      const updated = [newToast, ...prev];
      return updated.slice(0, 3); // 最多3个
    });
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sonner</h1><p className="text-xl text-muted-foreground">An opinionated toast component for Vue.</p></div>
      <ComponentPreview 
        preview={
          <>
            <button
              onClick={addToast}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Show Toast
            </button>
            
            {/* Toast Container */}
            {toasts.length > 0 && (
              <div 
                className="fixed bottom-4 right-4 z-[100]"
                style={{ width: '356px' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {toasts.map((toast, index) => {
                  // 鼠标移入整个区域时，所有 toast 都完全展开
                  const isExpanded = isHovered;
                  
                  // 堆叠效果：每个 toast 向上偏移，形成堆叠
                  // 堆叠时：每个 toast 向上偏移 8px
                  // 展开时：每个 toast 向上偏移更多，完全展开（间距更大）
                  const baseOffset = index * 8; // 基础堆叠偏移
                  const expandedOffset = index * 110; // 展开时的偏移，间距更大（确保完全展开，不重叠）
                  const offset = isExpanded ? expandedOffset : baseOffset;
                  
                  return (
                    <div
                      key={toast.id}
                      className="absolute flex items-center w-full max-w-[356px] gap-4 rounded-lg border bg-background p-4 shadow-lg transition-all duration-300"
                      style={{
                        bottom: `${offset}px`,
                        right: '0',
                        opacity: isExpanded ? 1 : Math.max(0.7, 1 - index * 0.15),
                        zIndex: 100 - index,
                        transform: isExpanded ? 'scale(1)' : `scale(${Math.max(0.95, 1 - index * 0.03)})`,
                        pointerEvents: 'auto',
                      }}
                    >
                      <div className="grid gap-1 flex-1">
                        <h5 className="text-sm font-semibold">{toast.title}</h5>
                        <p className="text-sm text-muted-foreground">{toast.description}</p>
                      </div>
                      <button
                        onClick={() => removeToast(toast.id)}
                        className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Undo
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        } 
        code={`<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <Button @click="toast('Event has been created', {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo')
    }
  })">
    Show Toast
  </Button>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install vue-sonner" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { toast } from 'vue-sonner'`} /><CodeBlock code={`toast('Event has been created', {
  description: 'Sunday, December 03, 2023 at 9:00 AM',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  }
})`} /></div>
    </div>
  );
};

