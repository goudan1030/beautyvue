import React, { useRef, useEffect, useState } from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface InputOTPProps {
  state: DocSectionState;
}

export const InputOTP: React.FC<InputOTPProps> = ({ state }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // 初始化 refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index: number, value: string) => {
    // 只允许数字
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newValue = [...state.otpValue];
    
    // 如果输入框已有内容，直接替换（覆盖输入）
    if (value) {
      newValue[index] = value;
      state.setOtpValue(newValue);
      
      // 自动跳转到下一个输入框
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      // 清空当前输入框
      newValue[index] = '';
      state.setOtpValue(newValue);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !state.otpValue[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newValue = [...state.otpValue];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newValue[i] = pastedData[i];
      }
    }
    
    state.setOtpValue(newValue);
    
    // 聚焦到最后一个填充的输入框或下一个空输入框
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input OTP</h1>
        <p className="text-xl text-muted-foreground">Accessible one-time password component with copy paste support.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="flex items-center justify-center gap-2">
            {/* First Group - 3 inputs */}
            <div className="flex items-center">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`relative flex h-10 w-10 items-center justify-center border text-sm transition-all ${
                    i === 0 ? 'rounded-l-md' : ''
                  } ${
                    i === 2 ? 'rounded-r-md' : ''
                  } ${
                    focusedIndex === i ? 'border-foreground border-2 z-10' : 'border-input'
                  } bg-background`}
                >
                  <input
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={state.otpValue[i] || ''}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onFocus={(e) => {
                      setFocusedIndex(i);
                      // 选中所有文本，方便覆盖输入
                      e.target.select();
                    }}
                    onBlur={() => setFocusedIndex(null)}
                    onPaste={handlePaste}
                    onClick={(e) => {
                      // 点击时选中所有文本
                      (e.target as HTMLInputElement).select();
                    }}
                    className="w-full h-full text-center bg-transparent border-0 outline-none focus:outline-none"
                  />
                  {focusedIndex === i && !state.otpValue[i] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="animate-pulse bg-foreground h-4 w-px" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Separator */}
            <span className="text-foreground text-lg font-medium">-</span>

            {/* Second Group - 3 inputs */}
            <div className="flex items-center">
              {[3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`relative flex h-10 w-10 items-center justify-center border text-sm transition-all ${
                    i === 3 ? 'rounded-l-md' : ''
                  } ${
                    i === 5 ? 'rounded-r-md' : ''
                  } ${
                    focusedIndex === i ? 'border-foreground border-2 z-10' : 'border-input'
                  } bg-background`}
                >
                  <input
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={state.otpValue[i] || ''}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onFocus={(e) => {
                      setFocusedIndex(i);
                      // 选中所有文本，方便覆盖输入
                      e.target.select();
                    }}
                    onBlur={() => setFocusedIndex(null)}
                    onPaste={handlePaste}
                    onClick={(e) => {
                      // 点击时选中所有文本
                      (e.target as HTMLInputElement).select();
                    }}
                    className="w-full h-full text-center bg-transparent border-0 outline-none focus:outline-none"
                  />
                  {focusedIndex === i && !state.otpValue[i] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="animate-pulse bg-foreground h-4 w-px" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        } 
        code={`<script setup>
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
</script>

<template>
  <InputOTP maxlength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/input-otp" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'`} />
        <CodeBlock code={`<InputOTP maxlength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`} />
      </div>
    </div>
  );
};
