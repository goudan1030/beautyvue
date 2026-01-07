import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DatePickerProps {
  state: DocSectionState;
}

export const DatePicker: React.FC<DatePickerProps> = ({ state }) => {
  const [monthSelectOpen, setMonthSelectOpen] = useState(false);
  const [yearSelectOpen, setYearSelectOpen] = useState(false);
  const monthSelectRef = useRef<HTMLDivElement>(null);
  const yearSelectRef = useRef<HTMLDivElement>(null);

  // 获取当前显示的月份和年份
  const viewDate = state.datePickerViewDate || new Date();
  const currentDate = new Date();
  const isCurrentMonth = viewDate.getMonth() === currentDate.getMonth() && 
                         viewDate.getFullYear() === currentDate.getFullYear();

  // 月份名称
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  
  // 生成年份列表（当前年份前后各10年）
  const currentYear = currentDate.getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // 计算日历日期
  const getCalendarDays = () => {
    const days: (number | null)[] = [];
    
    // 添加上个月的日期
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(daysInPrevMonth - i);
    }
    
    // 添加当月的日期
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    // 添加下个月的日期，填满6行
    const remaining = 42 - days.length; // 6行 x 7天 = 42
    for (let i = 1; i <= remaining; i++) {
      days.push(i);
    }
    
    return days;
  };

  const calendarDays = getCalendarDays();

  // 判断日期是否属于当前月份
  const isDateInCurrentMonth = (day: number | null, index: number) => {
    if (day === null) return false;
    // 前 firstDay 个是上个月的日期
    if (index < firstDay) return false;
    // 从 firstDay 开始到 firstDay + daysInMonth - 1 是当月的日期
    if (index >= firstDay && index < firstDay + daysInMonth) return true;
    // 其余是下个月的日期
    return false;
  };

  // 判断日期是否是今天
  const isToday = (day: number | null, index: number) => {
    if (!isDateInCurrentMonth(day, index)) return false;
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  // 判断日期是否被选中
  const isSelected = (day: number | null, index: number) => {
    if (!state.datePickerDate || !isDateInCurrentMonth(day, index)) return false;
    const selected = state.datePickerDate;
    return selected.getDate() === day && 
           selected.getMonth() === month && 
           selected.getFullYear() === year;
  };

  // 处理日期点击
  const handleDateClick = (day: number | null, index: number) => {
    if (!isDateInCurrentMonth(day, index)) {
      // 如果点击的是上个月或下个月的日期，切换到那个月
      if (index < firstDay) {
        // 上个月
        const newDate = new Date(year, month - 1, day!);
        state.setDatePickerViewDate(newDate);
      } else {
        // 下个月
        const newDate = new Date(year, month + 1, day!);
        state.setDatePickerViewDate(newDate);
      }
      return;
    }
    
    const selectedDate = new Date(year, month, day!);
    state.setDatePickerDate(selectedDate);
    state.setDatePickerOpen(false);
  };

  // 切换到上一个月
  const handlePrevMonth = () => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() - 1);
    state.setDatePickerViewDate(newDate);
  };

  // 切换到下一个月
  const handleNextMonth = () => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + 1);
    state.setDatePickerViewDate(newDate);
  };

  // 选择月份
  const handleMonthSelect = (selectedMonth: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(selectedMonth);
    state.setDatePickerViewDate(newDate);
    setMonthSelectOpen(false);
  };

  // 选择年份
  const handleYearSelect = (selectedYear: number) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(selectedYear);
    state.setDatePickerViewDate(newDate);
    setYearSelectOpen(false);
  };

  // 回到今天
  const handleToday = () => {
    const today = new Date();
    state.setDatePickerViewDate(today);
    state.setDatePickerDate(today);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (monthSelectRef.current && !monthSelectRef.current.contains(event.target as Node)) {
        setMonthSelectOpen(false);
      }
      if (yearSelectRef.current && !yearSelectRef.current.contains(event.target as Node)) {
        setYearSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Date Picker</h1>
        <p className="text-xl text-muted-foreground">A date picker component with range and presets.</p>
      </div>
      
      <ComponentPreview 
        preview={
          <div className="relative">
            <button 
              onClick={() => state.setDatePickerOpen(!state.datePickerOpen)} 
              className={`w-[280px] justify-start text-left font-normal flex items-center h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                !state.datePickerDate ? 'text-muted-foreground' : ''
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {state.datePickerDate ? state.datePickerDate.toLocaleDateString() : "Pick a date"}
            </button>
            
            {state.datePickerOpen && (
              <div 
                className="absolute top-full mt-2 z-50 rounded-md border bg-background p-4 text-popover-foreground shadow-md outline-none animate-in fade-in zoom-in-95 w-[280px]" 
                style={{ backgroundColor: 'hsl(var(--background))' }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <button 
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-muted rounded transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-1">
                    <div className="relative" ref={monthSelectRef}>
                      <button
                        onClick={() => {
                          setMonthSelectOpen(!monthSelectOpen);
                          setYearSelectOpen(false);
                        }}
                        className="px-2 py-1 text-sm font-medium hover:bg-muted rounded flex items-center gap-1 transition-colors"
                      >
                        {monthNames[month]}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {monthSelectOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-background border rounded-md shadow-md z-50 w-32 max-h-48 overflow-y-auto" style={{ backgroundColor: 'hsl(var(--background))' }}>
                          {monthNames.map((name, index) => (
                            <button
                              key={index}
                              onClick={() => handleMonthSelect(index)}
                              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-muted transition-colors ${
                                index === month ? 'bg-accent' : ''
                              }`}
                            >
                              {name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="relative" ref={yearSelectRef}>
                      <button
                        onClick={() => {
                          setYearSelectOpen(!yearSelectOpen);
                          setMonthSelectOpen(false);
                        }}
                        className="px-2 py-1 text-sm font-medium hover:bg-muted rounded flex items-center gap-1 transition-colors"
                      >
                        {year}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {yearSelectOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-background border rounded-md shadow-md z-50 w-24 max-h-48 overflow-y-auto" style={{ backgroundColor: 'hsl(var(--background))' }}>
                          {years.map((y) => (
                            <button
                              key={y}
                              onClick={() => handleYearSelect(y)}
                              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-muted transition-colors ${
                                y === year ? 'bg-accent' : ''
                              }`}
                            >
                              {y}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-muted rounded transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Days of week */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-muted-foreground">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>
                
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const inCurrentMonth = isDateInCurrentMonth(day, index);
                    const isTodayDate = isToday(day, index);
                    const isSelectedDate = isSelected(day, index);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateClick(day, index)}
                        className={`
                          h-8 w-8 rounded-sm flex items-center justify-center text-sm transition-colors
                          ${!inCurrentMonth ? 'text-muted-foreground/30' : ''}
                          ${isTodayDate && !isSelectedDate ? 'bg-accent font-medium' : ''}
                          ${isSelectedDate ? 'bg-primary text-primary-foreground hover:bg-primary' : 'hover:bg-accent hover:text-accent-foreground'}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                
                {/* Today button */}
                {!isCurrentMonth && (
                  <div className="mt-2 pt-2 border-t">
                    <button
                      onClick={handleToday}
                      className="w-full py-1.5 text-sm font-medium text-primary hover:bg-accent rounded-sm transition-colors"
                    >
                      Today
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        } 
        code={`<script setup>
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-vue-next'

const date = ref()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" :class="cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')">
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ date ? date.toLocaleDateString() : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" mode="single" initial-focus />
    </PopoverContent>
  </Popover>
</template>`} 
      />
      
      <div className="space-y-4">
        <h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npm install @beautyvue/calendar @beautyvue/popover" />
      </div>
      
      <div className="space-y-4">
        <h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'`} />
        <CodeBlock code={`<Popover>
  <PopoverTrigger>Pick date</PopoverTrigger>
  <PopoverContent>
    <Calendar />
  </PopoverContent>
</Popover>`} />
      </div>
    </div>
  );
};
