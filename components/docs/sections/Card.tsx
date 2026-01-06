import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Card: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1><p className="text-xl text-muted-foreground">Displays a card with header, content, and footer.</p></div>
      <ComponentPreview preview={
        <div className="rounded-xl border bg-card text-card-foreground shadow w-[400px] p-6">
          <div className="flex items-start justify-between mb-6 gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold mb-1">Login to your account</h3>
              <p className="text-sm text-muted-foreground">Enter your email below to login to your account</p>
            </div>
            <button className="text-sm font-medium hover:underline whitespace-nowrap flex-shrink-0">Sign Up</button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <button className="text-sm text-muted-foreground hover:underline">Forgot your password?</button>
              </div>
              <input
                id="password"
                type="password"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button className="w-full h-9 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors active:scale-95">
              Login
            </button>
            <button className="w-full h-9 rounded-md border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground transition-colors active:scale-95 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      } code={`<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card class="w-[400px]">
    <CardHeader>
      <div class="flex items-start justify-between">
        <div>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </div>
        <Button variant="ghost" class="text-sm whitespace-nowrap flex-shrink-0">Sign Up</Button>
      </div>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" class="h-9" />
      </div>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Label for="password">Password</Label>
          <Button variant="link" class="text-sm p-0 h-auto">Forgot your password?</Button>
        </div>
        <Input id="password" type="password" class="h-9" />
      </div>
      <Button class="w-full h-9">Login</Button>
      <Button variant="outline" class="w-full h-9">
        <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Login with Google
      </Button>
    </CardContent>
  </Card>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/card" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'`} /><CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`} /></div>
    </div>
  );
};

