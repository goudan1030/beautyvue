import React from 'react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface ChartProps {
  state: DocSectionState;
}

export const Chart: React.FC<ChartProps> = ({ state }) => {
  // 生成过去3个月的数据（从4月到6月）
  const generateChartData = (type: 'desktop' | 'mobile') => {
    const data = [];
    const months = ['Apr', 'May', 'Jun'];
    const daysPerMonth = [30, 31, 30];
    
    // 为 Desktop 和 Mobile 生成不同的数据
    const baseValues = type === 'desktop' 
      ? [180, 220, 200, 250, 280, 240, 260, 290, 270, 300, 250, 280, 320, 290, 310, 280, 300, 330, 310, 290, 320, 300, 340, 320, 310, 330, 350, 320, 310, 340]
      : [200, 240, 220, 270, 300, 260, 280, 310, 290, 320, 270, 300, 340, 310, 330, 300, 320, 350, 330, 310, 340, 320, 360, 340, 330, 350, 370, 340, 330, 360];
    
    let dataIndex = 0;
    months.forEach((month, monthIdx) => {
      const days = daysPerMonth[monthIdx];
      // 更均匀地分布日期
      const step = Math.ceil(days / 10);
      for (let i = 1; i <= days; i += step) {
        if (dataIndex < baseValues.length) {
          const variation = Math.floor(Math.random() * 40) - 20;
          data.push({
            date: `${month} ${i}`,
            fullDate: `${month} ${i}, 2024`,
            pageViews: Math.max(100, baseValues[dataIndex] + variation)
          });
          dataIndex++;
        }
      }
    });
    return data;
  };

  const chartData = generateChartData(state.chartViewType);
  const maxValue = Math.max(...chartData.map(d => d.pageViews));
  const desktopTotal = 24828;
  const mobileTotal = 25010;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Chart</h1>
        <p className="text-xl text-muted-foreground">Beautiful charts. Built using Recharts. Copy and paste into your apps.</p>
      </div>

      {/* Note Section */}
      <div className="rounded-lg border bg-muted/50 p-4">
        <div className="flex items-start gap-2">
          <div className="text-sm font-medium">Note</div>
          <div className="text-sm text-muted-foreground">
            We're working on upgrading to Recharts v3. In the meantime, if you'd like to start testing v3, see the code in the comment{' '}
            <button className="underline hover:text-foreground">here</button>. We'll have an official release soon.
          </div>
        </div>
      </div>

      {/* Interactive Bar Chart Preview */}
      <ComponentPreview preview={
        <div className="w-full space-y-6 p-6">
          {/* Header with Title and Statistics */}
          <div className="flex items-start justify-between">
            {/* Left: Title and Subtitle */}
            <div>
              <h3 className="text-lg font-semibold mb-1">Bar Chart - Interactive</h3>
              <p className="text-sm text-muted-foreground">Showing total visitors for the last 3 months</p>
            </div>
            
            {/* Right: Statistics - Clickable */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => state.setChartViewType('desktop')}
                className={`text-right transition-colors cursor-pointer ${
                  state.chartViewType === 'desktop' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="text-sm text-muted-foreground">Desktop</div>
                <div className="text-2xl font-bold">{desktopTotal.toLocaleString()}</div>
              </button>
              <div className="h-12 w-px bg-border"></div>
              <button
                onClick={() => state.setChartViewType('mobile')}
                className={`text-right transition-colors cursor-pointer ${
                  state.chartViewType === 'mobile' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="text-sm text-muted-foreground">Mobile</div>
                <div className="text-2xl font-bold">{mobileTotal.toLocaleString()}</div>
              </button>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative mt-6">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-muted-foreground pr-2 w-10">
              <span>{Math.ceil(maxValue / 4 * 4)}</span>
              <span>{Math.ceil(maxValue / 4 * 3)}</span>
              <span>{Math.ceil(maxValue / 4 * 2)}</span>
              <span>{Math.ceil(maxValue / 4 * 1)}</span>
              <span>0</span>
            </div>

            {/* Chart Area */}
            <div className="ml-12 border-l border-b border-border pb-8">
              <div className="relative h-64 flex items-end justify-between gap-0.5 px-2">
                {chartData.map((item, index) => {
                  const height = (item.pageViews / maxValue) * 100;
                  const isHovered = state.chartHoveredBar === index;
                  return (
                    <div
                      key={index}
                      className="flex-1 relative group min-w-[2px]"
                      onMouseEnter={() => state.setChartHoveredBar(index)}
                      onMouseLeave={() => state.setChartHoveredBar(null)}
                    >
                      <div
                        className="w-full bg-primary hover:bg-primary/90 transition-all cursor-pointer rounded-t"
                        style={{ height: `${height}%`, minHeight: '2px' }}
                      />
                      {/* Tooltip */}
                      {isHovered && (
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-3 py-2 rounded-md shadow-lg border border-border z-10 whitespace-nowrap">
                          <div className="font-medium mb-1">{item.fullDate}</div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-primary"></div>
                            <span>Page Views</span>
                            <span className="font-semibold ml-1">{item.pageViews}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between px-2 mt-2 text-xs text-muted-foreground">
                {chartData.filter((_, i) => {
                  const total = chartData.length;
                  const step = Math.ceil(total / 10);
                  return i % step === 0 || i === total - 1;
                }).map((item, idx) => (
                  <span key={idx} className="text-xs">{item.date}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      } code={`<script setup>
import { BarChart, BarChartTooltip, BarChartTooltipContent } from '@/components/ui/chart'
import { ref } from 'vue'

const chartData = ref([
  { date: 'Apr 1, 2024', pageViews: 222 },
  { date: 'Apr 4, 2024', pageViews: 189 },
  { date: 'Apr 14, 2024', pageViews: 256 },
  { date: 'Apr 25, 2024', pageViews: 198 },
  { date: 'May 6, 2024', pageViews: 234 },
  { date: 'May 17, 2024', pageViews: 267 },
  { date: 'May 28, 2024', pageViews: 245 },
  { date: 'Jun 8, 2024', pageViews: 289 },
  { date: 'Jun 18, 2024', pageViews: 312 },
  { date: 'Jun 30, 2024', pageViews: 298 },
])

const chartConfig = {
  pageViews: {
    label: 'Page Views',
    color: 'hsl(var(--primary))',
  },
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-semibold">Bar Chart - Interactive</h3>
      <p class="text-sm text-muted-foreground">Showing total visitors for the last 3 months</p>
    </div>
    <div class="flex items-center gap-4">
      <button
        @click="chartViewType = 'desktop'"
        :class="['text-right transition-colors cursor-pointer', chartViewType === 'desktop' ? 'opacity-100' : 'opacity-60 hover:opacity-100']"
      >
        <div class="text-sm text-muted-foreground">Desktop</div>
        <div class="text-2xl font-bold">24,828</div>
      </button>
      <div class="h-12 w-px bg-border"></div>
      <button
        @click="chartViewType = 'mobile'"
        :class="['text-right transition-colors cursor-pointer', chartViewType === 'mobile' ? 'opacity-100' : 'opacity-60 hover:opacity-100']"
      >
        <div class="text-sm text-muted-foreground">Mobile</div>
        <div class="text-2xl font-bold">25,010</div>
      </button>
    </div>
    <BarChart
      v-if="chartViewType === 'desktop'"
      :data="chartData"
      :config="chartConfig"
      index="date"
      :categories="['pageViews']"
      :y-formatter="(value) => \`\${value}\`"
      class="h-[200px] w-full"
    />
    <BarChart
      v-else
      :data="chartData"
      :config="chartConfig"
      index="date"
      :categories="['pageViews']"
      :y-formatter="(value) => \`\${value}\`"
      class="h-[200px] w-full"
    />
  </div>
</template>`} />

      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/chart recharts" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { BarChart, BarChartTooltip, BarChartTooltipContent } from '@/components/ui/chart'`} />
        <div className="space-y-3 mt-4">
          <h3 className="text-lg font-semibold">Basic Bar Chart</h3>
          <CodeBlock code={`<script setup>
import { BarChart } from '@/components/ui/chart'

const data = [
  { name: 'Jan', total: 400 },
  { name: 'Feb', total: 300 },
  { name: 'Mar', total: 500 },
]
</script>

<template>
  <BarChart :data="data" />
</template>`} />
          <h3 className="text-lg font-semibold">Interactive Bar Chart with Tooltip</h3>
          <CodeBlock code={`<script setup>
import { BarChart, BarChartTooltip, BarChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { date: 'Apr 1, 2024', pageViews: 222 },
  { date: 'Apr 4, 2024', pageViews: 189 },
  { date: 'Apr 14, 2024', pageViews: 256 },
]

const chartConfig = {
  pageViews: {
    label: 'Page Views',
    color: 'hsl(var(--primary))',
  },
}
</script>

<template>
  <BarChart :data="chartData" :config="chartConfig">
    <BarChartTooltip>
      <BarChartTooltipContent />
    </BarChartTooltip>
  </BarChart>
</template>`} />
        </div>
      </div>
    </div>
  );
};

