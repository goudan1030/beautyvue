<div align="center">
  <h1>vue.beauty</h1>
  <p>一套基于 Vue + Tailwind 的现代 UI 组件库及官方文档站</p>
  <p>
    <a href="https://github.com/goudan1030/beautyvue"><b>GitHub 仓库</b></a> ·
    <span>开源免费 · 借鉴并致敬 <a href="https://ui.shadcn.com">shadcn/ui</a></span>
  </p>
</div>

---

## 背景与理念

`vue.beauty` 的目标是为 Vue 生态提供一套 **“可读、可拷贝、可魔改”** 的 UI 组件示例，风格与交互大量借鉴了 React 社区中优秀的组件库 —— **shadcn/ui**。  

不同于“黑盒组件库”，我们更强调：

- **源码即文档**：所有组件示例都以 Vue 代码的形式展示，方便你直接 Copy & Paste 到自己的项目中。
- **样式完全可控**：基于 Tailwind CSS 原子类与少量设计 token，你可以按需调整任何一个状态和细节。
- **实践优先**：文档站不仅仅罗列 API，而是通过「预览 + 代码」的方式展示真实业务场景。

> 特别说明：本项目在交互与视觉细节上大量借鉴了 [shadcn/ui](https://ui.shadcn.com)，包括组件的命名、示例结构与部分文案。我们对 shadcn/ui 团队致以充分的尊重与感谢。

---

## 特性一览

- **现代技术栈**
  - Vite + React 文档站（当前仓库）用于展示 Vue 组件的代码示例
  - Vue 3 + `<script setup>` + TypeScript（组件推荐写法）
  - Tailwind CSS + 自定义设计 token（`bg-background`, `text-foreground` 等）

- **组件丰富**
  - 通用基础组件：Button、Input、Textarea、Card、Badge、Avatar、Kbd、Spinner 等
  - 交互容器组件：Dialog、Drawer、Popover、Tooltip、HoverCard、DropdownMenu、ContextMenu 等
  - 表单与数据录入：Checkbox、RadioGroup、Switch、Select、Combobox、InputOTP、DatePicker、Calendar 等
  - 布局与导航：Tabs、Pagination、Breadcrumb、Sidebar、NavigationMenu、Resizable、ScrollArea 等
  - 反馈与展示：Alert、AlertDialog、Toast、Sonner、Empty、Skeleton、Progress、Table、Chart 等

- **文档体验**
  - 左侧导航切换组件分类，右侧为组件预览与使用说明
  - 每个组件都提供：
    - **Preview**：交互可玩的实时预览
    - **Code**：完整 Vue 使用示例
    - **Installation**：推荐的 npm 安装命令
    - **Usage**：更细致的用法示例与拆解

- **AI 助手集成**
  - 右下角内置 AI 助手（基于 DeepSeek），可以回答使用问题、生成变体代码片段。

---

## 在线预览（待补充）

当前仓库主要是 landing & docs 源码，你可以在本地启动后直接访问：

- 文档首页：`http://localhost:3000/`
- 组件文档：导航切换到 **Components**，或访问 `http://localhost:3000/#components`

> 如果后续部署了在线 Demo，可以在这里补充 Vercel / Netlify 链接。

---

## 安装与本地运行

### 环境要求

- Node.js ≥ 18
- npm / pnpm / yarn 任一包管理器

### 克隆仓库

```bash
git clone https://github.com/goudan1030/beautyvue.git
cd beautyvue
```

> 目前 GitHub 仓库为空，你可以先把本地 `vue.beauty---official-landing-&-docs` 项目 push 上去，再按以上命令给其他人使用。

### 安装依赖

```bash
npm install
```

### 运行开发环境

```bash
npm run dev
```

启动后在浏览器访问：

- `http://localhost:3000/`

### 环境变量配置

创建 `.env.local` 文件（或 `.env`）来配置环境变量：

```bash
# DeepSeek API Key（用于 AI 助手）
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Google Analytics Measurement ID (GA4)
# 格式: G-XXXXXXXXXX
# 获取方式：访问 https://analytics.google.com → 创建属性 → 数据流 → Web → 测量 ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Google Analytics 配置说明：**

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新的 GA4 属性（如果还没有）
3. 在"管理" → "数据流" → "Web" 中创建数据流
4. 复制"测量 ID"（格式为 `G-XXXXXXXXXX`）
5. 将测量 ID 添加到 `.env.local` 文件中的 `VITE_GA_MEASUREMENT_ID`
6. 重启开发服务器

配置完成后，Google Analytics 会自动：
- 跟踪页面浏览（包括 hash 路由变化）
- 记录用户在文档站中的导航行为
- 支持自定义事件追踪（通过 `utils/gtag.ts` 中的 `event` 函数）

---

## 文档站结构说明

文档站本身是一个 React + Vite 应用，用来 **展示 Vue 组件的使用方式**。核心文件结构大致如下：

```text
App.tsx                         # Landing + 顶部导航 + 视图切换（Landing / Docs / Components）
components/
  DocsView.tsx                  # 文档页容器：左侧目录 + 右侧组件文档
  docs/
    sections/
      Accordion.tsx             # 各个组件文档 Section（预览 + Code + 安装/用法 文案）
      Alert.tsx
      ...
    shared/
      CodeBlock.tsx             # 代码高亮与复制按钮
      ComponentPreview.tsx      # 预览 / Code Tabs UI
services/
  geminiService.ts              # AI 助手调用 DeepSeek API 的封装
translations.ts                 # 中英文文案与多语言支持
```

### 视图与路由

- **App 级别视图**（通过 URL `hash` 控制）：
  - `#docs` → 打开文档视图
  - `#components` → 打开组件视图（实际也是文档，只是默认选中某个组件）
  - 无 hash → 落地页

- **文档内部 section**（通过 `?Components=` 控制）：
  - `?Components=accordion` → 显示 Accordion 文档
  - `?Components=button` → 显示 Button 文档

`DocsView` 会：

1. 解析当前 URL 的 `Components` 参数（兼容 `#docs?Components=avatar` 这种写法）。
2. 把它映射到 `DocSection` 枚举。
3. 根据 `activeSection` 渲染对应的 `./docs/sections/*.tsx` 组件。

---

## 在你的项目中使用组件

> 注意：本仓库是 **文档站 + 示例**，实际业务项目中建议把需要的组件复制到你的 Vue 项目下，并根据自身设计系统调整样式与代码结构。

### 1. 安装核心依赖

以典型组件为例（实际以文档中 `Installation` 为准）：

```bash
npm install @beautyvue/core
# 或按需安装具体子包，例如：
npm install @beautyvue/button @beautyvue/input @beautyvue/dialog
```

同时你需要在 Vue 项目中配置好：

- Tailwind CSS
- 全局样式中引入 `@/styles/tailwind.css` 和主题变量

示例（简略）：

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

在 `tailwind.config.cjs` 中增加自定义主题（略）。  
在 `main.ts` 中引入样式：

```ts
import './assets/tailwind.css';
```

### 2. 拷贝示例代码

找到对应组件文档（例如 Button）：

1. 在文档站中选中组件 → 切到 **Code** 标签。
2. 复制 `<script setup>` 与 `<template>` 代码。
3. 粘贴到你项目里的 `*.vue` 组件中。

例如 Button 基本用法：

```vue
<script setup lang="ts">
import { Button } from '@beautyvue/button';
</script>

<template>
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</template>
```

### 3. 按需二次封装

建议在你自己的项目里为每个组件建立一层封装，例如：

```text
src/components/ui/
  button.vue        # 内部使用 @beautyvue/button，但暴露你自己项目统一的 API
  input.vue
  dialog.vue
```

这样后续无论是换主题、换实现（比如改成 Headless UI + Tailwind），都不会影响业务层代码。

---

## 与 shadcn/ui 的关系与差异

- **设计与交互**：大量借鉴了 [shadcn/ui](https://ui.shadcn.com) 的组件设计、示例结构与文档信息架构。
- **技术栈差异**：
  - shadcn/ui：React + Radix UI + Tailwind，导出的是可复制的 React 组件。
  - vue.beauty：Vue 3 + Tailwind，导出的是可复制的 Vue 组件与示例。
- **目的**：
  - 不试图“重新发明轮子”，而是把成熟的交互模式移植到 Vue 生态，方便更多团队直接使用。

如果你来自 React 阵营并习惯 shadcn/ui，那么上手 vue.beauty 会非常自然。

---

## 贡献指南（Contributing）

欢迎任何形式的贡献，包括但不限于：

- 补充 / 改进组件文档示例
- 修复样式、交互问题
- 添加新的组件 section
- 改善多语言文案、文档结构

### 本地开发步骤

1. Fork 本仓库并克隆到本地。
2. 安装依赖并运行开发环境：

   ```bash
   npm install
   npm run dev
   ```

3. 在浏览器打开 `http://localhost:3000/`，进行开发调试。
4. 提交 PR 前请：
   - 确保编译通过、页面无明显报错
   - 组件示例在中英文下文案正常

---

## 开源协议

本项目采用 **MIT License** 开源协议。你可以自由地使用、修改和分发代码（包括商业项目），  
但请在合适的位置保留必要的版权与许可声明，并尊重源项目与 shadcn/ui 的版权。

---

## 致谢

- [shadcn/ui](https://ui.shadcn.com)：本项目的主要视觉与交互灵感来源。
- [Radix UI](https://www.radix-ui.com/)：无障碍交互模式与设计模式的重要参考。
- 所有参与贡献 vue.beauty 的开发者与使用者。

如果这个项目对你有帮助，欢迎在 GitHub 上 **点个 Star** 支持一下，也欢迎提交 Issue / PR 一起完善。 🙌
