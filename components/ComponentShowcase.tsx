import React, { useState } from 'react';
import { Check, Copy, Bell, Settings, User, FileCode } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface ComponentShowcaseProps {
  language: Language;
}

const Button = ({ children, variant = 'primary', className = '' }: any) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 active:scale-95";
  const variants: any = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-md",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
};

const Card = ({ children, className = '' }: any) => (
  <div className={`rounded-xl border border-border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
);

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const t = translations[language].showcase;

  // Simplified raw code string for clipboard
  const codeString = `<script setup>
import { 
  Card, 
  CardHeader, 
  Button 
} from '@beautyvue/core'
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <h3 class="font-semibold">Notifications</h3>
      <p class="text-sm text-muted">You have 3 unread.</p>
    </CardHeader>
    <div class="p-6 pt-0 grid gap-4">
      <div class="flex items-center gap-4">
        <div class="h-2 w-2 rounded-full bg-primary" />
        <div class="space-y-1">
          <p class="text-sm font-medium">New Message</p>
          <p class="text-xs text-muted-foreground">Just now</p>
        </div>
      </div>
      <Button class="w-full">Mark all read</Button>
    </div>
  </Card>
</template>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4 md:px-6">
      <div className="flex flex-col space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          {t.desc}
        </p>
      </div>

      {/* Main Showcase Container - Theme Adaptive */}
      <div className="rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden ring-1 ring-border/50">
        
        {/* Toolbar / Window Header */}
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-3 bg-muted/20 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="flex items-center bg-background/50 border border-border/50 rounded-lg p-1 gap-1 shadow-sm">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t.preview}
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t.code}
            </button>
          </div>
          <div className="w-12"></div> {/* Spacer for alignment */}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[450px] md:min-h-[500px]">
           {activeTab === 'preview' ? (
             <div className="w-full h-full absolute inset-0 bg-background/50 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
               {/* Background Grid Pattern */}
               <div className="absolute inset-0 bg-grid-small opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
               
               <div className="relative z-10 animate-in zoom-in-95 duration-500">
                 <Card className="w-[350px] bg-card/95 backdrop-blur shadow-2xl border-border/60 ring-1 ring-black/5 dark:ring-white/5">
                   <div className="p-6 flex flex-col space-y-1.5">
                     <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                       <Bell className="h-4 w-4 text-primary" /> Notifications
                     </h3>
                     <p className="text-sm text-muted-foreground">You have 3 unread messages.</p>
                   </div>
                   <div className="p-6 pt-0 grid gap-4">
                      <div className="flex items-center space-x-4 rounded-md border border-border p-4 bg-accent/20">
                        <Bell className="h-5 w-5 text-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Push Notifications</p>
                          <p className="text-xs text-muted-foreground">Send notifications to device.</p>
                        </div>
                        <div className="h-5 w-9 rounded-full bg-primary relative cursor-pointer shadow-sm transition-colors hover:bg-primary/90">
                           <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform" />
                        </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer group">
                            <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center border border-blue-200 dark:border-blue-900 group-hover:scale-105 transition-transform">
                              <User className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                               <p className="text-sm font-medium">Friend Request</p>
                               <p className="text-xs text-muted-foreground">From Sarah J.</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
                         </div>
                         <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer group">
                            <div className="h-8 w-8 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center border border-purple-200 dark:border-purple-900 group-hover:scale-105 transition-transform">
                              <Settings className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                               <p className="text-sm font-medium">System Update</p>
                               <p className="text-xs text-muted-foreground">Version 2.0 available</p>
                            </div>
                         </div>
                      </div>
                      <Button variant="primary" className="w-full mt-2 group">
                        Mark all as read
                      </Button>
                   </div>
                 </Card>
               </div>
             </div>
           ) : (
             <div className="w-full h-full absolute inset-0 flex flex-col bg-[#fafafa] dark:bg-[#09090b] text-left animate-in fade-in duration-300">
               {/* Code Header */}
               <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/50">
                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
                   <FileCode className="h-4 w-4" />
                   <span>App.vue</span>
                 </div>
                 <button 
                    onClick={copyCode}
                    className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
               </div>
               
               {/* Code Body */}
               <div className="flex-1 overflow-auto flex text-sm font-mono leading-6">
                 {/* Line Numbers */}
                 <div className="flex flex-col items-end px-3 py-4 text-muted-foreground/30 select-none bg-muted/5 border-r border-border min-w-[3rem] text-xs">
                    {Array.from({length: 27}).map((_, i) => (
                       <span key={i} className="leading-6">{i + 1}</span>
                    ))}
                 </div>
                 
                 {/* Syntax Highlighted Code */}
                 <div className="p-4 w-full overflow-x-auto bg-background/50 text-zinc-800 dark:text-zinc-300">
                    <div className="whitespace-pre">
                      <div><span className="text-blue-600 dark:text-blue-400">&lt;script</span> <span className="text-purple-600 dark:text-purple-400">setup</span><span className="text-blue-600 dark:text-blue-400">&gt;</span></div>
                      <div><span className="text-red-600 dark:text-red-400">import</span> {'{'}</div>
                      <div>  Card,</div>
                      <div>  CardHeader,</div>
                      <div>  Button</div>
                      <div>{'}'} <span className="text-red-600 dark:text-red-400">from</span> <span className="text-green-600 dark:text-green-400">'@beautyvue/core'</span></div>
                      <div><span className="text-blue-600 dark:text-blue-400">&lt;/script&gt;</span></div>
                      <div className="h-6"></div>
                      <div><span className="text-blue-600 dark:text-blue-400">&lt;template&gt;</span></div>
                      <div>  <span className="text-blue-600 dark:text-blue-400">&lt;Card</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"w-[350px]"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span></div>
                      <div>    <span className="text-blue-600 dark:text-blue-400">&lt;CardHeader&gt;</span></div>
                      <div>      <span className="text-blue-600 dark:text-blue-400">&lt;h3</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"font-semibold"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span>Notifications<span className="text-blue-600 dark:text-blue-400">&lt;/h3&gt;</span></div>
                      <div>      <span className="text-blue-600 dark:text-blue-400">&lt;p</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"text-sm text-muted"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span>You have 3 unread.<span className="text-blue-600 dark:text-blue-400">&lt;/p&gt;</span></div>
                      <div>    <span className="text-blue-600 dark:text-blue-400">&lt;/CardHeader&gt;</span></div>
                      <div>    <span className="text-blue-600 dark:text-blue-400">&lt;div</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"p-6 pt-0 grid gap-4"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span></div>
                      <div>      <span className="text-blue-600 dark:text-blue-400">&lt;div</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"flex items-center gap-4"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span></div>
                      <div>        <span className="text-blue-600 dark:text-blue-400">&lt;div</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"h-2 w-2 rounded-full bg-primary"</span> <span className="text-blue-600 dark:text-blue-400">/&gt;</span></div>
                      <div>        <span className="text-gray-400 dark:text-gray-500">&lt;!-- Content omitted --&gt;</span></div>
                      <div>      <span className="text-blue-600 dark:text-blue-400">&lt;/div&gt;</span></div>
                      <div>      <span className="text-blue-600 dark:text-blue-400">&lt;Button</span> <span className="text-purple-600 dark:text-purple-400">class</span>=<span className="text-green-600 dark:text-green-400">"w-full"</span><span className="text-blue-600 dark:text-blue-400">&gt;</span>Mark all read<span className="text-blue-600 dark:text-blue-400">&lt;/Button&gt;</span></div>
                      <div>    <span className="text-blue-600 dark:text-blue-400">&lt;/div&gt;</span></div>
                      <div>  <span className="text-blue-600 dark:text-blue-400">&lt;/Card&gt;</span></div>
                      <div><span className="text-blue-600 dark:text-blue-400">&lt;/template&gt;</span></div>
                    </div>
                 </div>
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};