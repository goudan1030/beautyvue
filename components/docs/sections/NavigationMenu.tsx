import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Circle, Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const NavigationMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>('components');
  const navRef = useRef<HTMLDivElement>(null);
  const homeButtonRef = useRef<HTMLButtonElement>(null);
  const listButtonRef = useRef<HTMLButtonElement>(null);
  const simpleButtonRef = useRef<HTMLButtonElement>(null);
  const withIconButtonRef = useRef<HTMLButtonElement>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeMenu]);

  const MenuItem = ({ 
    title, 
    description 
  }: { 
    title: string; 
    description: string;
  }) => (
    <button
      className="group flex flex-col gap-1 rounded-md p-4 text-left hover:bg-accent transition-colors w-[300px]"
      onMouseEnter={() => setActiveMenu('components')}
    >
      <div className="text-sm font-semibold leading-none">{title}</div>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{description}</p>
    </button>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Navigation Menu</h1><p className="text-xl text-muted-foreground">A collection of links for navigating websites.</p></div>
      <ComponentPreview 
        preview={
          <div ref={navRef} className="relative w-full flex justify-center">
            {/* Navigation Bar */}
            <nav className="flex items-center gap-1">
              <button
                ref={homeButtonRef}
                onClick={() => setActiveMenu(activeMenu === 'home' ? null : 'home')}
                onMouseEnter={() => setActiveMenu('home')}
                className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === 'home'
                    ? 'bg-muted/60 text-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                Home
                {activeMenu === 'home' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => setActiveMenu(activeMenu === 'components' ? null : 'components')}
                onMouseEnter={() => setActiveMenu('components')}
                className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === 'components'
                    ? 'bg-muted/60 text-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                Components
                {activeMenu === 'components' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              <button className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/60">
                Docs
              </button>
              <button
                ref={listButtonRef}
                onClick={() => setActiveMenu(activeMenu === 'list' ? null : 'list')}
                onMouseEnter={() => setActiveMenu('list')}
                className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === 'list'
                    ? 'bg-muted/60 text-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                List
                {activeMenu === 'list' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              <button
                ref={simpleButtonRef}
                onClick={() => setActiveMenu(activeMenu === 'simple' ? null : 'simple')}
                onMouseEnter={() => setActiveMenu('simple')}
                className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === 'simple'
                    ? 'bg-muted/60 text-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                Simple
                {activeMenu === 'simple' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              <button
                ref={withIconButtonRef}
                onClick={() => setActiveMenu(activeMenu === 'with-icon' ? null : 'with-icon')}
                onMouseEnter={() => setActiveMenu('with-icon')}
                className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === 'with-icon'
                    ? 'bg-muted/60 text-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                With Icon
                {activeMenu === 'with-icon' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
            </nav>

            {/* Home Dropdown */}
            {activeMenu === 'home' && homeButtonRef.current && (
              <div 
                className="absolute top-full mt-2 rounded-md border border-border bg-background shadow-lg z-[100] p-6"
                style={{ 
                  backgroundColor: 'hsl(var(--background))',
                  left: `${homeButtonRef.current.offsetLeft}px`,
                  width: '600px'
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="grid grid-cols-[200px_1fr] gap-6">
                  {/* Left Section */}
                  <div className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">vue.beauty</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Beautifully designed components built with Vue and Tailwind CSS.
                    </p>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold mb-1">Introduction</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">Installation</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        How to install dependencies and structure your app.
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">Typography</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Styles for headings, paragraphs, lists...etc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Components Dropdown */}
            {activeMenu === 'components' && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-md border border-border bg-background shadow-lg z-[100] p-4"
                style={{ backgroundColor: 'hsl(var(--background))' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="grid grid-cols-2 gap-4 w-max">
                  {/* Left Column */}
                  <div className="space-y-1">
                    <MenuItem
                      title="Alert Dialog"
                      description="A modal dialog that interrupts the user with important content and expects a response."
                    />
                    <MenuItem
                      title="Progress"
                      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
                    />
                    <MenuItem
                      title="Tabs"
                      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
                    />
                  </div>

                  {/* Right Column */}
                  <div className="space-y-1">
                    <MenuItem
                      title="Hover Card"
                      description="For sighted users to preview content available behind a link."
                    />
                    <MenuItem
                      title="Scroll-area"
                      description="Visually or semantically separates content."
                    />
                    <MenuItem
                      title="Tooltip"
                      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* List Dropdown */}
            {activeMenu === 'list' && listButtonRef.current && (
              <div 
                className="absolute top-full mt-2 rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ 
                  backgroundColor: 'hsl(var(--background))',
                  left: `${listButtonRef.current.offsetLeft}px`,
                  minWidth: `${listButtonRef.current.offsetWidth}px`
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="w-full flex flex-col gap-1 rounded-md px-4 py-3 text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('list')}
                >
                  <div className="text-sm font-semibold leading-none">Components</div>
                  <p className="text-sm text-muted-foreground">Browse all components in the library.</p>
                </button>
                <button
                  className="w-full flex flex-col gap-1 rounded-md px-4 py-3 text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('list')}
                >
                  <div className="text-sm font-semibold leading-none">Documentation</div>
                  <p className="text-sm text-muted-foreground">Learn how to use the library.</p>
                </button>
                <button
                  className="w-full flex flex-col gap-1 rounded-md px-4 py-3 text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('list')}
                >
                  <div className="text-sm font-semibold leading-none">Blog</div>
                  <p className="text-sm text-muted-foreground">Read our latest blog posts.</p>
                </button>
              </div>
            )}

            {/* Simple Dropdown */}
            {activeMenu === 'simple' && simpleButtonRef.current && (
              <div 
                className="absolute top-full mt-2 rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ 
                  backgroundColor: 'hsl(var(--background))',
                  left: `${simpleButtonRef.current.offsetLeft}px`,
                  minWidth: `${simpleButtonRef.current.offsetWidth}px`
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="w-full flex items-center px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('simple')}
                >
                  Components
                </button>
                <button
                  className="w-full flex items-center px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('simple')}
                >
                  Documentation
                </button>
                <button
                  className="w-full flex items-center px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('simple')}
                >
                  Blocks
                </button>
              </div>
            )}

            {/* With Icon Dropdown */}
            {activeMenu === 'with-icon' && withIconButtonRef.current && (
              <div 
                className="absolute top-full mt-2 rounded-md border border-border bg-background shadow-lg z-[100] py-1"
                style={{ 
                  backgroundColor: 'hsl(var(--background))',
                  left: `${withIconButtonRef.current.offsetLeft}px`,
                  minWidth: `${withIconButtonRef.current.offsetWidth}px`
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('with-icon')}
                >
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  Backlog
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('with-icon')}
                >
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  To Do
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-accent transition-colors"
                  onMouseEnter={() => setActiveMenu('with-icon')}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-muted-foreground bg-muted-foreground flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 text-background" />
                  </div>
                  Done
                </button>
              </div>
            )}
          </div>
        } 
        code={`<script setup>
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Home
          <ChevronDown class="ml-1 h-4 w-4" />
        </NavigationMenuTrigger>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Components
          <ChevronUp class="ml-1 h-4 w-4" />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="grid grid-cols-2 gap-4 p-4 w-[600px]">
            <div class="space-y-1">
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Alert Dialog</div>
                <p class="text-sm text-muted-foreground">
                  A modal dialog that interrupts the user with important content.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Progress</div>
                <p class="text-sm text-muted-foreground">
                  Displays an indicator showing the completion progress of a task.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Tabs</div>
                <p class="text-sm text-muted-foreground">
                  A set of layered sections of content—known as tab panels.
                </p>
              </NavigationMenuLink>
            </div>
            <div class="space-y-1">
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Hover Card</div>
                <p class="text-sm text-muted-foreground">
                  For sighted users to preview content available behind a link.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Scroll-area</div>
                <p class="text-sm text-muted-foreground">
                  Visually or semantically separates content.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4">
                <div class="text-sm font-semibold">Tooltip</div>
                <p class="text-sm text-muted-foreground">
                  A popup that displays information related to an element.
                </p>
              </NavigationMenuLink>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Docs</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/navigation-menu" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'
import { ChevronDown, ChevronUp, HelpCircle, Circle, Check } from 'lucide-vue-next'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">With Descriptions</h3>
        <CodeBlock code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        Components
        <ChevronUp class="ml-1 h-4 w-4" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div class="grid grid-cols-2 gap-4 p-4">
          <NavigationMenuLink class="group flex flex-col gap-1 rounded-md p-4 w-[300px]">
            <div class="text-sm font-semibold">Alert Dialog</div>
            <p class="text-sm text-muted-foreground line-clamp-2">
              A modal dialog that interrupts the user with important content.
            </p>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`} />
        <h3 className="text-lg font-semibold">List Style</h3>
        <CodeBlock code={`<NavigationMenuItem>
  <NavigationMenuTrigger>List</NavigationMenuTrigger>
  <NavigationMenuContent>
    <NavigationMenuLink class="flex flex-col gap-1 px-4 py-3">
      <div class="text-sm font-semibold">Components</div>
      <p class="text-sm text-muted-foreground">Browse all components in the library.</p>
    </NavigationMenuLink>
    <NavigationMenuLink class="flex flex-col gap-1 px-4 py-3">
      <div class="text-sm font-semibold">Documentation</div>
      <p class="text-sm text-muted-foreground">Learn how to use the library.</p>
    </NavigationMenuLink>
  </NavigationMenuContent>
</NavigationMenuItem>`} />
        <h3 className="text-lg font-semibold">Simple Style</h3>
        <CodeBlock code={`<NavigationMenuItem>
  <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
  <NavigationMenuContent>
    <NavigationMenuLink class="px-4 py-2">Components</NavigationMenuLink>
    <NavigationMenuLink class="px-4 py-2">Documentation</NavigationMenuLink>
    <NavigationMenuLink class="px-4 py-2">Blocks</NavigationMenuLink>
  </NavigationMenuContent>
</NavigationMenuItem>`} />
        <h3 className="text-lg font-semibold">With Icons</h3>
        <CodeBlock code={`<NavigationMenuItem>
  <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
  <NavigationMenuContent>
    <NavigationMenuLink class="flex items-center gap-2 px-4 py-2">
      <HelpCircle class="h-4 w-4 text-muted-foreground" />
      Backlog
    </NavigationMenuLink>
    <NavigationMenuLink class="flex items-center gap-2 px-4 py-2">
      <Circle class="h-4 w-4 text-muted-foreground" />
      To Do
    </NavigationMenuLink>
    <NavigationMenuLink class="flex items-center gap-2 px-4 py-2">
      <div class="h-4 w-4 rounded-full border-2 border-muted-foreground bg-muted-foreground flex items-center justify-center">
        <Check class="h-2.5 w-2.5 text-background" />
      </div>
      Done
    </NavigationMenuLink>
  </NavigationMenuContent>
</NavigationMenuItem>`} />
      </div>
      </div>
    </div>
  );
};

