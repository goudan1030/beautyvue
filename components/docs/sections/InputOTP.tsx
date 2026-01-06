import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface InputOTPProps {
  state: DocSectionState;
}

export const InputOTP: React.FC<InputOTPProps> = ({ state }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input OTP</h1><p className="text-xl text-muted-foreground">Accessible one-time password component with copy paste support.</p></div>
      <ComponentPreview preview={<div className="flex items-center justify-center gap-2">{state.otpValue.map((val, i) => (<div key={i} className="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background bg-background"><div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="animate-caret-blink bg-foreground h-4 w-px duration-1000 hidden" /></div>{val}</div>))}</div>} code={`<script setup>
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
</script>

<template>
  <InputOTP maxlength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/input-otp" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'`} /><CodeBlock code={`<InputOTP maxlength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
  </InputOTPGroup>
</InputOTP>`} /></div>
    </div>
  );
};

