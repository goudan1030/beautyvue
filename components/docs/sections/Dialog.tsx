import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DialogProps {
  state: DocSectionState;
}

export const Dialog: React.FC<DialogProps> = ({ state }) => {
  const [name, setName] = useState('Pedro Duarte');
  const [username, setUsername] = useState('@peduarte');

  const handleSave = () => {
    // 这里可以添加保存逻辑
    state.setIsDialogOpen(false);
  };

  const handleCancel = () => {
    state.setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dialog</h1>
        <p className="text-xl text-muted-foreground">A modal dialog that interrupts the user.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="flex items-center justify-center w-full h-full">
            <button 
              onClick={() => state.setIsDialogOpen(true)} 
              className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Edit Profile
            </button>
            
            {state.isDialogOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center">
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
                  onClick={() => state.setIsDialogOpen(false)} 
                />
                
                {/* Dialog Content */}
                <div 
                  className="relative z-[101] grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-in fade-in zoom-in-95 duration-200 mx-4"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    // ESC 键关闭对话框
                    if (e.key === 'Escape') {
                      state.setIsDialogOpen(false);
                    }
                    // 其他键盘事件不阻止，让输入框正常处理
                  }}
                  style={{ backgroundColor: 'hsl(var(--background))' }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => state.setIsDialogOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </button>
                  
                  {/* Header */}
                  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">Edit profile</h2>
                    <p className="text-sm text-muted-foreground">
                      Make changes to your profile here. Click save when you're done.
                    </p>
                  </div>
                  
                  {/* Form Content */}
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                          // 确保全选快捷键正常工作，阻止事件冒泡到对话框容器
                          if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                            e.stopPropagation();
                            // 不调用 preventDefault，让浏览器默认行为处理全选
                            return;
                          }
                          // 其他键盘事件也阻止冒泡，避免被对话框容器处理
                          e.stopPropagation();
                        }}
                        autoFocus
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => {
                          // 确保全选快捷键正常工作，阻止事件冒泡到对话框容器
                          if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                            e.stopPropagation();
                            // 不调用 preventDefault，让浏览器默认行为处理全选
                            return;
                          }
                          // 其他键盘事件也阻止冒泡，避免被对话框容器处理
                          e.stopPropagation();
                        }}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button 
                      onClick={handleCancel}
                      className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSave}
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/dialog" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'`} />
        <CodeBlock code={`<Dialog>
  <DialogTrigger>Edit Profile</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div class="grid gap-4 py-4">
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input />
      </Field>
      <Field>
        <FieldLabel>Username</FieldLabel>
        <Input />
      </Field>
    </div>
    <DialogFooter>
      <DialogClose>Cancel</DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />
      </div>
    </div>
  );
};
