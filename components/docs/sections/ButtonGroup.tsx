import React from 'react';
import ReactDOM from 'react-dom';
import { ChevronLeft, MoreHorizontal, Mail, Box, Clock, Calendar as CalendarIcon, List, Tag, ChevronRight, Trash2 } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ButtonGroupProps {
  state: DocSectionState;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button Group</h1><p className="text-xl text-muted-foreground">A container that groups related buttons together with consistent styling.</p></div>
      <ComponentPreview preview={
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Basic Button Group */}
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-input bg-background rounded-l-lg hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Profile
            </button>
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Settings
            </button>
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-input bg-background rounded-r-lg hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Messages
            </button>
          </div>

          {/* Button Group with Dropdown */}
          <div className="relative inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-3 text-sm font-medium border border-input bg-background rounded-l-md hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Archive
            </button>
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Report
            </button>
            <button 
              type="button" 
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
            >
              Snooze
            </button>
            <div className="relative">
              <button 
                ref={state.buttonGroupTriggerRef}
                type="button" 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  state.setButtonGroupDropdownPosition({
                    top: rect.bottom + 4,
                    left: rect.right
                  });
                  state.setIsButtonGroupDropdownOpen(!state.isButtonGroupDropdownOpen);
                }}
                className="inline-flex items-center justify-center h-9 px-3 text-sm font-medium border border-input bg-background rounded-r-md hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {state.isButtonGroupDropdownOpen && state.buttonGroupDropdownPosition && ReactDOM.createPortal(
                <div 
                  ref={state.buttonGroupDropdownRef}
                  className="fixed w-56 rounded-md border border-border bg-background shadow-lg z-[9999] animate-in fade-in slide-in-from-top-2"
                  style={{
                    top: `${state.buttonGroupDropdownPosition.top}px`,
                    left: `${state.buttonGroupDropdownPosition.left - 224}px` // 224px is w-56 (14rem)
                  }}
                >
                  <div className="py-1">
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Mark as Read
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <Box className="h-4 w-4 text-muted-foreground" />
                      Archive
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Snooze
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      Add to Calendar
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <List className="h-4 w-4 text-muted-foreground" />
                      Add to List
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="flex-1">Label As...</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <div className="border-t border-border my-1"></div>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left text-destructive">
                      <Trash2 className="h-4 w-4" />
                      Trash
                    </button>
                  </div>
                </div>,
                document.body
              )}
            </div>
          </div>
        </div>
      } code={`<script setup>
import { ButtonGroup, Button } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ChevronLeft, MoreHorizontal, Mail, Box, Clock, Calendar, List, Tag, ChevronRight, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <!-- Basic Button Group -->
  <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <!-- Button Group with Dropdown -->
  <ButtonGroup>
    <Button><ChevronLeft class="h-4 w-4" /></Button>
    <Button>Archive</Button>
    <Button>Report</Button>
    <Button>Snooze</Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button class="rounded-l-none"><MoreHorizontal class="h-4 w-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuItem><Mail class="h-4 w-4 mr-2" /> Mark as Read</DropdownMenuItem>
        <DropdownMenuItem><Box class="h-4 w-4 mr-2" /> Archive</DropdownMenuItem>
        <DropdownMenuItem><Clock class="h-4 w-4 mr-2" /> Snooze</DropdownMenuItem>
        <DropdownMenuItem><Calendar class="h-4 w-4 mr-2" /> Add to Calendar</DropdownMenuItem>
        <DropdownMenuItem><List class="h-4 w-4 mr-2" /> Add to List</DropdownMenuItem>
        <DropdownMenuItem>
          <Tag class="h-4 w-4 mr-2" />
          <span>Label As...</span>
          <ChevronRight class="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive"><Trash2 class="h-4 w-4 mr-2" /> Trash</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/button-group" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ButtonGroup, Button } from '@/components/ui/button-group'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Basic Button Group</h3>
        <CodeBlock code={`<ButtonGroup>
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>`} />
        <h3 className="text-lg font-semibold">Button Group with Dropdown</h3>
        <CodeBlock code={`<script setup>
import { MoreHorizontal, Mail, Box, Clock, Calendar, List, Tag, ChevronRight, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <ButtonGroup>
    <Button><ChevronLeft class="h-4 w-4" /></Button>
    <Button>Archive</Button>
    <Button>Report</Button>
    <Button>Snooze</Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button class="rounded-l-none"><MoreHorizontal class="h-4 w-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuItem><Mail class="h-4 w-4 mr-2" /> Mark as Read</DropdownMenuItem>
        <DropdownMenuItem><Box class="h-4 w-4 mr-2" /> Archive</DropdownMenuItem>
        <DropdownMenuItem><Clock class="h-4 w-4 mr-2" /> Snooze</DropdownMenuItem>
        <DropdownMenuItem><Calendar class="h-4 w-4 mr-2" /> Add to Calendar</DropdownMenuItem>
        <DropdownMenuItem><List class="h-4 w-4 mr-2" /> Add to List</DropdownMenuItem>
        <DropdownMenuItem>
          <Tag class="h-4 w-4 mr-2" />
          <span>Label As...</span>
          <ChevronRight class="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive"><Trash2 class="h-4 w-4 mr-2" /> Trash</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>`} />
      </div>
      </div>
    </div>
  );
};

