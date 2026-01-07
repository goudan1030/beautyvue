import React from 'react';
import { FolderPlus, ArrowUpRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Empty: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Empty</h1>
        <p className="text-xl text-muted-foreground">A placeholder state for when there is no data to display.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed rounded-lg bg-muted/20 w-full max-w-md">
            <div className="mb-6">
              <FolderPlus className="h-16 w-16 text-muted-foreground" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-lg font-semibold mb-2">No Projects Yet</h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm">
              You haven't created any projects yet. Get started by creating your first project.
            </p>
            
            <div className="flex gap-3 mb-6">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Create Project
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Import Project
              </button>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        } 
        code={`<script setup>
import { EmptyState } from '@/components/ui/empty'
</script>

<template>
  <EmptyState>
    <template #icon><Package /></template>
    <template #title>No data</template>
    <template #description>There is no data to display.</template>
    <Button>Add Data</Button>
  </EmptyState>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/empty" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { EmptyState } from '@/components/ui/empty'`} />
        <CodeBlock code={`<EmptyState>
  <template #icon><FolderPlus /></template>
  <template #title>No Projects Yet</template>
  <template #description>You haven't created any projects yet. Get started by creating your first project.</template>
  <Button>Create Project</Button>
  <Button variant="outline">Import Project</Button>
</EmptyState>`} />
      </div>
    </div>
  );
};
