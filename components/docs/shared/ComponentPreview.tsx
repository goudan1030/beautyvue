import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

// Reusable Code/Preview Block
export const ComponentPreview = ({ 
  preview, 
  code 
}: { 
  preview: React.ReactNode, 
  code: string 
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-card text-card-foreground my-6 scroll-mt-20" id="preview">
      <div className="flex items-center justify-between border-b p-3 bg-muted/20">
         <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Code
            </button>
         </div>
      </div>
      {activeTab === 'preview' ? (
        <div className="p-10 flex min-h-[350px] w-full justify-center items-center bg-background border-b rounded-b-xl overflow-hidden relative">
           {preview}
        </div>
      ) : (
        <div className="relative bg-zinc-950 rounded-b-xl overflow-hidden">
           <button
            onClick={onCopy}
            className="absolute top-4 right-4 p-2 rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 transition-all"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
           <div className="p-6 overflow-x-auto">
             <pre className="text-sm font-mono text-zinc-50 leading-relaxed">
               {code}
             </pre>
           </div>
        </div>
      )}
    </div>
  );
};

