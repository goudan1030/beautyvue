import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Field: React.FC = () => {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monthOpen, setMonthOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Field</h1>
        <p className="text-xl text-muted-foreground">A semantic wrapper for form controls with label and description.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="w-full max-w-2xl space-y-6 p-6">
            {/* Payment Method Section */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <p className="text-sm text-muted-foreground">All transactions are secure and encrypted</p>
            </div>

            {/* Name on Card */}
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none">Name on Card</label>
              <input 
                type="text" 
                defaultValue="Evil Rabbit"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
              />
            </div>

            {/* Card Number */}
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none">Card Number</label>
              <input 
                type="text" 
                defaultValue="1234 5678 9012 3456"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
              />
              <p className="text-[0.8rem] text-muted-foreground">Enter your 16-digit card number</p>
            </div>

            {/* Month, Year, CVV */}
            <div className="grid grid-cols-3 gap-4">
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none">Month</label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setMonthOpen(!monthOpen);
                      setYearOpen(false);
                    }}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{month || 'MM'}</span>
                    <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {monthOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 z-50 rounded-md border bg-background shadow-md p-1 max-h-48 overflow-y-auto">
                      {months.map((m) => (
                        <button
                          key={m}
                          onClick={() => {
                            setMonth(m);
                            setMonthOpen(false);
                          }}
                          className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none">Year</label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setYearOpen(!yearOpen);
                      setMonthOpen(false);
                    }}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{year || 'YYYY'}</span>
                    <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {yearOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 z-50 rounded-md border bg-background shadow-md p-1 max-h-48 overflow-y-auto">
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => {
                            setYear(y.toString());
                            setYearOpen(false);
                          }}
                          className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none">CVV</label>
                <input 
                  type="text" 
                  defaultValue="123"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                />
              </div>
            </div>

            {/* Billing Address Section */}
            <div className="space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Billing Address</h2>
                <p className="text-sm text-muted-foreground">The billing address associated with your payment method</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSameAsShipping(!sameAsShipping)}
                  role="checkbox"
                  aria-checked={sameAsShipping}
                  className={`h-4 w-4 shrink-0 rounded-sm border-2 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer ${
                    sameAsShipping
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'border-primary bg-background'
                  }`}
                >
                  {sameAsShipping && (
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  )}
                </button>
                <label
                  onClick={() => setSameAsShipping(!sameAsShipping)}
                  className="text-sm font-medium leading-none cursor-pointer select-none"
                >
                  Same as shipping address
                </label>
              </div>
            </div>

            {/* Comments */}
            <div className="grid w-full items-center gap-1.5">
              <label className="text-sm font-medium leading-none">Comments</label>
              <textarea 
                placeholder="Add any additional comments"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Cancel
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        } 
        code={`<script setup>
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field'
</script>

<template>
  <Field>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="email@example.com" />
    <FieldDescription>We'll never share your email.</FieldDescription>
  </Field>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/field" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'`} />
        <CodeBlock code={`<Field>
  <FieldLabel>Card Number</FieldLabel>
  <Input placeholder="1234 5678 9012 3456" />
  <FieldDescription>Enter your 16-digit card number</FieldDescription>
</Field>`} />
      </div>
    </div>
  );
};
