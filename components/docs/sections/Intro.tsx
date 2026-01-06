import React from 'react';
import { getTranslations, DocSectionProps } from '../types';

export const Intro: React.FC<DocSectionProps> = ({ language = 'en' }) => {
  const t = getTranslations(language);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t.intro.title}</h1>
        <p className="text-xl text-muted-foreground">{t.intro.subtitle}</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
          <p className="leading-7">{t.intro.notLibrary}</p>
          <p className="leading-7">{t.intro.copyPaste}</p>
        </div>
      </div>
      <div className="space-y-4" id="why">
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{t.intro.why}</h2>
         <p className="leading-7">{t.intro.whyDesc}</p>
         <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>{t.intro.reason1}</li>
            <li>{t.intro.reason2}</li>
            <li>{t.intro.reason3}</li>
         </ul>
      </div>
      <div className="space-y-4" id="credits">
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">{t.intro.credits}</h2>
         <p className="leading-7">{t.intro.creditsDesc}</p>
      </div>
      <div className="space-y-4" id="tech">
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">{t.intro.techStack}</h2>
         <p className="leading-7">{t.intro.techDesc}</p>
         <div className="flex flex-wrap gap-2">
            {['Vue 3', 'TypeScript', 'Tailwind CSS', 'Headless UI', 'Radix Vue', 'Lucide Icons'].map(tech => (
               <span key={tech} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                 {tech}
               </span>
            ))}
         </div>
      </div>
      <div className="space-y-4" id="faq">
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">{t.intro.faq}</h2>
         <div className="space-y-4">
            <h3 className="font-semibold">{t.intro.q1}</h3>
            <p className="text-muted-foreground">{t.intro.a1}</p>
            <h3 className="font-semibold">{t.intro.q2}</h3>
            <p className="text-muted-foreground">{t.intro.a2}</p>
         </div>
      </div>
    </div>
  );
};

