import React from 'react';
import { getTranslations, DocSectionProps } from '../types';
import { CodeBlock } from '../shared/CodeBlock';

export const Install: React.FC<DocSectionProps> = ({ language = 'en' }) => {
  const t = getTranslations(language);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t.install.title}</h1>
        <p className="text-xl text-muted-foreground">{t.install.subtitle}</p>
      </div>
      <div className="space-y-6">
         <div className="space-y-2" id="step-1"><h3 className="text-2xl font-semibold tracking-tight">{t.install.step1}</h3><p className="text-muted-foreground">{t.install.step1Desc}</p><CodeBlock code="npm create vite@latest my-vue-app -- --template vue-ts" /></div>
         <div className="space-y-2" id="step-2"><h3 className="text-2xl font-semibold tracking-tight">{t.install.step2}</h3><p className="text-muted-foreground">{t.install.step2Desc}</p><CodeBlock code={`npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`} /></div>
         <div className="space-y-2" id="step-3"><h3 className="text-2xl font-semibold tracking-tight">{t.install.step3}</h3><p className="text-muted-foreground">{t.install.step3Desc}</p><CodeBlock code="npm install clsx tailwind-merge" /></div>
         <div className="space-y-2" id="step-4"><h3 className="text-2xl font-semibold tracking-tight">{t.install.step4}</h3><p className="text-muted-foreground">{t.install.step4Desc}</p><CodeBlock code={`import { type ClassValue, clsx } from 'clsx'\nimport { twMerge } from 'tailwind-merge'\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}`} /></div>
         <div className="rounded-lg border bg-card p-6 shadow-sm mt-8 border-l-4 border-l-primary"><h3 className="text-lg font-semibold mb-2">{t.install.ready}</h3><p className="text-muted-foreground">{t.install.readyDesc}</p></div>
      </div>
    </div>
  );
};

