import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Check, User } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ContextMenuProps {
  state: DocSectionState;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ state }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const moreToolsRef = useRef<HTMLDivElement>(null);
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState<string | null>('pedro');
  const [showMoreTools, setShowMoreTools] = useState(false);

  // 处理右键点击
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const menuWidth = 224; // w-56 = 224px
    const menuHeight = 320; // 增加高度以适应更多内容
    const offset = 4; // 菜单与鼠标位置的偏移量
    
    // 计算鼠标相对于容器的位置
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    
    // 默认显示在鼠标右下方
    let x = relativeX + offset;
    let y = relativeY + offset;

    // 如果右侧空间不够，显示在鼠标左侧
    if (x + menuWidth > rect.width) {
      x = relativeX - menuWidth - offset;
    }
    
    // 如果下方空间不够，显示在鼠标上方
    if (y + menuHeight > rect.height) {
      y = relativeY - menuHeight - offset;
    }
    
    // 确保不超出左边界
    if (x < 0) {
      x = offset;
    }
    
    // 确保不超出上边界
    if (y < 0) {
      y = offset;
    }

    state.setContextMenuPosition({ x, y });
    state.setIsContextMenuOpen(true);
  };

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        state.setIsContextMenuOpen(false);
        state.setContextMenuPosition(null);
      }
    };

    const handleContextMenuClose = (e: MouseEvent) => {
      // 阻止默认的右键菜单
      if (state.isContextMenuOpen) {
        e.preventDefault();
      }
    };

    if (state.isContextMenuOpen) {
      // 延迟添加事件监听，避免立即触发
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('contextmenu', handleContextMenuClose);
      }, 0);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('contextmenu', handleContextMenuClose);
      };
    }
  }, [state.isContextMenuOpen, state]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-xl text-muted-foreground">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</p>
      </div>
      <ComponentPreview 
        preview={
          <div 
            ref={containerRef}
            onContextMenu={handleContextMenu}
            className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm font-medium text-muted-foreground relative"
          >
            <span className="relative z-0">Right click here</span>
            {state.isContextMenuOpen && state.contextMenuPosition && (
              <div 
                className="absolute w-56 rounded-md border bg-background p-1 text-foreground shadow-lg animate-in fade-in-80 zoom-in-95 z-[100]"
                style={{
                  left: `${state.contextMenuPosition.x}px`,
                  top: `${state.contextMenuPosition.y}px`,
                  backgroundColor: 'hsl(var(--background))',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                  {/* Navigation Section */}
                  <div 
                    onClick={() => {
                      state.setIsContextMenuOpen(false);
                      state.setContextMenuPosition(null);
                    }}
                    className="flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="flex items-center flex-1">
                      <span className="w-6 mr-2" />
                      <span>Back</span>
                    </div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      <span className="text-xs">⌘</span><span className="text-xs">[</span>
                    </kbd>
                  </div>
                  <div className="flex cursor-not-allowed select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-normal outline-none opacity-50">
                    <div className="flex items-center flex-1">
                      <span className="w-6 mr-2" />
                      <span>Forward</span>
                    </div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      <span className="text-xs">⌘</span><span className="text-xs">]</span>
                    </kbd>
                  </div>
                  <div 
                    onClick={() => {
                      state.setIsContextMenuOpen(false);
                      state.setContextMenuPosition(null);
                    }}
                    className="flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="flex items-center flex-1">
                      <span className="w-6 mr-2" />
                      <span>Reload</span>
                    </div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      <span className="text-xs">⌘</span>R
                    </kbd>
                  </div>
                  <div 
                    ref={moreToolsRef}
                    onMouseEnter={() => setShowMoreTools(true)}
                    onMouseLeave={() => setShowMoreTools(false)}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="flex items-center flex-1">
                      <span className="w-6 mr-2" />
                      <span>More Tools</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    {showMoreTools && (
                      <div 
                        className="absolute top-0 w-56 rounded-md border bg-background p-1 text-foreground shadow-lg z-[101]"
                        style={{ 
                          backgroundColor: 'hsl(var(--background))',
                          left: 'calc(100% + 2px)'
                        }}
                        onMouseEnter={() => setShowMoreTools(true)}
                        onMouseLeave={() => setShowMoreTools(false)}
                      >
                        <div 
                          onClick={() => {
                            state.setIsContextMenuOpen(false);
                            state.setContextMenuPosition(null);
                            setShowMoreTools(false);
                          }}
                          className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <span className="w-6 mr-2" />
                          <span>Developer Tools</span>
                        </div>
                        <div 
                          onClick={() => {
                            state.setIsContextMenuOpen(false);
                            state.setContextMenuPosition(null);
                            setShowMoreTools(false);
                          }}
                          className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <span className="w-6 mr-2" />
                          <span>Extensions</span>
                        </div>
                        <div 
                          onClick={() => {
                            state.setIsContextMenuOpen(false);
                            state.setContextMenuPosition(null);
                            setShowMoreTools(false);
                          }}
                          className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <span className="w-6 mr-2" />
                          <span>Task Manager</span>
                        </div>
                        <div className="h-px my-1 bg-border" />
                        <div 
                          onClick={() => {
                            state.setIsContextMenuOpen(false);
                            state.setContextMenuPosition(null);
                            setShowMoreTools(false);
                          }}
                          className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <span className="w-6 mr-2" />
                          <span>Delete</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="h-px my-1 bg-border" />
                  
                  {/* View Section */}
                  <div 
                    onClick={() => {
                      setShowBookmarks(!showBookmarks);
                    }}
                    className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="w-6 flex items-center justify-center mr-2">
                      {showBookmarks && <Check className="h-4 w-4" />}
                    </span>
                    <span>Show Bookmarks</span>
                  </div>
                  <div 
                    onClick={() => {
                      state.setIsContextMenuOpen(false);
                      state.setContextMenuPosition(null);
                    }}
                    className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="w-6 mr-2" />
                    <span>Show Full URLs</span>
                  </div>
                  <div className="h-px my-1 bg-border" />
                  
                  {/* People Section */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    People
                  </div>
                  <div 
                    onClick={() => {
                      setSelectedPerson('pedro');
                      state.setIsContextMenuOpen(false);
                      state.setContextMenuPosition(null);
                    }}
                    className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="w-6 flex items-center justify-center mr-2">
                      {selectedPerson === 'pedro' ? (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </span>
                    <span>Pedro Duarte</span>
                  </div>
                  <div 
                    onClick={() => {
                      setSelectedPerson('colm');
                      state.setIsContextMenuOpen(false);
                      state.setContextMenuPosition(null);
                    }}
                    className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className="w-6 flex items-center justify-center mr-2">
                      {selectedPerson === 'colm' ? (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </span>
                    <span>Colm Tuite</span>
                  </div>
                </div>
            )}
          </div>
        } 
        code={`<script setup>
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent, ContextMenuCheckboxItem, ContextMenuLabel } from '@/components/ui/context-menu'
import { Check, User, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent class="w-64">
      <ContextMenuItem>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        More Tools
        <ChevronRight class="ml-auto h-4 w-4" />
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem :checked="showBookmarks" @update:checked="showBookmarks = $event">
        <Check v-if="showBookmarks" class="mr-2 h-4 w-4" />
        Show Bookmarks
      </ContextMenuCheckboxItem>
      <ContextMenuItem>Show Full URLs</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuLabel>People</ContextMenuLabel>
      <ContextMenuItem>
        <User class="mr-2 h-4 w-4" />
        Pedro Duarte
      </ContextMenuItem>
      <ContextMenuItem>
        <User class="mr-2 h-4 w-4" />
        Colm Tuite
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/context-menu" /></div>
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuCheckboxItem, ContextMenuLabel } from '@/components/ui/context-menu'`} />
        
        <div className="space-y-3 mt-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <CodeBlock code={`<script setup>
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem>Forward</ContextMenuItem>
      <ContextMenuItem>Reload</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />

          <h3 className="text-lg font-semibold">With Shortcuts</h3>
          <CodeBlock code={`<script setup>
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuShortcut } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />

          <h3 className="text-lg font-semibold">With Checkbox Items</h3>
          <CodeBlock code={`<script setup>
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuCheckboxItem } from '@/components/ui/context-menu'
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

const showBookmarks = ref(true)
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuCheckboxItem :checked="showBookmarks" @update:checked="showBookmarks = $event">
        <Check v-if="showBookmarks" class="mr-2 h-4 w-4" />
        Show Bookmarks
      </ContextMenuCheckboxItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />

          <h3 className="text-lg font-semibold">With Labels and Separators</h3>
          <CodeBlock code={`<script setup>
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuLabel>People</ContextMenuLabel>
      <ContextMenuItem>Pedro Duarte</ContextMenuItem>
      <ContextMenuItem>Colm Tuite</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`} />
        </div>
      </div>
    </div>
  );
};

