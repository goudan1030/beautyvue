import React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface BreadcrumbProps {
  state: DocSectionState;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ state }) => {
  const handleBreadcrumbClick = (path: string) => {
    // 在实际应用中，这里可以处理路由跳转
    console.log('Navigate to:', path);
    // 示例：使用 Vue Router
    // router.push(path)
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Breadcrumb</h1><p className="text-xl text-muted-foreground">Displays the path to the current resource.</p></div>
      <ComponentPreview preview={
        <div className="flex flex-col gap-6 items-start w-full">
          {/* Two Level */}
          <nav className="flex items-center text-sm">
            <button
              onClick={() => handleBreadcrumbClick('/')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('home-2')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'home-2' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground font-medium">Components</span>
          </nav>

          {/* Three Level */}
          <nav className="flex items-center text-sm">
            <button
              onClick={() => handleBreadcrumbClick('/')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('home-3')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'home-3' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <button
              onClick={() => handleBreadcrumbClick('/components')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('components-3')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'components-3' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Components
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground font-medium">Button</span>
          </nav>

          {/* Multi Level with Ellipsis */}
          <nav className="flex items-center text-sm">
            <button
              onClick={() => handleBreadcrumbClick('/')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('home-multi')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'home-multi' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <button
              onClick={() => handleBreadcrumbClick('/components')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('ellipsis')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`px-1.5 py-0.5 rounded transition-colors ${state.breadcrumbHoveredItem === 'ellipsis' ? 'bg-muted' : ''} hover:bg-muted cursor-pointer`}
              title="View more"
            >
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <button
              onClick={() => handleBreadcrumbClick('/components/ui/deep')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('deep')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'deep' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Deep
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <button
              onClick={() => handleBreadcrumbClick('/components/ui/deep/level')}
              onMouseEnter={() => state.setBreadcrumbHoveredItem('level')}
              onMouseLeave={() => state.setBreadcrumbHoveredItem(null)}
              className={`transition-colors ${state.breadcrumbHoveredItem === 'level' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
            >
              Level
            </button>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground font-medium">Current</span>
          </nav>
        </div>
      } code={`<script setup>
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'
import { ChevronRight, MoreHorizontal } from 'lucide-vue-next'
</script>

<template>
  <!-- Two Level -->
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <span class="font-medium">Components</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <!-- Three Level -->
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <span class="font-medium">Button</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <!-- Multi Level with Ellipsis -->
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components/ui/deep">Deep</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components/ui/deep/level">Level</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <span class="font-medium">Current</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/breadcrumb" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Two Level</h3>
        <CodeBlock code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span class="font-medium">Components</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`} />
        <h3 className="text-lg font-semibold">Three Level</h3>
        <CodeBlock code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span class="font-medium">Button</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`} />
        <h3 className="text-lg font-semibold">Multi Level with Ellipsis</h3>
        <CodeBlock code={`<script setup>
import { MoreHorizontal } from 'lucide-vue-next'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis>
          <MoreHorizontal class="h-4 w-4" />
        </BreadcrumbEllipsis>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components/ui/deep">Deep</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components/ui/deep/level">Level</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <span class="font-medium">Current</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>`} />
        <h3 className="text-lg font-semibold">Interactive Features</h3>
        <CodeBlock code={`<!-- Links automatically have hover and click interactions -->
<BreadcrumbLink href="/components" class="hover:text-foreground transition-colors">
  Components
</BreadcrumbLink>

<!-- Current page item (non-clickable) -->
<BreadcrumbItem>
  <span class="font-medium text-foreground">Current Page</span>
</BreadcrumbItem>`} />
      </div>
      </div>
    </div>
  );
};

