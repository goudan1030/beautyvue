import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface AlertDialogProps {
  state: DocSectionState;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Alert Dialog</h1><p className="text-xl text-muted-foreground">A modal dialog that interrupts the user.</p></div>
      <ComponentPreview preview={
        <div className="flex items-center justify-center w-full h-full">
          <button onClick={() => state.setIsAlertDialogOpen(true)} className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors">Show Alert Dialog</button>
          {state.isAlertDialogOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
              {/* Backdrop */}
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => state.setIsAlertDialogOpen(false)} />
              {/* Dialog Content */}
              <div className="relative z-[101] grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-in fade-in zoom-in-95 duration-200 mx-4">
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                  <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
                  <p className="text-sm text-muted-foreground">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                  <button 
                    className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    onClick={() => state.setIsAlertDialogOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
                    onClick={() => state.setIsAlertDialogOpen(false)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      } code={`<script setup>
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/alert-dialog" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'`} /><CodeBlock code={`<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`} /></div>
    </div>
  );
};

