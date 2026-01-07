import React, { useState } from 'react';
import { Search, Calendar as CalendarIcon, Smile, Calculator, User, CreditCard, Settings } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Command: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const suggestions = [
    { value: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { value: 'search-emoji', label: 'Search Emoji', icon: Smile },
    { value: 'calculator', label: 'Calculator', icon: Calculator },
  ];

  const settings = [
    { value: 'profile', label: 'Profile', icon: User, shortcut: '⌘P' },
    { value: 'billing', label: 'Billing', icon: CreditCard, shortcut: '⌘B' },
    { value: 'settings', label: 'Settings', icon: Settings, shortcut: '⌘S' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Command</h1>
        <p className="text-xl text-muted-foreground">Fast, composable, unstyled command menu for Vue.</p>
      </div>

      <ComponentPreview 
        preview={
          <div className="rounded-xl border bg-card text-card-foreground shadow-md w-[450px]">
            {/* Search Input */}
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input 
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Type a command or search..." 
              />
            </div>

            {/* Command List */}
            <div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2">
              {/* Suggestions Group */}
              <div className="overflow-hidden px-1 py-1">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Suggestions
                </div>
                {suggestions.map((item) => {
                  const Icon = item.icon;
                  const isHovered = hoveredItem === item.value;
                  return (
                    <div
                      key={item.value}
                      onClick={() => setSelectedItem(item.value)}
                      onMouseEnter={() => setHoveredItem(item.value)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors ${
                        isHovered ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Settings Group */}
              <div className="overflow-hidden px-1 py-1">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Settings
                </div>
                {settings.map((item) => {
                  const Icon = item.icon;
                  const isHovered = hoveredItem === item.value;
                  return (
                    <div
                      key={item.value}
                      onClick={() => setSelectedItem(item.value)}
                      onMouseEnter={() => setHoveredItem(item.value)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors ${
                        isHovered ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span className="flex-1">{item.label}</span>
                      {item.shortcut && (
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">{item.shortcut}</span>
                        </kbd>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        } 
        code={`<script setup>
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { Calendar, Smile, Calculator, User, CreditCard, Settings } from 'lucide-vue-next'
</script>

<template>
  <Command class="rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem>
          <Smile class="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem>
          <Calculator class="mr-2 h-4 w-4" />
          <span>Calculator</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCard class="mr-2 h-4 w-4" />
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Settings class="mr-2 h-4 w-4" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`} 
      />

      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/command" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandShortcut } from '@/components/ui/command'`} />
        
        <div className="space-y-3 mt-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <CodeBlock code={`<script setup>
import { Command, CommandInput, CommandList } from '@/components/ui/command'
</script>

<template>
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandList>
  </Command>
</template>`} />

          <h3 className="text-lg font-semibold">With Groups and Shortcuts</h3>
          <CodeBlock code={`<script setup>
import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandShortcut } from '@/components/ui/command'
</script>

<template>
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
      </CommandGroup>
      <CommandGroup heading="Settings">
        <CommandItem>
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`} />
        </div>
      </div>
    </div>
  );
};

