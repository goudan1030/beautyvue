import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface SheetProps {
  state: DocSectionState;
}

export const Sheet: React.FC<SheetProps> = ({ state }) => {
  const [name, setName] = useState('Pedro Duarte');
  const [username, setUsername] = useState('@peduarte');

  // ESC 键关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.isSheetOpen) {
        state.setIsSheetOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [state.isSheetOpen, state]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sheet</h1><p className="text-xl text-muted-foreground">Extends the Dialog component to display content that complements the main screen.</p></div>
      <ComponentPreview 
        preview={
          <div className="relative">
            <button
              onClick={() => state.setIsSheetOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Open Sheet
            </button>

            {/* Backdrop */}
            {state.isSheetOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-[90]"
                onClick={() => state.setIsSheetOpen(false)}
              />
            )}

            {/* Sheet */}
            {state.isSheetOpen && (
              <div
                className="fixed inset-y-0 right-0 z-[100] h-full w-full max-w-sm border-l bg-background shadow-lg transition-transform duration-300 ease-in-out"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    state.setIsSheetOpen(false);
                  }
                }}
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b px-6 py-4">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold">Edit profile</h2>
                      <p className="text-sm text-muted-foreground">
                        Make changes to your profile here. Click save when you're done.
                      </p>
                    </div>
                    <button
                      onClick={() => state.setIsSheetOpen(false)}
                      className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="sheet-name" className="text-sm font-medium leading-none">
                          Name
                        </label>
                        <input
                          id="sheet-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          onKeyDown={(e) => {
                            if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="sheet-username" className="text-sm font-medium leading-none">
                          Username
                        </label>
                        <input
                          id="sheet-username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          onKeyDown={(e) => {
                            if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-end gap-3 border-t px-6 py-4">
                    <button
                      onClick={() => state.setIsSheetOpen(false)}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => state.setIsSheetOpen(false)}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        } 
        code={`<script setup>
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'

const name = ref('Pedro Duarte')
const username = ref('@peduarte')
</script>

<template>
  <Sheet>
    <SheetTrigger>Open Sheet</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="space-y-4 py-4">
        <div class="space-y-2">
          <Label for="name">Name</Label>
          <Input id="name" v-model="name" />
        </div>
        <div class="space-y-2">
          <Label for="username">Username</Label>
          <Input id="username" v-model="username" />
        </div>
      </div>
      <div class="flex items-center justify-end gap-3 border-t pt-4">
        <Button variant="outline">Close</Button>
        <Button>Save changes</Button>
      </div>
    </SheetContent>
  </Sheet>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/sheet" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'`} /><CodeBlock code={`<Sheet>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div class="space-y-4 py-4">
      <div class="space-y-2">
        <Label for="name">Name</Label>
        <Input id="name" v-model="name" />
      </div>
      <div class="space-y-2">
        <Label for="username">Username</Label>
        <Input id="username" v-model="username" />
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 border-t pt-4">
      <Button variant="outline">Close</Button>
      <Button>Save changes</Button>
    </div>
  </SheetContent>
</Sheet>`} /></div>
    </div>
  );
};

