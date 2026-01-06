import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

// Styled Code Block for Usage Examples
export const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const lines = code.trim().split('\n');

  const onCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Basic syntax highlighting
  const highlightLine = (line: string) => {
    const parts = line.split(/(\s+|[{}<>=/"';,()]|import|from)/g);
    let inTag = false;

    return parts.map((part, i) => {
      if (!part) return null;
      
      let className = "text-zinc-800 dark:text-zinc-300";
      
      if (['import', 'from', 'const', 'export', 'default', 'return', 'function', 'script', 'template'].includes(part)) {
        className = "text-[#D73A49] dark:text-[#ff7b72]"; // Red for keywords
      } else if (part.startsWith('"') || part.startsWith("'")) {
        className = "text-[#032F62] dark:text-[#a5d6ff]"; // Blue for strings
      } else if (part === '<' || part === '</' || part === '>') {
        className = "text-[#22863A] dark:text-[#7ee787]"; // Green for tag brackets
        if (part !== '>') inTag = true;
        else inTag = false;
      } else if (part.startsWith('<') && part.length > 1) {
         // combined <Tag
         className = "text-[#22863A] dark:text-[#7ee787]";
      } else if (['type', 'collapsible', 'value', 'class', 'variant'].includes(part)) {
        className = "text-[#005CC5] dark:text-[#79c0ff]"; // Blue for attributes
      } else if (inTag && /^[A-Z]/.test(part)) {
         // Component name in tag
         className = "text-[#22863A] dark:text-[#7ee787]";
      }
      
      if (part.startsWith('<') && part.length > 1) {
          return <span key={i} className="text-[#22863A] dark:text-[#7ee787]">{part}</span>;
      }

      return <span key={i} className={className}>{part}</span>;
    });
  };

  return (
    <div className="relative rounded-lg bg-[#F6F8FA] dark:bg-[#161B22] border border-border/40 group font-mono text-[13px] leading-6 mb-4 shadow-sm">
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md text-muted-foreground/60 hover:text-foreground hover:bg-background/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Copy code"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <div className="overflow-x-auto py-3 flex">
        <div className="flex-none text-right select-none text-muted-foreground/30 px-3 border-r border-border/10 min-w-[2.5rem]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="flex-1 px-3 min-w-0">
           {lines.map((line, i) => (
             <div key={i} className="whitespace-pre">
                {highlightLine(line)}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

