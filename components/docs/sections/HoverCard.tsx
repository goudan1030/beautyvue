import React from 'react';
import { CalendarDays } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const HoverCard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hover Card</h1><p className="text-xl text-muted-foreground">For sighted users to preview content available behind a link.</p></div>
      <ComponentPreview
        preview={
          <div className="flex items-center justify-center h-[200px]">
            <div className="relative group">
              <button className="text-sm font-semibold hover:underline">@vuejs</button>
              <div className="absolute left-0 top-6 w-[320px] rounded-md border bg-background p-4 text-popover-foreground shadow-md outline-none group-hover:block hidden z-50" style={{ backgroundColor: 'hsl(var(--background))' }}>
                <div className="flex gap-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                    <img
                      src="https://vuejs.org/images/logo.png"
                      alt="Vue Logo"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h4 className="text-sm font-semibold">@vuejs</h4>
                    <p className="text-sm">The Progressive JavaScript Framework.</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70 shrink-0" />
                      <span className="text-xs text-muted-foreground">Joined January 2014</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        code={
          "<HoverCard>\n  <HoverCardTrigger>Hover</HoverCardTrigger>\n  <HoverCardContent>The Vue.js framework.</HoverCardContent>\n</HoverCard>"
        }
      />
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CodeBlock code="npm install @beautyvue/hover-card" />
      </div>
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <CodeBlock code={`import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'`} />
        <CodeBlock
          code={
            "<HoverCard>\n  <HoverCardTrigger>Hover</HoverCardTrigger>\n  <HoverCardContent>Content</HoverCardContent>\n</HoverCard>"
          }
        />
      </div>
    </div>
  );
};

