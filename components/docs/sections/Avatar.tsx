import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Avatar: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Avatar</h1><p className="text-xl text-muted-foreground">An image element with a fallback.</p></div>
      <ComponentPreview preview={
        <div className="flex flex-col gap-6 items-center">
          {/* Circular Avatars */}
          <div className="flex gap-4 items-center">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
              <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user" />
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted flex items-center justify-center border border-border">
              <span className="font-medium text-muted-foreground text-sm">JD</span>
            </div>
          </div>
          {/* Rounded Rectangle Avatars */}
          <div className="flex gap-4 items-center">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border">
              <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user" />
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md bg-muted flex items-center justify-center border border-border">
              <span className="font-medium text-muted-foreground text-sm">JD</span>
            </div>
          </div>
          {/* Avatar Group - Overlapping */}
          <div className="flex items-center -space-x-2">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
              <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user1" />
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-muted flex items-center justify-center">
              <span className="font-medium text-muted-foreground text-sm">JD</span>
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-primary/10 flex items-center justify-center">
              <span className="font-medium text-primary text-sm">AB</span>
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-secondary flex items-center justify-center">
              <span className="font-medium text-secondary-foreground text-sm">+3</span>
            </div>
          </div>
        </div>
      } code={`<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <!-- Circular Avatar -->
  <Avatar>
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <!-- Rounded Rectangle Avatar -->
  <Avatar class="rounded-md">
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>

  <!-- Avatar Group -->
  <div class="flex items-center -space-x-2">
    <Avatar class="border-2 border-background">
      <AvatarImage src="https://github.com/user1.png" alt="@user1" />
      <AvatarFallback>U1</AvatarFallback>
    </Avatar>
    <Avatar class="border-2 border-background">
      <AvatarImage src="https://github.com/user2.png" alt="@user2" />
      <AvatarFallback>U2</AvatarFallback>
    </Avatar>
    <Avatar class="border-2 border-background">
      <AvatarFallback>+3</AvatarFallback>
    </Avatar>
  </div>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/avatar" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Circular Avatar</h3>
        <CodeBlock code={`<Avatar>
  <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`} />
        <h3 className="text-lg font-semibold">Rounded Rectangle Avatar</h3>
        <CodeBlock code={`<Avatar class="rounded-md">
  <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`} />
        <h3 className="text-lg font-semibold">Avatar Group (Overlapping)</h3>
        <CodeBlock code={`<div class="flex items-center -space-x-2">
  <Avatar class="border-2 border-background">
    <AvatarImage src="https://github.com/user1.png" alt="@user1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar class="border-2 border-background">
    <AvatarImage src="https://github.com/user2.png" alt="@user2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar class="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`} />
      </div>
      </div>
    </div>
  );
};

