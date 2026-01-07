import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DropdownMenuProps {
  state: DocSectionState;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ state }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [showInviteSubmenu, setShowInviteSubmenu] = useState(false);
  const inviteSubmenuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        state.setIsDropdownOpen(false);
        setShowInviteSubmenu(false);
      }
    };

    if (state.isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [state.isDropdownOpen, state]);

  const handleMenuItemClick = () => {
    state.setIsDropdownOpen(false);
    setShowInviteSubmenu(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-xl text-muted-foreground">Displays a menu to the user.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative">
              <button 
                ref={triggerRef}
                onClick={() => state.setIsDropdownOpen(!state.isDropdownOpen)} 
                className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Open
              </button>
              
              {state.isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 z-50 w-[240px] rounded-md border bg-background p-1 text-popover-foreground shadow-md animate-in fade-in zoom-in-95"
                  style={{ backgroundColor: 'hsl(var(--background))' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* My Account Section */}
                  <div className="px-2 py-1.5 text-sm font-semibold whitespace-nowrap">My Account</div>
                  
                  <div className="px-1 py-1">
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Profile
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⇧</span>
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">P</span>
                      </kbd>
                    </button>
                    
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Billing
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">B</span>
                      </kbd>
                    </button>
                    
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Settings
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">S</span>
                      </kbd>
                    </button>
                    
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Keyboard shortcuts
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">K</span>
                      </kbd>
                    </button>
                  </div>
                  
                  {/* Separator */}
                  <div className="my-1 h-px bg-border" />
                  
                  {/* Team items */}
                  <div className="px-1 py-1">
                    <div
                      className="relative"
                      onMouseEnter={() => setShowInviteSubmenu(true)}
                      onMouseLeave={() => setShowInviteSubmenu(false)}
                    >
                      <button
                        onClick={handleMenuItemClick}
                        className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                      >
                        Invite users
                        <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </button>
                      
                      {showInviteSubmenu && (
                        <div
                          ref={inviteSubmenuRef}
                          className="absolute left-full top-0 ml-1 z-[60] w-[140px] rounded-md border bg-background p-1 text-popover-foreground shadow-md animate-in fade-in zoom-in-95"
                          style={{ backgroundColor: 'hsl(var(--background))' }}
                          onMouseEnter={() => setShowInviteSubmenu(true)}
                          onMouseLeave={() => setShowInviteSubmenu(false)}
                        >
                          <button
                            onClick={handleMenuItemClick}
                            className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                          >
                            Email
                          </button>
                          <button
                            onClick={handleMenuItemClick}
                            className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                          >
                            Message
                          </button>
                          <button
                            onClick={handleMenuItemClick}
                            className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                          >
                            More...
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      New Team
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">+</span>
                        <span className="text-xs">T</span>
                      </kbd>
                    </button>
                  </div>
                  
                  {/* Separator */}
                  <div className="my-1 h-px bg-border" />
                  
                  {/* GitHub items */}
                  <div className="px-1 py-1">
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Support
                    </button>
                    
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap text-muted-foreground"
                    >
                      API
                    </button>
                  </div>
                  
                  {/* Separator */}
                  <div className="my-1 h-px bg-border" />
                  
                  {/* Log out */}
                  <div className="px-1 py-1">
                    <button
                      onClick={handleMenuItemClick}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground whitespace-nowrap"
                    >
                      Log out
                      <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⇧</span>
                        <span className="text-xs">⌘</span>
                        <span className="text-xs">Q</span>
                      </kbd>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        } 
        code={`<script setup>
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/dropdown-menu" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu'`} />
        <CodeBlock code={`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuItem>
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Billing
      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Invite users</DropdownMenuItem>
    <DropdownMenuItem>New Team</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />
      </div>
    </div>
  );
};
