import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface CalendarProps {
  state: DocSectionState;
}

export const Calendar: React.FC<CalendarProps> = ({ state }) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = state.calendarDate.getFullYear();
  const month = state.calendarDate.getMonth();
  const selectedDate = state.calendarDate.getDate();

  // 获取月份的第一天是星期几（0 = Sunday, 1 = Monday, etc.）
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 获取月份的天数
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    if (state.calendarView === 'month') {
      state.setCalendarDate(new Date(year, month - 1, Math.min(selectedDate, new Date(year, month, 0).getDate())));
    } else if (state.calendarView === 'month-select') {
      state.setCalendarDate(new Date(year - 1, month, selectedDate));
    } else if (state.calendarView === 'year-select') {
      state.setCalendarDate(new Date(year - 12, month, selectedDate));
    }
  };

  const handleNextMonth = () => {
    if (state.calendarView === 'month') {
      state.setCalendarDate(new Date(year, month + 1, Math.min(selectedDate, new Date(year, month + 2, 0).getDate())));
    } else if (state.calendarView === 'month-select') {
      state.setCalendarDate(new Date(year + 1, month, selectedDate));
    } else if (state.calendarView === 'year-select') {
      state.setCalendarDate(new Date(year + 12, month, selectedDate));
    }
  };

  const handleMonthClick = () => {
    state.setCalendarView('month-select');
  };

  const handleYearClick = () => {
    state.setCalendarView('year-select');
  };

  const handleDateClick = (day: number) => {
    state.setCalendarDate(new Date(year, month, day));
  };

  const handleMonthSelect = (selectedMonth: number) => {
    const daysInSelectedMonth = new Date(year, selectedMonth + 1, 0).getDate();
    state.setCalendarDate(new Date(year, selectedMonth, Math.min(selectedDate, daysInSelectedMonth)));
    state.setCalendarView('month');
  };

  const handleYearSelect = (selectedYear: number) => {
    const daysInSelectedMonth = new Date(selectedYear, month + 1, 0).getDate();
    state.setCalendarDate(new Date(selectedYear, month, Math.min(selectedDate, daysInSelectedMonth)));
    state.setCalendarView('month');
  };

  // 生成日历日期数组
  const calendarDays: (number | null)[] = [];
  // 添加上个月的日期（用于填充开头）
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null); // 上个月的日期用 null 表示
  }
  // 添加当月的日期
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  // 填充剩余位置（下个月的日期）
  const remainingDays = 42 - calendarDays.length; // 6行 x 7列 = 42
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push(null);
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Calendar</h1><p className="text-xl text-muted-foreground">A date field component that allows users to enter and edit date.</p></div>
      <ComponentPreview preview={
        <div className="p-3 border rounded-md shadow-sm w-fit bg-card">
          {/* Header with navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={handlePrevMonth}
              className="p-1 hover:bg-muted rounded transition-colors active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMonthClick}
                className="font-medium text-sm hover:bg-muted px-2 py-1 rounded transition-colors"
              >
                {monthNames[month]}
              </button>
              <button
                onClick={handleYearClick}
                className="font-medium text-sm hover:bg-muted px-2 py-1 rounded transition-colors"
              >
                {year}
              </button>
            </div>
            <button 
              onClick={handleNextMonth}
              className="p-1 hover:bg-muted rounded transition-colors active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Month Selector - Only show when in month-select view */}
          {state.calendarView === 'month-select' && (
            <div className="p-2 border rounded-md bg-background animate-in fade-in slide-in-from-top-2">
              <div className="text-xs font-medium text-muted-foreground mb-2">Select Month</div>
              <div className="grid grid-cols-4 gap-2">
                {monthNames.map((monthName, i) => (
                  <button
                    key={i}
                    onClick={() => handleMonthSelect(i)}
                    className={`px-3 py-1.5 text-xs rounded-md hover:bg-accent transition-colors active:scale-95 ${
                      i === month ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    {monthName.substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Year Selector - Only show when in year-select view */}
          {state.calendarView === 'year-select' && (
            <div className="p-2 border rounded-md bg-background animate-in fade-in slide-in-from-top-2">
              <div className="text-xs font-medium text-muted-foreground mb-2">Select Year</div>
              <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {Array.from({ length: 12 }, (_, i) => {
                  const yearOption = year - 6 + i;
                  return (
                    <button
                      key={yearOption}
                      onClick={() => handleYearSelect(yearOption)}
                      className={`px-3 py-1.5 text-xs rounded-md hover:bg-accent transition-colors active:scale-95 ${
                        yearOption === year ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      {yearOption}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Calendar view - Only show when in month view */}
          {state.calendarView === 'month' && (
            <>
              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1 text-sm">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return (
                      <div key={index} className="h-8 w-8 flex items-center justify-center text-muted-foreground/30">
                      </div>
                    );
                  }
                  const isSelected = day === selectedDate;
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(day)}
                      className={`h-8 w-8 rounded-md flex items-center justify-center hover:bg-muted transition-colors active:scale-95 ${
                        isSelected ? 'bg-primary text-primary-foreground hover:bg-primary' : ''
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      } code={`<script setup>
import { Calendar } from '@/components/ui/calendar'
import { ref } from 'vue'

const date = ref(new Date())
</script>

<template>
  <Calendar v-model="date" class="rounded-md border" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/calendar" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Calendar } from '@/components/ui/calendar'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <CodeBlock code={`<script setup>
import { Calendar } from '@/components/ui/calendar'
import { ref } from 'vue'

const date = ref(new Date())
</script>

<template>
  <Calendar v-model="date" />
</template>`} />
        <h3 className="text-lg font-semibold">With Month/Year Navigation</h3>
        <CodeBlock code={`<script setup>
import { Calendar } from '@/components/ui/calendar'
import { ref } from 'vue'

const date = ref(new Date())

const handlePrevMonth = () => {
  const newDate = new Date(date.value)
  newDate.setMonth(newDate.getMonth() - 1)
  date.value = newDate
}

const handleNextMonth = () => {
  const newDate = new Date(date.value)
  newDate.setMonth(newDate.getMonth() + 1)
  date.value = newDate
}

const handleMonthSelect = (month) => {
  const newDate = new Date(date.value)
  newDate.setMonth(month)
  date.value = newDate
}

const handleYearSelect = (year) => {
  const newDate = new Date(date.value)
  newDate.setFullYear(year)
  date.value = newDate
}
</script>

<template>
  <Calendar 
    v-model="date"
    @prev-month="handlePrevMonth"
    @next-month="handleNextMonth"
    @month-select="handleMonthSelect"
    @year-select="handleYearSelect"
  />
</template>`} />
      </div>
      </div>
    </div>
  );
};

