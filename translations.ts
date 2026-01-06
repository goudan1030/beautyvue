import { Language } from './types';

export const translations = {
  en: {
    nav: {
      docs: 'Documentation',
      components: 'Components',
    },
    hero: {
      badge: 'v1.0.0 Public Beta is now live',
      titleStart: 'Build your Vue app',
      titleEnd: 'faster and better.',
      description: 'Beautifully designed components built with Vue 3, Tailwind CSS, and Headless UI primitives. Accessible, customizable, and open source.',
      getStarted: 'Get Started',
      github: 'GitHub'
    },
    features: {
      composable: { title: 'Composable', desc: 'Built with Composition API. Logic and UI are separate.' },
      lightweight: { title: 'Lightweight', desc: 'Tree-shakable. Only ship what you use to production.' },
      darkMode: { title: 'Dark Mode', desc: 'Automatic dark mode support via Tailwind\'s dark modifier.' },
    },
    cta: {
      title: 'Ready to build?',
      desc: 'Start your next project with Vue.Beauty and save weeks of development time.'
    },
    showcase: {
      title: 'Beautiful by Default',
      desc: 'Designed to look great out of the box, but flexible enough to match your brand completely.',
      preview: 'Preview',
      code: 'Code'
    },
    docs: {
      gettingStarted: 'Getting Started',
      components: 'Components',
      onThisPage: 'On this page',
      usage: 'Usage',
      props: 'Props',
      examples: 'Examples',
      intro: {
        title: 'Introduction',
        subtitle: 'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
        notLibrary: 'This is not a component library in the traditional sense. It is not an npm package that you install and become dependent on.',
        copyPaste: 'Instead, it is a collection of re-usable components that you can copy and paste into your apps. You gain full control over the code, deciding how the components are built and styled.',
        why: 'Why copy/paste?',
        whyDesc: 'The biggest issue with traditional component libraries is the "black box" problem. You want to change a specific border color or animation curve, but the library doesn\'t expose a prop for it.',
        reason1: 'Full control over the source code.',
        reason2: 'No npm dependency hell or version conflicts.',
        reason3: 'Style it exactly how you want with Tailwind CSS.',
        credits: 'Credits',
        creditsDesc: 'Version 1.0.0 is heavily inspired by shadcn/ui. We would like to express our gratitude to shadcn/ui for the inspiration.',
        techStack: 'Tech Stack',
        techDesc: 'Vue.Beauty is built on a modern, robust foundation:',
        faq: 'FAQ',
        q1: 'Can I use this in my project?',
        a1: 'Yes. Free for personal and commercial use. No attribution required, but appreciated.',
        q2: 'Do you support Nuxt?',
        a2: 'Absolutely. Since these are just Vue components, they work perfectly in Nuxt, Vite, or Laravel.'
      },
      install: {
        title: 'Installation',
        subtitle: 'Get your project set up and ready to use the components.',
        step1: '1. Create a Vue Project',
        step1Desc: 'Start by creating a new Vue project using Vite.',
        step2: '2. Install Tailwind CSS',
        step2Desc: 'Install Tailwind CSS and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.',
        step3: '3. Add Utility Dependencies',
        step3Desc: 'We use clsx and tailwind-merge to conditionally merge Tailwind classes without conflicts.',
        step4: '4. Configure Utils',
        step4Desc: 'Create a lib/utils.ts file. This helper function is used by almost every component.',
        ready: 'You are ready!',
        readyDesc: 'You can now go to the Components page, copy the code, and paste it into your project.'
      }
    }
  },
  zh: {
    nav: {
      docs: '文档',
      components: '组件',
    },
    hero: {
      badge: 'v1.0.0 公测版现已上线',
      titleStart: '构建您的 Vue 应用',
      titleEnd: '更快、更好。',
      description: '基于 Vue 3、Tailwind CSS 和 Headless UI 原语构建的精美组件。无障碍、可定制且开源。',
      getStarted: '开始使用',
      github: 'GitHub'
    },
    features: {
      composable: { title: '可组合', desc: '使用组合式 API 构建。逻辑与 UI 分离。' },
      lightweight: { title: '轻量级', desc: '支持 Tree-shaking。只将您使用的内容发布到生产环境。' },
      darkMode: { title: '暗黑模式', desc: '通过 Tailwind 的 dark 修饰符自动支持暗黑模式。' },
    },
    cta: {
      title: '准备好构建了吗？',
      desc: '使用 Vue.Beauty 开始您的下一个项目，节省数周的开发时间。'
    },
    showcase: {
      title: '默认即美',
      desc: '开箱即用，设计精美，同时也足够灵活，完全匹配您的品牌。',
      preview: '预览',
      code: '代码'
    },
    docs: {
      gettingStarted: '开始使用',
      components: '组件',
      onThisPage: '本页内容',
      usage: '用法',
      props: '属性',
      examples: '示例',
      intro: {
        title: '介绍',
        subtitle: '设计精美的组件，您可以直接复制并粘贴到您的应用程序中。无障碍。可定制。开源。',
        notLibrary: '这不仅仅是一个传统的组件库。它不是一个您安装并依赖的 npm 包。',
        copyPaste: '相反，它是一组可重用的组件，您可以复制并粘贴到您的应用程序中。您完全控制代码，决定组件的构建和样式方式。',
        why: '为什么选择复制/粘贴？',
        whyDesc: '传统组件库最大的问题是“黑盒”问题。您想要更改特定的边框颜色或动画曲线，但库没有暴露相应的 prop。',
        reason1: '完全控制源代码。',
        reason2: '没有 npm 依赖地狱或版本冲突。',
        reason3: '使用 Tailwind CSS 随心所欲地设计样式。',
        credits: '致谢',
        creditsDesc: '1.0.0 版本在极大程度上借鉴了 shadcn/ui。特别感谢 shadcn/ui 提供的灵感和优秀范例。',
        techStack: '技术栈',
        techDesc: 'Vue.Beauty 建立在现代、稳健的基础上：',
        faq: '常见问题',
        q1: '我可以在我的项目中使用它吗？',
        a1: '可以。个人和商业用途均免费。不需要署名，但如果能署名我们将不胜感激。',
        q2: '你们支持 Nuxt 吗？',
        a2: '当然。因为这些只是 Vue 组件，它们在 Nuxt、Vite 或 Laravel 中都能完美运行。'
      },
      install: {
        title: '安装',
        subtitle: '设置您的项目并准备使用组件。',
        step1: '1. 创建 Vue 项目',
        step1Desc: '首先使用 Vite 创建一个新的 Vue 项目。',
        step2: '2. 安装 Tailwind CSS',
        step2Desc: '安装 Tailwind CSS 及其对等依赖项，然后生成您的 tailwind.config.js 和 postcss.config.js 文件。',
        step3: '3. 添加工具依赖',
        step3Desc: '我们使用 clsx 和 tailwind-merge 来有条件地合并 Tailwind 类，避免冲突。',
        step4: '4. 配置工具函数',
        step4Desc: '创建一个 lib/utils.ts 文件。几乎每个组件都使用此帮助函数。',
        ready: '准备就绪！',
        readyDesc: '您现在可以转到组件页面，复制代码并粘贴到您的项目中。'
      }
    }
  }
};