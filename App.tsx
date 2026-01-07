import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  Github, 
  Terminal, 
  Layout, 
  Zap, 
  Moon, 
  Menu,
  X,
  Languages,
  ArrowRight,
  Code2
} from 'lucide-react';
import { ComponentShowcase } from './components/ComponentShowcase';
import { AIAssistant } from './components/AIAssistant';
import { DocsView } from './components/DocsView';
import { ThemeToggle } from './components/ThemeToggle';
import { PageView, Language } from './types';
import { translations } from './translations';
import { pageview } from './utils/gtag';

const App: React.FC = () => {
  // 直接在初始化时从 URL 读取状态
  const getInitialView = (): PageView => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      // 处理 hash 中可能包含 query 参数的情况，如 #docs?section=avatar
      const hashPart = hash.split('?')[0];
      if (hashPart === 'docs') {
        return PageView.DOCS;
      } else if (hashPart === 'components') {
        return PageView.COMPONENTS;
      }
    }
    return PageView.LANDING;
  };

  const [view, setView] = useState<PageView>(getInitialView());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  // 使用 useLayoutEffect 在 DOM 更新前同步读取 URL，确保状态正确
  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    // 处理 hash 中可能包含 query 参数的情况
    const hashPart = hash.split('?')[0];
    if (hashPart === 'docs') {
      setView(PageView.DOCS);
    } else if (hashPart === 'components') {
      setView(PageView.COMPONENTS);
    } else if (!hashPart) {
      setView(PageView.LANDING);
    }
  }, []);

  // 监听 URL 变化（浏览器前进/后退和手动导航）
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      // 处理 hash 中可能包含 query 参数的情况
      const hashPart = hash.split('?')[0];
      if (hashPart === 'docs') {
        setView(PageView.DOCS);
      } else if (hashPart === 'components') {
        setView(PageView.COMPONENTS);
      } else if (!hashPart) {
        setView(PageView.LANDING);
      }
      
      // 发送页面浏览事件到 Google Analytics
      const url = window.location.pathname + window.location.search + window.location.hash;
      pageview(url);
    };

    const handlePopState = () => {
      handleHashChange();
    };

    // 初始页面浏览
    const initialUrl = window.location.pathname + window.location.search + window.location.hash;
    pageview(initialUrl);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (newView: PageView) => {
    setView(newView);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
    
    // 更新 URL hash（使用 pushState 避免页面跳转）
    let url: string;
    if (newView === PageView.LANDING) {
      // 清除 hash，回到首页
      url = window.location.pathname + (window.location.search || '');
      window.history.pushState(null, '', url);
    } else {
      // 设置 hash，保留现有的 search 参数
      const search = window.location.search || '';
      url = window.location.pathname + search + `#${newView.toLowerCase()}`;
      window.history.pushState(null, '', url);
    }
    
    // 发送页面浏览事件到 Google Analytics
    pageview(url);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateTo(PageView.LANDING)}>
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <span className="font-bold text-primary-foreground text-xs">V</span>
            </div>
            <span className="hidden font-bold sm:inline-block tracking-tight text-lg">vue.beauty</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => navigateTo(PageView.DOCS)}
              className={`transition-colors hover:text-foreground/80 ${view === PageView.DOCS ? 'text-foreground' : 'text-foreground/60'}`}
            >
              {t.nav.docs}
            </button>
            <button 
              onClick={() => navigateTo(PageView.COMPONENTS)}
              className={`transition-colors hover:text-foreground/80 ${view === PageView.COMPONENTS ? 'text-foreground' : 'text-foreground/60'}`}
            >
              {t.nav.components}
            </button>
            <div className="flex items-center gap-2 border-l border-border pl-6 ml-2">
              <a 
                href="https://github.com/goudan1030/beautyvue" 
                target="_blank" 
                rel="noreferrer" 
                className="text-foreground/60 hover:text-foreground transition-colors p-2"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <ThemeToggle />
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground flex items-center gap-1 min-w-[3rem] justify-center"
                aria-label="Toggle language"
              >
                <Languages className="h-4 w-4" />
                <span className="text-xs font-semibold">{language === 'en' ? 'EN' : '中'}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
             <button
                onClick={toggleLanguage}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground"
              >
                <Languages className="h-5 w-5" />
             </button>
             <ThemeToggle />
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-foreground">
               {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
             </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b border-border animate-in slide-in-from-top-2 shadow-lg">
             <div className="flex flex-col p-4 space-y-4 text-sm font-medium">
                <button onClick={() => navigateTo(PageView.DOCS)} className="text-left px-4 py-3 hover:bg-muted rounded-md transition-colors">{t.nav.docs}</button>
                <button onClick={() => navigateTo(PageView.COMPONENTS)} className="text-left px-4 py-3 hover:bg-muted rounded-md transition-colors">{t.nav.components}</button>
                <a href="https://github.com/goudan1030/beautyvue" target="_blank" className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-md transition-colors">
                   <Github className="h-4 w-4" /> {t.hero.github}
                </a>
             </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {view === PageView.LANDING && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-50"></div>
              <div className="absolute left-[50%] top-0 h-[300px] w-[500px] -translate-x-[50%] bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none"></div>

              <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4 md:px-8 relative z-10">
                <a 
                  href="https://github.com/goudan1030/beautyvue" 
                  className="rounded-full bg-muted/80 backdrop-blur px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2 border border-border/50 animate-in slide-in-from-bottom-2 fade-in duration-700"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {t.hero.badge}
                  <ArrowRight className="h-3 w-3 ml-1 opacity-50" />
                </a>
                
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2 animate-in slide-in-from-bottom-4 fade-in duration-1000 fill-mode-backwards delay-100">
                  {t.hero.titleStart} <br/>
                  <span className="text-primary">{t.hero.titleEnd}</span>
                </h1>
                
                <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 animate-in slide-in-from-bottom-4 fade-in duration-1000 fill-mode-backwards delay-200">
                  {t.hero.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-1000 fill-mode-backwards delay-300">
                  <button 
                    onClick={() => navigateTo(PageView.DOCS)}
                    className="bg-primary text-primary-foreground h-11 px-8 rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {t.hero.getStarted}
                  </button>
                  <a 
                    href="https://github.com/goudan1030/beautyvue"
                    className="border border-input bg-background h-11 px-8 rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-all hover:border-foreground/20 inline-flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {t.hero.github}
                  </a>
                </div>
              </div>
            </section>

            <ComponentShowcase language={language} />

            {/* Features Grid */}
            <section className="container space-y-6 py-8 md:py-12 lg:py-24 max-w-6xl mx-auto px-4 md:px-8">
              <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-xl border bg-card p-2 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Layout className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{t.features.composable.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.features.composable.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl border bg-card p-2 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{t.features.lightweight.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.features.lightweight.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl border bg-card p-2 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Moon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{t.features.darkMode.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.features.darkMode.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation CTA */}
            <section className="container py-12 md:py-24 max-w-4xl mx-auto px-4 md:px-8">
              <div className="rounded-3xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
                <div className="space-y-4 relative z-10 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t.cta.title}</h3>
                  <p className="text-zinc-400 max-w-md text-lg">{t.cta.desc}</p>
                </div>
                <div className="w-full md:w-auto min-w-[300px] bg-black/50 backdrop-blur-md rounded-xl p-4 font-mono text-sm border border-zinc-800 shadow-inner relative z-10 group-hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-2 text-zinc-500 mb-3 border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      <span>bash</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-2">
                    <span className="text-green-500 select-none">$</span>
                    <span className="text-zinc-300">npm install @beautyvue/core</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Docs & Components Views */}
        {(view === PageView.DOCS || view === PageView.COMPONENTS) && (
          <DocsView 
            initialSection={view === PageView.COMPONENTS ? 'accordion' : 'intro'} 
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12 bg-muted/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-4 md:px-0">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">V</div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by <a href="#" className="font-medium underline underline-offset-4 hover:text-foreground">Goudan1030</a>. 
              The source code is available on <a href="https://github.com/goudan1030/beautyvue" className="font-medium underline underline-offset-4 hover:text-foreground">GitHub</a>.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
             <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
             <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Button */}
      <AIAssistant />
    </div>
  );
};

export default App;