import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Menubar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showShareSubmenu, setShowShareSubmenu] = useState(false);
  const [showFindSubmenu, setShowFindSubmenu] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowShareSubmenu(false);
        setShowFindSubmenu(false);
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeMenu]);

  const MenuItem = ({ 
    children, 
    shortcut, 
    disabled = false, 
    checked = false, 
    hasSubmenu = false,
    onClick 
  }: { 
    children: React.ReactNode; 
    shortcut?: string; 
    disabled?: boolean; 
    checked?: boolean; 
    hasSubmenu?: boolean;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center justify-between px-3 py-1.5 text-sm whitespace-nowrap
        ${disabled ? 'text-muted-foreground cursor-not-allowed' : 'text-foreground cursor-pointer hover:bg-accent'}
        transition-colors
      `}
    >
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {checked && <Check className="h-3.5 w-3.5 shrink-0" />}
        <span className={checked ? 'truncate' : 'ml-5 truncate'}>{children}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-2">
        {shortcut && (
          <span className={`text-xs ${disabled ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
            {shortcut}
          </span>
        )}
        {hasSubmenu && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
      </div>
    </button>
  );

  const ProfileItem = ({ 
    name, 
    selected = false 
  }: { 
    name: string; 
    selected?: boolean;
  }) => (
    <button
      className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-foreground cursor-pointer hover:bg-accent transition-colors"
    >
      {selected ? (
        <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
      ) : (
        <div className="h-1.5 w-1.5" />
      )}
      <span>{name}</span>
    </button>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Menubar</h1><p className="text-xl text-muted-foreground">A visually persistent menu common in desktop applications.</p></div>
      <ComponentPreview 
        preview={
          <div ref={menubarRef} className="relative inline-block">
            {/* Menu Bar */}
            <div className="flex h-10 items-center space-x-1 rounded-md border bg-muted/30 p-1">
              <button
                onMouseEnter={() => setActiveMenu('file')}
                onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
                className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none transition-colors ${
                  activeMenu === 'file' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'hover:bg-muted/60'
                }`}
              >
                File
              </button>
              <button
                onMouseEnter={() => setActiveMenu('edit')}
                onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
                className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none transition-colors ${
                  activeMenu === 'edit' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'hover:bg-muted/60'
                }`}
              >
                Edit
              </button>
              <button
                onMouseEnter={() => setActiveMenu('view')}
                onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
                className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none transition-colors ${
                  activeMenu === 'view' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'hover:bg-muted/60'
                }`}
              >
                View
              </button>
              <button
                onMouseEnter={() => setActiveMenu('profiles')}
                onClick={() => setActiveMenu(activeMenu === 'profiles' ? null : 'profiles')}
                className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none transition-colors ${
                  activeMenu === 'profiles' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'hover:bg-muted/60'
                }`}
              >
                Profiles
              </button>
            </div>

            {/* File Menu */}
            {activeMenu === 'file' && (
              <div 
                className="absolute top-full left-0 mt-1 min-w-[200px] rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <MenuItem shortcut="⌘T">New Tab</MenuItem>
                <MenuItem shortcut="⌘N">New Window</MenuItem>
                <MenuItem disabled>New Incognito Window</MenuItem>
                <div className="h-px bg-border my-1" />
                <div 
                  className="relative"
                  onMouseEnter={() => setShowShareSubmenu(true)}
                  onMouseLeave={() => setShowShareSubmenu(false)}
                >
                  <MenuItem hasSubmenu>Share</MenuItem>
                  {showShareSubmenu && (
                    <div 
                      className="absolute left-full top-0 ml-1 w-40 rounded-md border border-border bg-background shadow-lg z-[101] py-1"
                      style={{ backgroundColor: 'hsl(var(--background))' }}
                    >
                      <MenuItem>Email Link</MenuItem>
                      <MenuItem>Messages</MenuItem>
                      <MenuItem>More...</MenuItem>
                    </div>
                  )}
                </div>
                <div className="h-px bg-border my-1" />
                <MenuItem shortcut="⌘P">Print...</MenuItem>
              </div>
            )}

            {/* Edit Menu */}
            {activeMenu === 'edit' && (
              <div 
                className="absolute top-full left-0 mt-1 min-w-[200px] rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <MenuItem shortcut="⌘Z">Undo</MenuItem>
                <MenuItem shortcut="⇧⌘Z">Redo</MenuItem>
                <div className="h-px bg-border my-1" />
                <div 
                  className="relative"
                  onMouseEnter={() => setShowFindSubmenu(true)}
                  onMouseLeave={() => setShowFindSubmenu(false)}
                >
                  <MenuItem hasSubmenu>Find</MenuItem>
                  {showFindSubmenu && (
                    <div 
                      className="absolute left-full top-0 ml-1 w-40 rounded-md border border-border bg-background shadow-lg z-[101] py-1"
                      style={{ backgroundColor: 'hsl(var(--background))' }}
                    >
                      <MenuItem>Find in Page</MenuItem>
                      <MenuItem>Find Next</MenuItem>
                    </div>
                  )}
                </div>
                <div className="h-px bg-border my-1" />
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
              </div>
            )}

            {/* View Menu */}
            {activeMenu === 'view' && (
              <div 
                className="absolute top-full left-0 mt-1 min-w-[200px] rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <MenuItem>Always Show Bookmarks Bar</MenuItem>
                <MenuItem checked>Always Show Full URLs</MenuItem>
                <div className="h-px bg-border my-1" />
                <MenuItem shortcut="⌘R">Reload</MenuItem>
                <MenuItem shortcut="⇧⌘R" disabled>Force Reload</MenuItem>
                <div className="h-px bg-border my-1" />
                <MenuItem>Toggle Fullscreen</MenuItem>
                <MenuItem>Hide Sidebar</MenuItem>
              </div>
            )}

            {/* Profiles Menu */}
            {activeMenu === 'profiles' && (
              <div 
                className="absolute top-full left-0 mt-1 min-w-[200px] rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <ProfileItem name="Andy" />
                <ProfileItem name="Benoit" selected />
                <ProfileItem name="Luis" />
                <div className="h-px bg-border my-1" />
                <MenuItem>Edit...</MenuItem>
                <MenuItem>Add Profile...</MenuItem>
              </div>
            )}
          </div>
        } 
        code={`<script setup>
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
} from '@/components/ui/menubar'
import { ChevronRight, Check } from 'lucide-vue-next'
</script>

<template>
  <Menubar>
    <!-- File Menu -->
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled>New Incognito Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Share <ChevronRight class="ml-auto h-3.5 w-3.5" />
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Print... <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <!-- Edit Menu -->
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Find <ChevronRight class="ml-auto h-3.5 w-3.5" />
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Cut</MenubarItem>
        <MenubarItem>Copy</MenubarItem>
        <MenubarItem>Paste</MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <!-- View Menu -->
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
        <MenubarCheckboxItem checked>
          Always Show Full URLs
        </MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem>
          Reload <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled>
          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Toggle Fullscreen</MenubarItem>
        <MenubarItem>Hide Sidebar</MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <!-- Profiles Menu -->
    <MenubarMenu>
      <MenubarTrigger>Profiles</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Andy</MenubarItem>
        <MenubarItem>
          <div class="h-1.5 w-1.5 rounded-full bg-foreground mr-2" />
          Benoit
        </MenubarItem>
        <MenubarItem>Luis</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Edit...</MenubarItem>
        <MenubarItem>Add Profile...</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/menubar" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
} from '@/components/ui/menubar'
import { ChevronRight, Check } from 'lucide-vue-next'`} /><CodeBlock code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Share <ChevronRight class="ml-auto h-3.5 w-3.5" />
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} /></div>
    </div>
  );
};

