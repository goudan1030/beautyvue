import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { 
  X, ChevronDown, Terminal, AlertCircle, Check, ChevronsUpDown, 
  MoreHorizontal, User, CreditCard, Settings, Keyboard, Users, LogOut, 
  PlusCircle, Github, LifeBuoy, Cloud, CalendarDays, ChevronRight,
  Bold, Italic, Underline, AlignLeft, Search, Command as CommandIcon, ArrowRight,
  Menu, Bell, Mail, MessageSquare, Plus, Trash2, Calendar as CalendarIcon,
  PanelBottom, PanelRight, Moon, Sun, Laptop, Loader2, GripVertical, 
  ChevronLeft, BarChart3, PieChart, Activity, Box, Type, FileCode, Copy, Heart,
  Rocket, Home, Star, CreditCard as BillingIcon, UserPlus, LogOut as LogOutIcon,
  Calculator, Smile, Undo, Redo, Printer, Globe, Mic, Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon,
  ArrowUpDown, Filter, LayoutDashboard, ShoppingCart, Package, List, Clock, Tag, Lock
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

// 导入所有拆分后的组件
import { Intro } from './docs/sections/Intro';
import { Install } from './docs/sections/Install';
import { Accordion } from './docs/sections/Accordion';
import { Alert } from './docs/sections/Alert';
import { AlertDialog } from './docs/sections/AlertDialog';
import { AspectRatio } from './docs/sections/AspectRatio';
import { Avatar } from './docs/sections/Avatar';
import { Badge } from './docs/sections/Badge';
import { Breadcrumb } from './docs/sections/Breadcrumb';
import { Button } from './docs/sections/Button';
import { ButtonGroup } from './docs/sections/ButtonGroup';
import { Calendar } from './docs/sections/Calendar';
import { Card } from './docs/sections/Card';
import { Carousel } from './docs/sections/Carousel';
import { Chart } from './docs/sections/Chart';
import { Checkbox } from './docs/sections/Checkbox';
import { Collapsible } from './docs/sections/Collapsible';
import { Combobox } from './docs/sections/Combobox';
import { Command } from './docs/sections/Command';
import { ContextMenu } from './docs/sections/ContextMenu';
import { DataTable } from './docs/sections/DataTable';
import { DatePicker } from './docs/sections/DatePicker';
import { Dialog } from './docs/sections/Dialog';
import { Drawer } from './docs/sections/Drawer';
import { DropdownMenu } from './docs/sections/DropdownMenu';
import { Empty } from './docs/sections/Empty';
import { Field } from './docs/sections/Field';
import { Form } from './docs/sections/Form';
import { HoverCard } from './docs/sections/HoverCard';
import { Input } from './docs/sections/Input';
import { InputGroup } from './docs/sections/InputGroup';
import { InputOTP } from './docs/sections/InputOTP';
import { Item } from './docs/sections/Item';
import { Kbd } from './docs/sections/Kbd';
import { Label } from './docs/sections/Label';
import { Menubar } from './docs/sections/Menubar';
import { NativeSelect } from './docs/sections/NativeSelect';
import { NavigationMenu } from './docs/sections/NavigationMenu';
import { Pagination } from './docs/sections/Pagination';
import { Popover } from './docs/sections/Popover';
import { Progress } from './docs/sections/Progress';
import { RadioGroup } from './docs/sections/RadioGroup';
import { Resizable } from './docs/sections/Resizable';
import { ScrollArea } from './docs/sections/ScrollArea';
import { Select } from './docs/sections/Select';
import { Separator } from './docs/sections/Separator';
import { Sheet } from './docs/sections/Sheet';
import { Sidebar } from './docs/sections/Sidebar';
import { Skeleton } from './docs/sections/Skeleton';
import { Slider } from './docs/sections/Slider';
import { Sonner } from './docs/sections/Sonner';
import { Spinner } from './docs/sections/Spinner';
import { Switch } from './docs/sections/Switch';
import { Table } from './docs/sections/Table';
import { Tabs } from './docs/sections/Tabs';
import { Textarea } from './docs/sections/Textarea';
import { Toast } from './docs/sections/Toast';
import { Toggle } from './docs/sections/Toggle';
import { ToggleGroup } from './docs/sections/ToggleGroup';
import { Tooltip } from './docs/sections/Tooltip';
import { Typography } from './docs/sections/Typography';

type DocSection = 
  | 'intro' | 'install' 
  | 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar' | 'badge' | 'breadcrumb' | 'button' | 'button-group'
  | 'calendar' | 'card' | 'carousel' | 'chart' | 'checkbox' | 'collapsible' | 'combobox' | 'command' | 'context-menu' 
  | 'data-table' | 'date-picker' | 'dialog' | 'drawer' | 'dropdown-menu' | 'empty'
  | 'field' | 'form' | 'hover-card' | 'input' | 'input-group' | 'input-otp' | 'item' | 'kbd' | 'label' | 'menubar' 
  | 'native-select' | 'navigation-menu' | 'pagination' | 'popover' | 'progress' | 'radio-group' | 'resizable' 
  | 'scroll-area' | 'select' | 'separator' | 'sheet' | 'sidebar' | 'skeleton' | 'slider' | 'sonner' | 'spinner' | 'switch' 
  | 'table' | 'tabs' | 'textarea' | 'toast' | 'toggle' | 'toggle-group' | 'tooltip' | 'typography';

interface DocsViewProps {
  initialSection?: DocSection;
  language?: Language;
}

// Styled Code Block for Usage Examples
const CodeBlock = ({ code }: { code: string }) => {
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

// Reusable Code/Preview Block
const ComponentPreview = ({ 
  preview, 
  code 
}: { 
  preview: React.ReactNode, 
  code: string 
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm my-6 scroll-mt-20" id="preview">
      <div className="flex items-center justify-between border-b p-3 bg-muted/20">
         <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Code
            </button>
         </div>
      </div>
      {activeTab === 'preview' ? (
        <div className="p-10 flex min-h-[350px] w-full justify-center items-center bg-background border-b rounded-b-xl overflow-hidden relative">
           {preview}
        </div>
      ) : (
        <div className="relative bg-zinc-950 rounded-b-xl overflow-hidden">
           <button
            onClick={onCopy}
            className="absolute top-4 right-4 p-2 rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 transition-all"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
           <div className="p-6 overflow-x-auto">
             <pre className="text-sm font-mono text-zinc-50 leading-relaxed">
               {code}
             </pre>
           </div>
        </div>
      )}
    </div>
  );
};

export const DocsView: React.FC<DocsViewProps> = ({ initialSection = 'intro', language = 'en' }) => {
  // 直接在初始化时从 URL 读取状态
  const getInitialSectionFromURL = (): DocSection => {
    if (typeof window !== 'undefined') {
      // 先从 search 参数读取，如果没有则从 hash 中读取（处理 #docs?Components=avatar 这种情况）
      let searchString = window.location.search;
      if (!searchString && window.location.hash.includes('?')) {
        // hash 中包含 query 参数，如 #docs?Components=avatar
        const hashParts = window.location.hash.split('?');
        if (hashParts.length > 1) {
          searchString = '?' + hashParts.slice(1).join('?');
        }
      }
      const params = new URLSearchParams(searchString);
      const section = params.get('Components');
      const validSections: DocSection[] = ['intro', 'install', 'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button', 'button-group',
        'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 
        'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty',
        'field', 'form', 'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'menubar', 
        'native-select', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group', 'resizable', 
        'scroll-area', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'spinner', 'switch', 
        'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typography'];
      if (section && validSections.includes(section as DocSection)) {
        return section as DocSection;
      }
    }
    return initialSection as DocSection;
  };

  const [activeSection, setActiveSection] = useState<DocSection>(getInitialSectionFromURL());
  const t = translations[language]?.docs || translations['en'].docs;
  
  // 使用 useLayoutEffect 在 DOM 更新前同步读取 URL，确保状态正确
  useLayoutEffect(() => {
    // 先从 search 参数读取，如果没有则从 hash 中读取
    let searchString = window.location.search;
    if (!searchString && window.location.hash.includes('?')) {
      const hashParts = window.location.hash.split('?');
      if (hashParts.length > 1) {
        searchString = '?' + hashParts.slice(1).join('?');
      }
    }
    const params = new URLSearchParams(searchString);
    const section = params.get('Components');
    const validSections: DocSection[] = ['intro', 'install', 'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button', 'button-group',
      'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 
      'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty',
      'field', 'form', 'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'menubar', 
      'native-select', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group', 'resizable', 
      'scroll-area', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'spinner', 'switch', 
      'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typography'];
    if (section && validSections.includes(section as DocSection)) {
      setActiveSection(section as DocSection);
    }
  }, []);
  
  // Interactive State (simplified for brevity in this large file)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [accordionValue, setAccordionValue] = useState<string | null>("item-1");
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [activeTab, setActiveTab] = useState("account");
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("default");
  const [sliderValue, setSliderValue] = useState(50);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showSimpleToast, setShowSimpleToast] = useState(false);
  const [progressValue, setProgressValue] = useState(13);
  const [selectValue, setSelectValue] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toggleGroupValue, setToggleGroupValue] = useState<string[]>(['bold']);
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerDate, setDatePickerDate] = useState<Date>();
  const [datePickerViewDate, setDatePickerViewDate] = useState<Date>(new Date());
  const [datePickerMonthSelectOpen, setDatePickerMonthSelectOpen] = useState(false);
  const [datePickerYearSelectOpen, setDatePickerYearSelectOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState<Date>(new Date(2024, 0, 14)); // January 14, 2024
  const [calendarView, setCalendarView] = useState<'month' | 'month-select' | 'year-select'>('month');
  const [comboboxOpen, setComboboxOpen] = useState(false);
  const [chartHoveredBar, setChartHoveredBar] = useState<number | null>(null);
  const [chartViewType, setChartViewType] = useState<'desktop' | 'mobile'>('desktop');
  const [comboboxValue, setComboboxValue] = useState("");
  const [breadcrumbHoveredItem, setBreadcrumbHoveredItem] = useState<string | null>(null);
  const [isButtonGroupDropdownOpen, setIsButtonGroupDropdownOpen] = useState(false);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);
  const [buttonGroupDropdownPosition, setButtonGroupDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const buttonGroupDropdownRef = useRef<HTMLDivElement>(null);
  const buttonGroupTriggerRef = useRef<HTMLButtonElement>(null);
  const [dataTableSelectedRows, setDataTableSelectedRows] = useState<string[]>([]);
  const [dataTableFilter, setDataTableFilter] = useState("");
  const [dataTableSortColumn, setDataTableSortColumn] = useState<string | null>(null);
  const [dataTableSortDirection, setDataTableSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [dataTableColumnsDropdownOpen, setDataTableColumnsDropdownOpen] = useState(false);
  const [dataTableRowMenuOpen, setDataTableRowMenuOpen] = useState<string | null>(null);
  
  // 创建 state 对象，符合 DocSectionState 接口
  const docSectionState = {
    isDialogOpen,
    setIsDialogOpen,
    isAlertDialogOpen,
    setIsAlertDialogOpen,
    accordionValue,
    setAccordionValue,
    isChecked,
    setIsChecked,
    isChecked2,
    setIsChecked2,
    isChecked3,
    setIsChecked3,
    isChecked4,
    setIsChecked4,
    isSwitchOn,
    setIsSwitchOn,
    activeTab,
    setActiveTab,
    isCollapsibleOpen,
    setIsCollapsibleOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    isContextMenuOpen,
    setIsContextMenuOpen,
    contextMenuPosition,
    setContextMenuPosition,
    isHoverCardOpen,
    setIsHoverCardOpen,
    isPopoverOpen,
    setIsPopoverOpen,
    radioValue,
    setRadioValue,
    sliderValue,
    setSliderValue,
    isSheetOpen,
    setIsSheetOpen,
    isDrawerOpen,
    setIsDrawerOpen,
    toggleState,
    setToggleState,
    showToast,
    setShowToast,
    showSimpleToast,
    setShowSimpleToast,
    progressValue,
    setProgressValue,
    selectValue,
    setSelectValue,
    isSelectOpen,
    setIsSelectOpen,
    currentSlide,
    setCurrentSlide,
    toggleGroupValue,
    setToggleGroupValue,
    otpValue,
    setOtpValue,
    datePickerOpen,
    setDatePickerOpen,
    datePickerDate,
    setDatePickerDate,
    datePickerViewDate,
    setDatePickerViewDate,
    datePickerMonthSelectOpen,
    setDatePickerMonthSelectOpen,
    datePickerYearSelectOpen,
    setDatePickerYearSelectOpen,
    calendarDate,
    setCalendarDate,
    calendarView,
    setCalendarView,
    comboboxOpen,
    setComboboxOpen,
    comboboxValue,
    setComboboxValue,
    chartHoveredBar,
    setChartHoveredBar,
    chartViewType,
    setChartViewType,
    breadcrumbHoveredItem,
    setBreadcrumbHoveredItem,
    isButtonGroupDropdownOpen,
    setIsButtonGroupDropdownOpen,
    clickedButtonId,
    setClickedButtonId,
    buttonGroupDropdownPosition,
    setButtonGroupDropdownPosition,
    buttonGroupDropdownRef,
    buttonGroupTriggerRef,
    dataTableSelectedRows,
    setDataTableSelectedRows,
    dataTableFilter,
    setDataTableFilter,
    dataTableSortColumn,
    setDataTableSortColumn,
    dataTableSortDirection,
    setDataTableSortDirection,
    dataTableColumnsDropdownOpen,
    setDataTableColumnsDropdownOpen,
    dataTableRowMenuOpen,
    setDataTableRowMenuOpen,
  };
  
  // 点击外部关闭按钮组下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonGroupDropdownRef.current && !buttonGroupDropdownRef.current.contains(event.target as Node) &&
          buttonGroupTriggerRef.current && !buttonGroupTriggerRef.current.contains(event.target as Node)) {
        setIsButtonGroupDropdownOpen(false);
        setButtonGroupDropdownPosition(null);
      }
    };

    if (isButtonGroupDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isButtonGroupDropdownOpen]);
  
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];
  
  const fruits = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "blueberry", label: "Blueberry" },
      { value: "grapes", label: "Grapes" },
      { value: "pineapple", label: "Pineapple" },
  ];

  // 监听 URL 参数变化（浏览器前进/后退）
  useEffect(() => {
    const handlePopState = () => {
      // 先从 search 参数读取，如果没有则从 hash 中读取
      let searchString = window.location.search;
      if (!searchString && window.location.hash.includes('?')) {
        const hashParts = window.location.hash.split('?');
        if (hashParts.length > 1) {
          searchString = '?' + hashParts.slice(1).join('?');
        }
      }
      const params = new URLSearchParams(searchString);
      const section = params.get('section');
      const validSections: DocSection[] = ['intro', 'install', 'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button', 'button-group',
        'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 
        'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty',
        'field', 'form', 'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'menubar', 
        'native-select', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group', 'resizable', 
        'scroll-area', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'spinner', 'switch', 
        'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typography'];
      if (section && validSections.includes(section as DocSection)) {
        setActiveSection(section as DocSection);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 当 activeSection 改变时更新 URL（避免初始化时触发）
  useEffect(() => {
    // 只在 activeSection 确实改变时更新 URL，避免初始化时的循环
    // 先从 search 参数读取，如果没有则从 hash 中读取
    let searchString = window.location.search;
    let hashPart = window.location.hash.split('?')[0];
    if (!searchString && window.location.hash.includes('?')) {
      const hashParts = window.location.hash.split('?');
      if (hashParts.length > 1) {
        hashPart = hashParts[0];
        searchString = '?' + hashParts.slice(1).join('?');
      }
    }
    const params = new URLSearchParams(searchString);
    const currentSection = params.get('Components');
    if (activeSection && currentSection !== activeSection) {
      params.set('Components', activeSection);
      // 将参数放在 hash 中，格式如 #docs?Components=avatar
      const newUrl = `${window.location.pathname}${hashPart}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [activeSection]);

  useEffect(() => {
    if (showToast || showSimpleToast) {
      const timer = setTimeout(() => { setShowToast(false); setShowSimpleToast(false); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast, showSimpleToast]);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const getTocItems = () => {
    if (activeSection === 'intro') {
       return [
         { id: 'why', label: t.intro.why },
         { id: 'credits', label: t.intro.credits },
         { id: 'tech', label: t.intro.techStack },
         { id: 'faq', label: t.intro.faq },
       ]
    }
    if (activeSection === 'install') {
       return [
         { id: 'step-1', label: t.install.step1 },
         { id: 'step-2', label: t.install.step2 },
         { id: 'step-3', label: t.install.step3 },
         { id: 'step-4', label: t.install.step4 },
       ]
    }
    return [
       { id: 'preview', label: 'Preview' },
       { id: 'installation', label: 'Installation' },
       { id: 'usage', label: 'Usage' },
    ];
  };

  const tocItems = getTocItems();

  const renderComponentSection = (section: DocSection) => {
    const title = section.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <p className="text-xl text-muted-foreground">Documentation for the {title} component.</p>
         </div>
         <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
               <div className="p-4 rounded-full bg-muted"><FileCode className="h-8 w-8 text-muted-foreground" /></div>
               <div className="space-y-2"><h3 className="font-semibold text-lg">Coming Soon</h3><p className="text-sm text-muted-foreground max-w-sm mx-auto">The documentation and code for this component are currently being prepared.</p></div>
            </div>
         </div>
      </div>
    );
  };
  
  const renderContent = () => {
    switch (activeSection) {
      case 'intro': return <Intro language={language} />;
      case 'install': return <Install language={language} />;
      case 'accordion': return <Accordion state={docSectionState} />;
      case 'alert': return <Alert />;
      case 'alert-dialog': return <AlertDialog state={docSectionState} />;
      case 'aspect-ratio': return <AspectRatio />;
      case 'avatar': return <Avatar />;
      case 'badge': return <Badge />;
      case 'breadcrumb': return <Breadcrumb state={docSectionState} />;
      case 'button': return <Button state={docSectionState} />;
      case 'button-group': return <ButtonGroup state={docSectionState} />;
      case 'calendar': return <Calendar state={docSectionState} />;
      case 'card': return <Card />;
      case 'carousel': return <Carousel state={docSectionState} />;
      case 'chart': return <Chart state={docSectionState} />;
      case 'checkbox': return <Checkbox state={docSectionState} />;
      case 'collapsible': return <Collapsible state={docSectionState} />;
      case 'combobox': return <Combobox state={docSectionState} />;
      case 'command': return <Command />;
      case 'context-menu': return <ContextMenu state={docSectionState} />;
      case 'data-table': return <DataTable state={docSectionState} />;
      case 'date-picker': return <DatePicker state={docSectionState} />;
      case 'dialog': return <Dialog state={docSectionState} />;
      case 'drawer': return <Drawer state={docSectionState} />;
      case 'dropdown-menu': return <DropdownMenu state={docSectionState} />;
      case 'empty': return <Empty />;
      case 'field': return <Field />;
      case 'form': return <Form />;
      case 'hover-card': return <HoverCard />;
      case 'input': return <Input />;
      case 'input-group': return <InputGroup />;
      case 'input-otp': return <InputOTP state={docSectionState} />;
      case 'item': return <Item />;
      case 'kbd': return <Kbd />;
      case 'label': return <Label />;
      case 'menubar': return <Menubar />;
      case 'native-select': return <NativeSelect />;
      case 'navigation-menu': return <NavigationMenu />;
      case 'pagination': return <Pagination />;
      case 'popover': return <Popover state={docSectionState} />;
      case 'progress': return <Progress state={docSectionState} />;
      case 'radio-group': return <RadioGroup state={docSectionState} />;
      case 'resizable': return <Resizable />;
      case 'scroll-area': return <ScrollArea />;
      case 'select': return <Select state={docSectionState} />;
      case 'separator': return <Separator />;
      case 'sheet': return <Sheet state={docSectionState} />;
      case 'sidebar': return <Sidebar />;
      case 'skeleton': return <Skeleton />;
      case 'slider': return <Slider state={docSectionState} />;
      case 'sonner': return <Sonner state={docSectionState} />;
      case 'spinner': return <Spinner />;
      case 'switch': return <Switch state={docSectionState} />;
      case 'table': return <Table />;
      case 'tabs': return <Tabs state={docSectionState} />;
      case 'textarea': return <Textarea />;
      case 'toast': return <Toast state={docSectionState} />;
      case 'toggle': return <Toggle state={docSectionState} />;
      case 'toggle-group': return <ToggleGroup state={docSectionState} />;
      case 'tooltip': return <Tooltip />;
      case 'typography': return <Typography />;
      default: return renderComponentSection(activeSection);
    }
  };

  // --- COMPONENT RENDERERS ---

  const renderAccordion = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Accordion</h1><p className="text-xl text-muted-foreground">A vertically stacked set of interactive headings that each reveal a section of content.</p></div>
        <ComponentPreview preview={<div className="w-full max-w-sm">{['Is it accessible?', 'Is it styled?', 'Is it animated?'].map((question, i) => (<div key={i} className="border-b"><button onClick={() => setAccordionValue(accordionValue === `item-${i+1}` ? null : `item-${i+1}`)} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left">{question}<ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${accordionValue === `item-${i+1}` ? "rotate-180" : ""}`} /></button><div className={`overflow-hidden text-sm transition-all duration-300 ${accordionValue === `item-${i+1}` ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>Yes. It adheres to WAI-ARIA design patterns.</div></div>))}</div>} code={`<script setup>\nimport { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@beautyvue/core'\n</script>\n\n<template>\n<Accordion type="single" collapsible>\n<AccordionItem value="item-1">\n  <AccordionTrigger>Is it accessible?</AccordionTrigger>\n  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n</AccordionItem>\n</Accordion>\n</template>`} />
        <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/accordion" /></div>
        <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'`} /><CodeBlock code={`<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n  </AccordionItem>\n</Accordion>`} /></div>
      </div>
  );

  const renderAlert = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Alert</h1><p className="text-xl text-muted-foreground">Displays a callout for user attention.</p></div>
        
        <ComponentPreview preview={
          <div className="w-full max-w-lg space-y-4">
            <div className="relative w-full rounded-lg border px-4 py-3 text-sm flex gap-3 items-start bg-background text-foreground">
              <Rocket className="h-4 w-4 mt-0.5" />
              <div>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
                <div className="text-sm opacity-90">You can add components to your app using the cli.</div>
              </div>
            </div>
          </div>
        } code={`<script setup>\nimport { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'\nimport { Rocket } from 'lucide-vue-next'\n</script>\n\n<template>\n  <Alert>\n    <Rocket class="h-4 w-4" />\n    <AlertTitle>Heads up!</AlertTitle>\n    <AlertDescription>\n      You can add components to your app using the cli.\n    </AlertDescription>\n  </Alert>\n</template>`} />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Destructive</h3>
          <p className="text-muted-foreground">Used to indicate a critical error or warning.</p>
          <ComponentPreview preview={
            <div className="w-full max-w-lg space-y-4">
              <div className="relative w-full rounded-lg border border-destructive/50 px-4 py-3 text-sm flex gap-3 items-start text-destructive dark:border-destructive bg-background">
                <AlertCircle className="h-4 w-4 mt-0.5" />
                <div>
                  <h5 className="mb-1 font-medium leading-none tracking-tight">Error</h5>
                  <div className="text-sm opacity-90">Your session has expired. Please log in again.</div>
                </div>
              </div>
            </div>
          } code={`<script setup>\nimport { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'\nimport { AlertCircle } from 'lucide-vue-next'\n</script>\n\n<template>\n  <Alert variant="destructive">\n    <AlertCircle class="h-4 w-4" />\n    <AlertTitle>Error</AlertTitle>\n    <AlertDescription>\n      Your session has expired. Please log in again.\n    </AlertDescription>\n  </Alert>\n</template>`} />
        </div>

        <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/alert" /></div>
        <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"`} /><CodeBlock code={`<Alert>\n  <Rocket class="h-4 w-4" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add components to your app using the cli.</AlertDescription>\n</Alert>`} /></div>
      </div>
  );
  
  const renderAlertDialog = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Alert Dialog</h1><p className="text-xl text-muted-foreground">A modal dialog that interrupts the user.</p></div>
        <ComponentPreview preview={
          <div className="flex items-center justify-center w-full h-full">
            <button onClick={() => setIsAlertDialogOpen(true)} className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors">Show Alert Dialog</button>
            {isAlertDialogOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center">
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsAlertDialogOpen(false)} />
                {/* Dialog Content */}
                <div className="relative z-[101] grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-in fade-in zoom-in-95 duration-200 mx-4">
                  <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
                    <p className="text-sm text-muted-foreground">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                  </div>
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button 
                      className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                      onClick={() => setIsAlertDialogOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
                      onClick={() => setIsAlertDialogOpen(false)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        } code={`<script setup>\nimport { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'\n</script>\n\n<template>\n  <AlertDialog>\n    <AlertDialogTrigger>Open</AlertDialogTrigger>\n    <AlertDialogContent>\n      <AlertDialogHeader>\n        <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n      </AlertDialogHeader>\n      <AlertDialogFooter>\n        <AlertDialogCancel>Cancel</AlertDialogCancel>\n        <AlertDialogAction>Continue</AlertDialogAction>\n      </AlertDialogFooter>\n    </AlertDialogContent>\n  </AlertDialog>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/alert-dialog" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'`} /><CodeBlock code={`<AlertDialog>\n  <AlertDialogTrigger>Open</AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Continue</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`} /></div>
      </div>
  );
  
  const renderAspectRatio = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Aspect Ratio</h1><p className="text-xl text-muted-foreground">Displays content within a desired ratio.</p></div>
        <ComponentPreview preview={<div className="w-[450px] overflow-hidden rounded-md border shadow-sm"><div style={{ paddingBottom: '56.25%' }} className="relative w-full bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" className="absolute inset-0 h-full w-full object-cover"/></div></div>} code={`<script setup>import { AspectRatio } from '@/components/ui/aspect-ratio'</script>\n\n<template>\n  <div class="w-[450px]">\n    <AspectRatio :ratio="16 / 9">\n      <img src="..." alt="Image" class="rounded-md object-cover" />\n    </AspectRatio>\n  </div>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/aspect-ratio" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { AspectRatio } from '@/components/ui/aspect-ratio'`} /><CodeBlock code={`<AspectRatio :ratio="16 / 9">\n  <img src="..." alt="Image" class="rounded-md object-cover" />\n</AspectRatio>`} /></div>
      </div>
  );
  
  const renderAvatar = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Avatar</h1><p className="text-xl text-muted-foreground">An image element with a fallback.</p></div>
        <ComponentPreview preview={
          <div className="flex flex-col gap-6 items-center">
            {/* Circular Avatars */}
            <div className="flex gap-4 items-center">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
                <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user" />
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted flex items-center justify-center border border-border">
                <span className="font-medium text-muted-foreground text-sm">JD</span>
              </div>
            </div>
            {/* Rounded Rectangle Avatars */}
            <div className="flex gap-4 items-center">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border">
                <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user" />
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md bg-muted flex items-center justify-center border border-border">
                <span className="font-medium text-muted-foreground text-sm">JD</span>
              </div>
            </div>
            {/* Avatar Group - Overlapping */}
            <div className="flex items-center -space-x-2">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
                <img className="aspect-square h-full w-full object-cover" src="https://github.com/radix-vue.png" alt="@user1" />
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-muted flex items-center justify-center">
                <span className="font-medium text-muted-foreground text-sm">JD</span>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-primary text-sm">AB</span>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                <span className="font-medium text-secondary-foreground text-sm">+3</span>
              </div>
            </div>
          </div>
        } code={`<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <!-- Circular Avatar -->
  <Avatar>
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <!-- Rounded Rectangle Avatar -->
  <Avatar class="rounded-md">
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>

  <!-- Avatar Group -->
  <div class="flex items-center -space-x-2">
    <Avatar class="border-2 border-background">
      <AvatarImage src="https://github.com/user1.png" alt="@user1" />
      <AvatarFallback>U1</AvatarFallback>
    </Avatar>
    <Avatar class="border-2 border-background">
      <AvatarImage src="https://github.com/user2.png" alt="@user2" />
      <AvatarFallback>U2</AvatarFallback>
    </Avatar>
    <Avatar class="border-2 border-background">
      <AvatarFallback>+3</AvatarFallback>
    </Avatar>
  </div>
</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/avatar" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'`} />
         <div className="space-y-3 mt-4">
           <h3 className="text-lg font-semibold">Circular Avatar</h3>
           <CodeBlock code={`<Avatar>
  <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`} />
           <h3 className="text-lg font-semibold">Rounded Rectangle Avatar</h3>
           <CodeBlock code={`<Avatar class="rounded-md">
  <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`} />
           <h3 className="text-lg font-semibold">Avatar Group (Overlapping)</h3>
           <CodeBlock code={`<div class="flex items-center -space-x-2">
  <Avatar class="border-2 border-background">
    <AvatarImage src="https://github.com/user1.png" alt="@user1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar class="border-2 border-background">
    <AvatarImage src="https://github.com/user2.png" alt="@user2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar class="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`} />
         </div>
         </div>
      </div>
  );

  const renderBadge = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Badge</h1><p className="text-xl text-muted-foreground">Displays a badge.</p></div>
        <ComponentPreview preview={
          <div className="flex flex-col gap-6 items-center">
            {/* Variants Row 1 */}
            <div className="flex gap-4 flex-wrap items-center">
              <div className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Badge</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Secondary</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">Destructive</div>
              <div className="inline-flex items-center rounded-full border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground">Outline</div>
            </div>
            {/* Variants Row 2 - With Icons and Circular */}
            <div className="flex gap-4 flex-wrap items-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                <Check className="h-3 w-3" />
                Verified
              </div>
              <div className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary w-6 h-6 text-xs font-semibold text-primary-foreground">8</div>
              <div className="inline-flex items-center justify-center rounded-full border border-transparent bg-destructive w-6 h-6 text-xs font-semibold text-destructive-foreground">99</div>
              <div className="inline-flex items-center justify-center rounded-full border border-input bg-background w-6 h-6 text-xs font-semibold text-foreground">20+</div>
            </div>
          </div>
        } code={`<script setup>
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-vue-next'
</script>

<template>
  <!-- Default Variants -->
  <Badge>Badge</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>

  <!-- With Icon -->
  <Badge class="bg-blue-600 text-white">
    <Check class="h-3 w-3 mr-1" />
    Verified
  </Badge>

  <!-- Circular Badges -->
  <Badge class="w-6 h-6 p-0 flex items-center justify-center">8</Badge>
  <Badge variant="destructive" class="w-6 h-6 p-0 flex items-center justify-center">99</Badge>
  <Badge variant="outline" class="w-6 h-6 p-0 flex items-center justify-center">20+</Badge>
</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/badge" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Badge } from '@/components/ui/badge'`} />
         <div className="space-y-3 mt-4">
           <h3 className="text-lg font-semibold">Variants</h3>
           <CodeBlock code={`<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`} />
           <h3 className="text-lg font-semibold">With Icon</h3>
           <CodeBlock code={`<script setup>
import { Check } from 'lucide-vue-next'
</script>

<template>
  <Badge class="bg-blue-600 text-white">
    <Check class="h-3 w-3 mr-1" />
    Verified
  </Badge>
</template>`} />
           <h3 className="text-lg font-semibold">Circular Badges</h3>
           <CodeBlock code={`<Badge class="w-6 h-6 p-0 flex items-center justify-center">8</Badge>
<Badge variant="destructive" class="w-6 h-6 p-0 flex items-center justify-center">99</Badge>
<Badge variant="outline" class="w-6 h-6 p-0 flex items-center justify-center">20+</Badge>`} />
         </div>
         </div>
      </div>
  );

  const renderBreadcrumb = () => {
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
                onMouseEnter={() => setBreadcrumbHoveredItem('home-2')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'home-2' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
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
                onMouseEnter={() => setBreadcrumbHoveredItem('home-3')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'home-3' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              <button
                onClick={() => handleBreadcrumbClick('/components')}
                onMouseEnter={() => setBreadcrumbHoveredItem('components-3')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'components-3' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
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
                onMouseEnter={() => setBreadcrumbHoveredItem('home-multi')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'home-multi' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              <button
                onClick={() => handleBreadcrumbClick('/components')}
                onMouseEnter={() => setBreadcrumbHoveredItem('ellipsis')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`px-1.5 py-0.5 rounded transition-colors ${breadcrumbHoveredItem === 'ellipsis' ? 'bg-muted' : ''} hover:bg-muted cursor-pointer`}
                title="View more"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </button>
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              <button
                onClick={() => handleBreadcrumbClick('/components/ui/deep')}
                onMouseEnter={() => setBreadcrumbHoveredItem('deep')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'deep' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
              >
                Deep
              </button>
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              <button
                onClick={() => handleBreadcrumbClick('/components/ui/deep/level')}
                onMouseEnter={() => setBreadcrumbHoveredItem('level')}
                onMouseLeave={() => setBreadcrumbHoveredItem(null)}
                className={`transition-colors ${breadcrumbHoveredItem === 'level' ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground cursor-pointer`}
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

  const renderButton = () => {
    const handleButtonClick = (id: string) => {
      setClickedButtonId(id);
      setTimeout(() => setClickedButtonId(null), 150);
    };

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1><p className="text-xl text-muted-foreground">Displays a button.</p></div>
        <ComponentPreview preview={
          <div className="flex flex-col gap-6 items-center">
            {/* Basic Variants */}
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleButtonClick('primary')}
                className={`bg-primary text-primary-foreground h-10 px-4 rounded-md text-sm font-medium transition-all shadow hover:bg-primary/90 hover:shadow-md active:scale-95 active:shadow-sm ${clickedButtonId === 'primary' ? 'scale-95' : ''}`}
              >
                Primary
              </button>
              <button
                onClick={() => handleButtonClick('secondary')}
                className={`bg-secondary text-secondary-foreground h-10 px-4 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-secondary/80 active:scale-95 ${clickedButtonId === 'secondary' ? 'scale-95' : ''}`}
              >
                Secondary
              </button>
            </div>
            {/* Outline and Ghost */}
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleButtonClick('outline')}
                className={`border border-input bg-transparent h-10 px-4 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-95 active:bg-accent/80 ${clickedButtonId === 'outline' ? 'scale-95' : ''}`}
              >
                Outline
              </button>
              <button
                onClick={() => handleButtonClick('ghost')}
                className={`h-10 px-4 rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground active:scale-95 active:bg-accent/80 ${clickedButtonId === 'ghost' ? 'scale-95' : ''}`}
              >
                Ghost
              </button>
            </div>
          </div>
        } code={`<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <!-- Primary Button -->
  <Button 
    variant="primary"
    class="transition-all active:scale-95"
    @click="handleClick"
  >
    Primary
  </Button>

  <!-- Secondary Button -->
  <Button 
    variant="secondary"
    class="transition-all active:scale-95"
  >
    Secondary
  </Button>

  <!-- Outline Button -->
  <Button 
    variant="outline"
    class="transition-all active:scale-95"
  >
    Outline
  </Button>

  <!-- Ghost Button -->
  <Button 
    variant="ghost"
    class="transition-all active:scale-95"
  >
    Ghost
  </Button>
</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/button" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Button } from '@/components/ui/button'`} />
         <div className="space-y-3 mt-4">
           <h3 className="text-lg font-semibold">Basic Usage</h3>
           <CodeBlock code={`<Button>Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`} />
           <h3 className="text-lg font-semibold">With Click and Press Effects</h3>
           <CodeBlock code={`<Button 
  class="transition-all active:scale-95 active:shadow-sm"
  @click="handleClick"
>
  Click Me
</Button>`} />
         </div>
         </div>
      </div>
  );
  };

  const renderCard = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1><p className="text-xl text-muted-foreground">Displays a card with header, content, and footer.</p></div>
        <ComponentPreview preview={
          <div className="rounded-xl border bg-card text-card-foreground shadow w-[400px] p-6">
            <div className="flex items-start justify-between mb-6 gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold mb-1">Login to your account</h3>
                <p className="text-sm text-muted-foreground">Enter your email below to login to your account</p>
              </div>
              <button className="text-sm font-medium hover:underline whitespace-nowrap flex-shrink-0">Sign Up</button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <button className="text-sm text-muted-foreground hover:underline">Forgot your password?</button>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <button className="w-full h-9 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors active:scale-95">
                Login
              </button>
              <button className="w-full h-9 rounded-md border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground transition-colors active:scale-95 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        } code={`<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card class="w-[400px]">
    <CardHeader>
      <div class="flex items-start justify-between">
        <div>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </div>
        <Button variant="ghost" class="text-sm">Sign Up</Button>
      </div>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Label for="password">Password</Label>
          <Button variant="link" class="text-sm p-0 h-auto">Forgot your password?</Button>
        </div>
        <Input id="password" type="password" />
      </div>
      <Button class="w-full">Login</Button>
      <Button variant="outline" class="w-full">
        <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Login with Google
      </Button>
    </CardContent>
  </Card>
</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/card" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'`} /><CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`} /></div>
      </div>
  );

  const renderCheckbox = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1><p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p></div>
        <ComponentPreview preview={<div className="flex items-center space-x-2"><div className={`h-4 w-4 rounded-sm border border-primary ${isChecked ? 'bg-primary' : ''} flex items-center justify-center`}><Check className="h-3 w-3 text-white" /></div><label>Accept terms</label></div>} code={`<script setup>import { Checkbox } from '@/components/ui/checkbox'</script>\n\n<template>\n  <div class="flex items-center space-x-2">\n    <Checkbox id="terms" />\n    <label for="terms">Accept terms and conditions</label>\n  </div>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/checkbox" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Checkbox } from '@/components/ui/checkbox'`} /><CodeBlock code={`<Checkbox id="terms" />`} /></div>
      </div>
  );

  const renderCollapsible = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Collapsible</h1><p className="text-xl text-muted-foreground">An interactive component which expands/collapses a panel.</p></div>
        <ComponentPreview preview={<div><div className="flex justify-between w-[350px] px-4"><h4>@beautyvue/core</h4><ChevronsUpDown className="h-4 w-4" /></div></div>} code={`<script setup>\nimport { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'\n</script>\n\n<template>\n  <Collapsible>\n    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>\n    <CollapsibleContent>\n      Yes. Free to use for personal and commercial projects. No attribution required.\n    </CollapsibleContent>\n  </Collapsible>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/collapsible" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'`} /><CodeBlock code={`<Collapsible>\n  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>\n  <CollapsibleContent>\n    Yes. Free to use for personal and commercial projects. No attribution required.\n  </CollapsibleContent>\n</Collapsible>`} /></div>
      </div>
  );

  const renderCombobox = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Combobox</h1><p className="text-xl text-muted-foreground">Autocomplete input and command palette with a list of suggestions.</p></div>
        <ComponentPreview preview={<div className="relative"><button role="combobox" aria-expanded={comboboxOpen} onClick={() => setComboboxOpen(!comboboxOpen)} className="w-[200px] justify-between flex items-center border border-input bg-background px-3 py-2 rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">{comboboxValue ? frameworks.find((framework) => framework.value === comboboxValue)?.label : "Select framework..."}<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /></button>{comboboxOpen && (<div className="absolute top-full mt-2 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in zoom-in-95 z-50"><div className="p-1"><div className="flex items-center px-2 py-2 border-b mb-1"><Search className="mr-2 h-4 w-4 shrink-0 opacity-50" /><input placeholder="Search..." className="flex h-5 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" /></div>{frameworks.map((framework) => (<div key={framework.value} onClick={() => { setComboboxValue(framework.value === comboboxValue ? "" : framework.value); setComboboxOpen(false); }} className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}><Check className={`mr-2 h-4 w-4 ${comboboxValue === framework.value ? "opacity-100" : "opacity-0"}`} />{framework.label}</div>))}</div></div>)}</div>} code={`<script setup>\nimport { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'\nimport { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'\n</script>\n\n<template>\n  <Popover v-model:open="open">\n    <PopoverTrigger as-child>\n      <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">\n        {{ value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..." }}\n        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />\n      </Button>\n    </PopoverTrigger>\n    <PopoverContent class="w-[200px] p-0">\n      <Command>\n        <CommandInput placeholder="Search framework..." />\n        <CommandEmpty>No framework found.</CommandEmpty>\n        <CommandList>\n          <CommandGroup>\n            <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value" @select="onSelect">\n              <Check :class="cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')" />\n              {{ framework.label }}\n            </CommandItem>\n          </CommandGroup>\n        </CommandList>\n      </Command>\n    </PopoverContent>\n  </Popover>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/combobox" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Command, CommandInput, CommandItem } from '@/components/ui/command'`} /><CodeBlock code={`<Command>\n  <CommandInput placeholder="Search..." />\n  <CommandList>\n    <CommandItem>Item 1</CommandItem>\n  </CommandList>\n</Command>`} /></div>
      </div>
  );
  
  const renderCommand = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Command</h1><p className="text-xl text-muted-foreground">Fast, composable, unstyled command menu for Vue.</p></div>
        <ComponentPreview preview={<div className="rounded-xl border bg-card text-card-foreground shadow-md w-[450px]"><div className="flex items-center border-b px-3"><Search className="mr-2 h-4 w-4 shrink-0 opacity-50" /><input className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type a command or search..." /></div><div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2"><div className="overflow-hidden px-1 py-1"><div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Suggestions</div><div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"><CalendarIcon className="mr-2 h-4 w-4" /> <span>Calendar</span></div></div></div></div>} code={`<script setup>\nimport { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'\n</script>\n\n<template>\n  <Command class="rounded-lg border shadow-md">\n    <CommandInput placeholder="Type a command or search..." />\n    <CommandList>\n      <CommandEmpty>No results found.</CommandEmpty>\n      <CommandGroup heading="Suggestions">\n        <CommandItem>\n          <Calendar class="mr-2 h-4 w-4" />\n          <span>Calendar</span>\n        </CommandItem>\n      </CommandGroup>\n    </CommandList>\n  </Command>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/command" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Command, CommandInput } from '@/components/ui/command'`} /><CodeBlock code={`<Command>\n  <CommandInput placeholder="Type a command or search..." />\n</Command>`} /></div>
      </div>
  );

  const renderDialog = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dialog</h1><p className="text-xl text-muted-foreground">A modal dialog that interrupts the user.</p></div>
        <ComponentPreview preview={<button onClick={() => setIsDialogOpen(true)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Edit Profile</button>} code={`<script setup>\nimport { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'\n</script>\n\n<template>\n  <Dialog>\n    <DialogTrigger>Open</DialogTrigger>\n    <DialogContent>\n      <DialogHeader>\n        <DialogTitle>Edit profile</DialogTitle>\n        <DialogDescription>\n          Make changes to your profile here. Click save when you're done.\n        </DialogDescription>\n      </DialogHeader>\n    </DialogContent>\n  </Dialog>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/dialog" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'`} /><CodeBlock code={`<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>Content</DialogContent>\n</Dialog>`} /></div>
      </div>
  );

  const renderDrawer = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Drawer</h1><p className="text-xl text-muted-foreground">A drawer component for Vue.</p></div>
        <ComponentPreview preview={<button onClick={() => setIsDrawerOpen(true)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Open Drawer</button>} code={`<script setup>\nimport { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'\n</script>\n\n<template>\n  <Drawer>\n    <DrawerTrigger>Open</DrawerTrigger>\n    <DrawerContent>\n      <DrawerHeader>\n        <DrawerTitle>Are you absolutely sure?</DrawerTitle>\n        <DrawerDescription>This action cannot be undone.</DrawerDescription>\n      </DrawerHeader>\n      <DrawerFooter>\n        <DrawerClose>Cancel</DrawerClose>\n      </DrawerFooter>\n    </DrawerContent>\n  </Drawer>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/drawer" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'`} /><CodeBlock code={`<Drawer>\n  <DrawerTrigger>Open</DrawerTrigger>\n  <DrawerContent>Content</DrawerContent>\n</Drawer>`} /></div>
      </div>
  );

  const renderDropdownMenu = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dropdown Menu</h1><p className="text-xl text-muted-foreground">Displays a menu to the user.</p></div>
        <ComponentPreview preview={<button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-transparent border border-input h-10 px-4 py-2 rounded-md font-medium text-sm">Open Menu</button>} code={`<script setup>\nimport { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'\n</script>\n\n<template>\n  <DropdownMenu>\n    <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n    <DropdownMenuContent>\n      <DropdownMenuLabel>My Account</DropdownMenuLabel>\n      <DropdownMenuSeparator />\n      <DropdownMenuItem>Profile</DropdownMenuItem>\n      <DropdownMenuItem>Billing</DropdownMenuItem>\n      <DropdownMenuItem>Team</DropdownMenuItem>\n      <DropdownMenuItem>Subscription</DropdownMenuItem>\n    </DropdownMenuContent>\n  </DropdownMenu>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/dropdown-menu" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu'`} /><CodeBlock code={`<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>Content</DropdownMenuContent>\n</DropdownMenu>`} /></div>
      </div>
  );

  const renderHoverCard = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hover Card</h1><p className="text-xl text-muted-foreground">For sighted users to preview content available behind a link.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center h-[200px]"><div className="relative group"><button className="text-sm font-semibold hover:underline">@vuejs</button><div className="absolute left-1/2 -translate-x-1/2 top-6 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none group-hover:block hidden z-50"><div className="flex justify-between space-x-4"><div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border"><img src="https://vuejs.org/images/logo.png" alt="Vue Logo" className="aspect-square h-full w-full object-cover" /></div><div className="space-y-1"><h4 className="text-sm font-semibold">@vuejs</h4><p className="text-sm">The Progressive JavaScript Framework.</p><div className="flex items-center pt-2"><CalendarDays className="mr-2 h-4 w-4 opacity-70" /> <span className="text-xs text-muted-foreground">Joined January 2014</span></div></div></div></div></div></div>} code={`<script setup>\nimport { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'\n</script>\n\n<template>\n  <HoverCard>\n    <HoverCardTrigger>Hover</HoverCardTrigger>\n    <HoverCardContent>\n      The Vue.js framework.\n    </HoverCardContent>\n  </HoverCard>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/hover-card" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'`} /><CodeBlock code={`<HoverCard>\n  <HoverCardTrigger>Hover</HoverCardTrigger>\n  <HoverCardContent>Content</HoverCardContent>\n</HoverCard>`} /></div>
      </div>
  );

  const renderInput = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input</h1><p className="text-xl text-muted-foreground">Displays a form input field or a component that looks like an input field.</p></div>
        <ComponentPreview preview={<div className="grid w-full max-w-sm items-center gap-1.5"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label><input type="email" placeholder="Email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /></div>} code={`<script setup>import { Input } from '@/components/ui/input'</script>\n\n<template>\n  <Input type="email" placeholder="Email" />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/input" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Input } from '@/components/ui/input'`} /><CodeBlock code={`<Input />`} /></div>
      </div>
  );

  const renderLabel = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Label</h1><p className="text-xl text-muted-foreground">Renders an accessible label associated with controls.</p></div>
        <ComponentPreview preview={<div className="flex items-center space-x-2"><div className="flex items-center justify-center w-4 h-4 rounded-sm border border-primary bg-primary text-primary-foreground"><Check className="w-3 h-3" /></div><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Accept terms and conditions</label></div>} code={`<script setup>import { Label } from '@/components/ui/label'</script>\n\n<template>\n  <Label htmlFor="email">Your email address</Label>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/label" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Label } from '@/components/ui/label'`} /><CodeBlock code={`<Label>Label</Label>`} /></div>
      </div>
  );

  const renderMenubar = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Menubar</h1><p className="text-xl text-muted-foreground">A visually persistent menu common in desktop applications.</p></div>
        <ComponentPreview preview={<div className="flex h-10 items-center space-x-1 rounded-md border bg-background p-1"><button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground">File</button><button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground">Edit</button></div>} code={`<script setup>\nimport {\n  Menubar,\n  MenubarContent,\n  MenubarItem,\n  MenubarMenu,\n  MenubarSeparator,\n  MenubarShortcut,\n  MenubarTrigger,\n} from '@/components/ui/menubar'\n</script>\n\n<template>\n  <Menubar>\n    <MenubarMenu>\n      <MenubarTrigger>File</MenubarTrigger>\n      <MenubarContent>\n        <MenubarItem>\n          New Tab <MenubarShortcut>⌘T</MenubarShortcut>\n        </MenubarItem>\n        <MenubarItem>New Window</MenubarItem>\n        <MenubarSeparator />\n        <MenubarItem>Share</MenubarItem>\n        <MenubarSeparator />\n        <MenubarItem>Print</MenubarItem>\n      </MenubarContent>\n    </MenubarMenu>\n  </Menubar>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/menubar" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'`} /><CodeBlock code={`<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>New Tab</MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>`} /></div>
      </div>
  );

  const renderNavigationMenu = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Navigation Menu</h1><p className="text-xl text-muted-foreground">A collection of links for navigating websites.</p></div>
        <ComponentPreview preview={<div className="relative flex justify-center w-full z-10"><nav className="flex items-center justify-center gap-1 rounded-md bg-background p-1 border"><button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Getting Started</button><button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Components</button></nav></div>} code={`<script setup>\nimport { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'\n</script>\n\n<template>\n  <NavigationMenu>\n    <NavigationMenuList>\n      <NavigationMenuItem>\n        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>\n        <NavigationMenuContent>\n          <NavigationMenuLink>Link</NavigationMenuLink>\n        </NavigationMenuContent>\n      </NavigationMenuItem>\n    </NavigationMenuList>\n  </NavigationMenu>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/navigation-menu" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'`} /><CodeBlock code={`<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuLink>Link</NavigationMenuLink>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`} /></div>
      </div>
  );
  
  const renderPagination = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pagination</h1><p className="text-xl text-muted-foreground">Pagination with page navigation, next and previous links.</p></div>
        <ComponentPreview preview={<nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center"><ul className="flex flex-row items-center gap-1"><li><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"><span>Previous</span></button></li><li><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">1</button></li><li><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">2</button></li><li><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">3</button></li><li><span className="flex h-9 w-9 items-center justify-center"><MoreHorizontal className="h-4 w-4" /></span></li><li><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"><span>Next</span></button></li></ul></nav>} code={`<script setup>\nimport { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination'\n</script>\n\n<template>\n  <Pagination :total="100" :sibling-count="1" show-edges :default-page="2">\n    <PaginationList v-slot="{ items }" class="flex items-center gap-1">\n      <PaginationFirst />\n      <PaginationPrev />\n      <template v-for="(item, index) in items">\n        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>\n          <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">\n            {{ item.value }}\n          </Button>\n        </PaginationListItem>\n        <PaginationEllipsis v-else :key="item.type" :index="index" />\n      </template>\n      <PaginationNext />\n      <PaginationLast />\n    </PaginationList>\n  </Pagination>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/pagination" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Pagination, PaginationList, PaginationFirst } from '@/components/ui/pagination'`} /><CodeBlock code={`<Pagination :total="100">\n  <PaginationList>\n    <PaginationFirst />\n    <!-- items -->\n  </PaginationList>\n</Pagination>`} /></div>
      </div>
  );
  
  const renderPopover = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Popover</h1><p className="text-xl text-muted-foreground">Displays rich content in a portal, triggered by a button.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center"><div className="relative"><button onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="bg-transparent border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors">Open Popover</button>{isPopoverOpen && (<div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none z-50">Content</div>)}</div></div>} code={`<script setup>\nimport { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'\n</script>\n\n<template>\n  <Popover>\n    <PopoverTrigger>Open</PopoverTrigger>\n    <PopoverContent>Place content for the popover here.</PopoverContent>\n  </Popover>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/popover" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'`} /><CodeBlock code={`<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>Content</PopoverContent>\n</Popover>`} /></div>
      </div>
  );
  
  const renderProgress = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Progress</h1><p className="text-xl text-muted-foreground">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</p></div>
        <ComponentPreview preview={<div className="w-[60%]"><div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary"><div className="h-full w-full flex-1 bg-primary transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${100 - (progressValue || 0)}%)` }} /></div></div>} code={`<script setup>\nimport { Progress } from '@/components/ui/progress'\nimport { ref, onMounted } from 'vue'\n\nconst progress = ref(13)\n\nonMounted(() => {\n  const timer = setTimeout(() => (progress.value = 66), 500)\n  return () => clearTimeout(timer)\n})\n</script>\n\n<template>\n  <Progress :model-value="progress" class="w-[60%]" />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/progress" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Progress } from '@/components/ui/progress'`} /><CodeBlock code={`<Progress :model-value="33" />`} /></div>
      </div>
  );

  const renderRadioGroup = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radio Group</h1><p className="text-xl text-muted-foreground">A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</p></div>
        <ComponentPreview preview={<div className="grid gap-4"><div className="flex items-center space-x-2"><button onClick={() => setRadioValue("default")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${radioValue === "default" ? "flex items-center justify-center" : ""}`}>{radioValue === "default" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => setRadioValue("default")}>Default</label></div><div className="flex items-center space-x-2"><button onClick={() => setRadioValue("comfortable")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${radioValue === "comfortable" ? "flex items-center justify-center" : ""}`}>{radioValue === "comfortable" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => setRadioValue("comfortable")}>Comfortable</label></div><div className="flex items-center space-x-2"><button onClick={() => setRadioValue("compact")} className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${radioValue === "compact" ? "flex items-center justify-center" : ""}`}>{radioValue === "compact" && <div className="h-2.5 w-2.5 rounded-full bg-current" />}</button><label onClick={() => setRadioValue("compact")}>Compact</label></div></div>} code={`<script setup>\nimport { Label } from '@/components/ui/label'\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\n</script>\n\n<template>\n  <RadioGroup default-value="option-one">\n    <div class="flex items-center space-x-2">\n      <RadioGroupItem id="option-one" value="option-one" />\n      <Label htmlFor="option-one">Option One</Label>\n    </div>\n    <div class="flex items-center space-x-2">\n      <RadioGroupItem id="option-two" value="option-two" />\n      <Label htmlFor="option-two">Option Two</Label>\n    </div>\n  </RadioGroup>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/radio-group" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'`} /><CodeBlock code={`<RadioGroup>\n  <RadioGroupItem value="default" id="r1" />\n  <Label htmlFor="r1">Default</Label>\n</RadioGroup>`} /></div>
      </div>
  );
  
  const renderResizable = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Resizable</h1><p className="text-xl text-muted-foreground">Accessible resizable panel groups and layouts with keyboard support.</p></div>
        <ComponentPreview preview={<div className="w-full max-w-md border rounded-lg h-[200px] flex overflow-hidden"><div className="w-1/3 bg-background p-6 flex items-center justify-center border-r"><span className="font-semibold">One</span></div><div className="w-2/3 flex flex-col"><div className="h-1/2 bg-background p-6 flex items-center justify-center border-b"><span className="font-semibold">Two</span></div><div className="h-1/2 bg-background p-6 flex items-center justify-center"><span className="font-semibold">Three</span></div></div></div>} code={`<script setup>\nimport { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'\n</script>\n\n<template>\n  <ResizablePanelGroup direction="horizontal">\n    <ResizablePanel>One</ResizablePanel>\n    <ResizableHandle />\n    <ResizablePanel>Two</ResizablePanel>\n  </ResizablePanelGroup>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/resizable" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'`} /><CodeBlock code={`<ResizablePanelGroup>\n  <ResizablePanel>Content</ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel>Content</ResizablePanel>\n</ResizablePanelGroup>`} /></div>
      </div>
  );

  const renderScrollArea = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Scroll Area</h1><p className="text-xl text-muted-foreground">Augments native scroll functionality for custom, cross-browser styling.</p></div>
        <ComponentPreview preview={<div className="h-[200px] w-[350px] rounded-md border p-4 overflow-y-auto"><h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>{Array.from({length: 50}).map((_, i) => (<div key={i} className="text-sm py-2 border-b last:border-0">v1.2.0-beta.{50 - i}</div>))}</div>} code={`<script setup>\nimport { ScrollArea } from '@/components/ui/scroll-area'\n</script>\n\n<template>\n  <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">\n    Jokester began sneaking into the castle in the middle of the night...\n  </ScrollArea>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/scroll-area" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ScrollArea } from '@/components/ui/scroll-area'`} /><CodeBlock code={`<ScrollArea class="h-[200px] w-[350px]">\n  Content...\n</ScrollArea>`} /></div>
      </div>
  );

  const renderSelect = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1><p className="text-xl text-muted-foreground">Displays a list of options for the user to pick from—triggered by a button.</p></div>
        <ComponentPreview preview={<div className="relative"><button onClick={() => setIsSelectOpen(!isSelectOpen)} className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span>{selectValue ? fruits.find(f => f.value === selectValue)?.label : "Select a fruit"}</span><ChevronDown className="h-4 w-4 opacity-50" /></button>{isSelectOpen && (<div className="absolute top-full mt-2 w-[180px] rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in zoom-in-95 z-50 p-1">{fruits.map(f => (<div key={f.value} onClick={() => { setSelectValue(f.value); setIsSelectOpen(false); }} className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}>{selectValue === f.value && <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><Check className="h-4 w-4" /></span>}<span>{f.label}</span></div>))}</div>)}</div>} code={`<script setup>\nimport { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'\n</script>\n\n<template>\n  <Select>\n    <SelectTrigger class="w-[180px]">\n      <SelectValue placeholder="Select a fruit" />\n    </SelectTrigger>\n    <SelectContent>\n      <SelectGroup>\n        <SelectLabel>Fruits</SelectLabel>\n        <SelectItem value="apple">Apple</SelectItem>\n        <SelectItem value="banana">Banana</SelectItem>\n      </SelectGroup>\n    </SelectContent>\n  </Select>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/select" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'`} /><CodeBlock code={`<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Select" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="item1">Item 1</SelectItem>\n  </SelectContent>\n</Select>`} /></div>
      </div>
  );

  const renderSeparator = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Separator</h1><p className="text-xl text-muted-foreground">Visually or semantically separates content.</p></div>
        <ComponentPreview preview={<div><div className="space-y-1"><h4 className="text-sm font-medium leading-none">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><div className="shrink-0 bg-border h-[1px] w-full my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><div className="shrink-0 bg-border w-[1px] h-full" /><div>Docs</div><div className="shrink-0 bg-border w-[1px] h-full" /><div>Source</div></div></div>} code={`<script setup>import { Separator } from '@/components/ui/separator'</script>\n\n<template>\n  <Separator />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/separator" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Separator } from '@/components/ui/separator'`} /><CodeBlock code={`<Separator />`} /></div>
      </div>
  );

  const renderSheet = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sheet</h1><p className="text-xl text-muted-foreground">Extends the Dialog component to display content that complements the main screen.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center"><button onClick={() => setIsSheetOpen(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Open Sheet</button></div>} code={`<script setup>\nimport { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'\n</script>\n\n<template>\n  <Sheet>\n    <SheetTrigger>Open</SheetTrigger>\n    <SheetContent>\n      <SheetHeader>\n        <SheetTitle>Edit profile</SheetTitle>\n        <SheetDescription>Make changes to your profile here.</SheetDescription>\n      </SheetHeader>\n    </SheetContent>\n  </Sheet>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/sheet" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'`} /><CodeBlock code={`<Sheet>\n  <SheetTrigger>Open</SheetTrigger>\n  <SheetContent>Content</SheetContent>\n</Sheet>`} /></div>
      </div>
  );

  const renderSkeleton = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Skeleton</h1><p className="text-xl text-muted-foreground">Use to show a placeholder while content is loading.</p></div>
        <ComponentPreview preview={<div className="flex items-center space-x-4"><div className="h-12 w-12 rounded-full bg-muted animate-pulse" /><div className="space-y-2"><div className="h-4 w-[250px] bg-muted animate-pulse rounded" /><div className="h-4 w-[200px] bg-muted animate-pulse rounded" /></div></div>} code={`<script setup>import { Skeleton } from '@/components/ui/skeleton'</script>\n\n<template>\n  <div class="flex items-center space-x-4">\n    <Skeleton class="h-12 w-12 rounded-full" />\n    <div class="space-y-2">\n      <Skeleton class="h-4 w-[250px]" />\n      <Skeleton class="h-4 w-[200px]" />\n    </div>\n  </div>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/skeleton" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Skeleton } from '@/components/ui/skeleton'`} /><CodeBlock code={`<Skeleton class="h-4 w-[250px]" />`} /></div>
      </div>
  );

  const renderSlider = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Slider</h1><p className="text-xl text-muted-foreground">An input where the user selects a value from within a given range.</p></div>
        <ComponentPreview preview={<div className="w-[60%]"><div className="relative flex w-full touch-none select-none items-center"><div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><div className="absolute h-full bg-primary" style={{ width: `${sliderValue}%` }} /></div><input type="range" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="absolute w-full h-full opacity-0 cursor-pointer"/><div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 absolute -translate-x-1/2 pointer-events-none" style={{ left: `${sliderValue}%` }}/></div></div>} code={`<script setup>import { Slider } from '@/components/ui/slider'</script>\n\n<template>\n  <Slider :default-value="[50]" max="100" step="1" />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/slider" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Slider } from '@/components/ui/slider'`} /><CodeBlock code={`<Slider :max="100" :step="1" />`} /></div>
      </div>
  );

  const renderSonner = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sonner</h1><p className="text-xl text-muted-foreground">An opinionated toast component for Vue.</p></div>
        <ComponentPreview preview={<><button onClick={() => setShowToast(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Show Toast</button>{showToast && (<div className="fixed bottom-4 right-4 z-[100] flex items-center w-full max-w-[356px] gap-4 rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300"><div className="grid gap-1"><h5 className="text-sm font-semibold">Event has been created</h5><p className="text-sm text-muted-foreground">Sunday, December 03, 2023 at 9:00 AM</p></div><button onClick={() => setShowToast(false)} className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive">Undo</button></div>)}</>} code={`<script setup>\nimport { toast } from 'vue-sonner'\n</script>\n\n<template>\n  <Button @click="toast('Event has been created')">Show Toast</Button>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install vue-sonner" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { toast } from 'vue-sonner'`} /><CodeBlock code={`toast('My message')`} /></div>
      </div>
  );

  const renderSwitch = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Switch</h1><p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p></div>
        <ComponentPreview preview={<div className="flex items-center space-x-2"><button role="switch" aria-checked={isSwitchOn} onClick={() => setIsSwitchOn(!isSwitchOn)} className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${isSwitchOn ? 'bg-primary' : 'bg-input'}`}><span className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${isSwitchOn ? 'translate-x-5' : 'translate-x-0'}`} /></button><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" onClick={() => setIsSwitchOn(!isSwitchOn)}>Airplane Mode</label></div>} code={`<script setup>import { Switch } from '@/components/ui/switch'</script>\n\n<template>\n  <div class="flex items-center space-x-2">\n    <Switch id="airplane-mode" />\n    <Label htmlFor="airplane-mode">Airplane Mode</Label>\n  </div>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/switch" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Switch } from '@/components/ui/switch'`} /><CodeBlock code={`<Switch />`} /></div>
      </div>
  );

  const renderTable = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Table</h1><p className="text-xl text-muted-foreground">A responsive table component.</p></div>
        <ComponentPreview preview={<div className="w-full overflow-auto rounded-md border"><table className="w-full caption-bottom text-sm"><thead className="[&_tr]:border-b"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">Invoice</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Method</th><th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Amount</th></tr></thead><tbody className="[&_tr:last-child]:border-0"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV001</td><td className="p-4 align-middle">Paid</td><td className="p-4 align-middle">Credit Card</td><td className="p-4 align-middle text-right">$250.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td className="p-4 align-middle font-medium">INV002</td><td className="p-4 align-middle">Pending</td><td className="p-4 align-middle">PayPal</td><td className="p-4 align-middle text-right">$150.00</td></tr></tbody></table></div>} code={`<script setup>\nimport { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'\n</script>\n\n<template>\n  <Table>\n    <TableCaption>A list of your recent invoices.</TableCaption>\n    <TableHeader>\n      <TableRow>\n        <TableHead class="w-[100px]">Invoice</TableHead>\n        <TableHead>Status</TableHead>\n        <TableHead>Method</TableHead>\n        <TableHead class="text-right">Amount</TableHead>\n      </TableRow>\n    </TableHeader>\n    <TableBody>\n      <TableRow>\n        <TableCell class="font-medium">INV001</TableCell>\n        <TableCell>Paid</TableCell>\n        <TableCell>Credit Card</TableCell>\n        <TableCell class="text-right">$250.00</TableCell>\n      </TableRow>\n    </TableBody>\n  </Table>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/table" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Table, TableRow, TableCell, TableHead } from '@/components/ui/table'`} /><CodeBlock code={`<Table>\n  <TableRow>\n    <TableCell>Content</TableCell>\n  </TableRow>\n</Table>`} /></div>
      </div>
  );

  const renderTabs = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tabs</h1><p className="text-xl text-muted-foreground">A set of layered sections of content—known as tab panels—that are displayed one at a time.</p></div>
        <ComponentPreview preview={<div className="w-[400px]"><div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full grid grid-cols-2"><button onClick={() => setActiveTab("account")} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "account" ? "bg-background text-foreground shadow-sm" : ""}`}>Account</button><button onClick={() => setActiveTab("password")} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "password" ? "bg-background text-foreground shadow-sm" : ""}`}>Password</button></div>{activeTab === "account" && (<div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200"><div className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-2"><div className="space-y-1"><h3 className="font-semibold leading-none tracking-tight">Account</h3><p className="text-sm text-muted-foreground">Make changes to your account here.</p></div></div></div>)}{activeTab === "password" && (<div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200"><div className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-2"><div className="space-y-1"><h3 className="font-semibold leading-none tracking-tight">Password</h3><p className="text-sm text-muted-foreground">Change your password here.</p></div></div></div>)}</div>} code={`<script setup>import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'</script>\n\n<template>\n  <Tabs default-value="account" class="w-[400px]">\n    <TabsList>\n      <TabsTrigger value="account">Account</TabsTrigger>\n      <TabsTrigger value="password">Password</TabsTrigger>\n    </TabsList>\n    <TabsContent value="account">Make changes to your account here.</TabsContent>\n    <TabsContent value="password">Change your password here.</TabsContent>\n  </Tabs>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/tabs" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'`} /><CodeBlock code={`<Tabs>\n  <TabsList>\n    <TabsTrigger value="1">Tab 1</TabsTrigger>\n  </TabsList>\n  <TabsContent value="1">Content</TabsContent>\n</Tabs>`} /></div>
      </div>
  );

  const renderTextarea = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Textarea</h1><p className="text-xl text-muted-foreground">Displays a form textarea or a component that looks like an textarea.</p></div>
        <ComponentPreview preview={<div className="grid w-full gap-1.5"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Message</label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type your message here." /><p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p></div>} code={`<script setup>import { Textarea } from '@/components/ui/textarea'</script>\n\n<template>\n  <Textarea placeholder="Type your message here." />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/textarea" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Textarea } from '@/components/ui/textarea'`} /><CodeBlock code={`<Textarea />`} /></div>
      </div>
  );

  const renderToast = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toast</h1><p className="text-xl text-muted-foreground">A succinct message that is displayed temporarily.</p></div>
        <ComponentPreview preview={<><button onClick={() => setShowSimpleToast(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Add to calendar</button>{showSimpleToast && (<div className="fixed bottom-4 right-4 z-[100] flex w-full max-w-md flex-col gap-2 bg-background p-6 shadow-lg rounded-lg border animate-in slide-in-from-right-full duration-300"><div className="grid gap-1"><div className="font-semibold text-sm">Scheduled: Catch up</div><div className="text-sm opacity-90">Friday, February 10, 2023 at 5:57 PM</div></div></div>)}</>} code={`<script setup>\nimport { useToast } from '@/components/ui/toast/use-toast'\nimport { Button } from '@/components/ui/button'\n\nconst { toast } = useToast()\n</script>\n\n<template>\n  <Button\n    variant="outline"\n    @click="toast({\n      title: 'Scheduled: Catch up',\n      description: 'Friday, February 10, 2023 at 5:57 PM',\n    })"\n  >\n    Add to calendar\n  </Button>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toast" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { useToast } from '@/components/ui/toast'`} /><CodeBlock code={`const { toast } = useToast()\ntoast({ title: 'Hello', description: 'World' })`} /></div>
      </div>
  );

  const renderToggle = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle</h1><p className="text-xl text-muted-foreground">A two-state button that can be either on or off.</p></div>
        <ComponentPreview preview={<button onClick={() => setToggleState(!toggleState)} className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${toggleState ? 'bg-accent text-accent-foreground' : 'bg-transparent'}`}><BoldIcon className="h-4 w-4" /></button>} code={`<script setup>\nimport { Toggle } from '@/components/ui/toggle'\nimport { Bold } from 'lucide-vue-next'\n</script>\n\n<template>\n  <Toggle aria-label="Toggle bold">\n    <Bold class="h-4 w-4" />\n  </Toggle>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toggle" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Toggle } from '@/components/ui/toggle'`} /><CodeBlock code={`<Toggle>B</Toggle>`} /></div>
      </div>
  );

  const renderToggleGroup = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle Group</h1><p className="text-xl text-muted-foreground">A set of two-state buttons that can be toggled on or off.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center"><div className="flex items-center rounded-md border bg-transparent"><button onClick={() => setToggleGroupValue(prev => prev.includes('bold') ? prev.filter(i => i !== 'bold') : [...prev, 'bold'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${toggleGroupValue.includes('bold') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><BoldIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => setToggleGroupValue(prev => prev.includes('italic') ? prev.filter(i => i !== 'italic') : [...prev, 'italic'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${toggleGroupValue.includes('italic') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><ItalicIcon className="h-4 w-4" /></button><div className="w-[1px] h-9 bg-border" /><button onClick={() => setToggleGroupValue(prev => prev.includes('underline') ? prev.filter(i => i !== 'underline') : [...prev, 'underline'])} className={`inline-flex items-center justify-center h-9 w-9 rounded-none first:rounded-l-md last:rounded-r-md hover:bg-muted ${toggleGroupValue.includes('underline') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}><UnderlineIcon className="h-4 w-4" /></button></div></div>} code={`<script setup>\nimport { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'\nimport { Bold, Italic, Underline } from 'lucide-vue-next'\n</script>\n\n<template>\n  <ToggleGroup type="multiple">\n    <ToggleGroupItem value="bold" aria-label="Toggle bold">\n      <Bold class="h-4 w-4" />\n    </ToggleGroupItem>\n    <ToggleGroupItem value="italic" aria-label="Toggle italic">\n      <Italic class="h-4 w-4" />\n    </ToggleGroupItem>\n    <ToggleGroupItem value="underline" aria-label="Toggle underline">\n      <Underline class="h-4 w-4" />\n    </ToggleGroupItem>\n  </ToggleGroup>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/toggle-group" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`} /><CodeBlock code={`<ToggleGroup type="multiple">\n  <ToggleGroupItem value="bold">B</ToggleGroupItem>\n</ToggleGroup>`} /></div>
      </div>
  );
  
  const renderTooltip = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tooltip</h1><p className="text-xl text-muted-foreground">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center"><div className="relative group"><button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background h-10 w-10 hover:bg-accent hover:text-accent-foreground transition-colors"><Plus className="h-4 w-4" /><span className="sr-only">Add</span></button><div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 hidden group-hover:block whitespace-nowrap">Add to library</div></div></div>} code={`<script setup>\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'\n</script>\n\n<template>\n  <TooltipProvider>\n    <Tooltip>\n      <TooltipTrigger>Hover</TooltipTrigger>\n      <TooltipContent>\n        <p>Add to library</p>\n      </TooltipContent>\n    </Tooltip>\n  </TooltipProvider>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/tooltip" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'`} /><CodeBlock code={`<Tooltip>\n  <TooltipTrigger>Hover</TooltipTrigger>\n  <TooltipContent>Label</TooltipContent>\n</Tooltip>`} /></div>
      </div>
  );

  const renderCalendar = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const selectedDate = calendarDate.getDate();

    // 获取月份的第一天是星期几（0 = Sunday, 1 = Monday, etc.）
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // 获取月份的天数
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const handlePrevMonth = () => {
      if (calendarView === 'month') {
        setCalendarDate(new Date(year, month - 1, Math.min(selectedDate, new Date(year, month, 0).getDate())));
      } else if (calendarView === 'month-select') {
        setCalendarDate(new Date(year - 1, month, selectedDate));
      } else if (calendarView === 'year-select') {
        setCalendarDate(new Date(year - 12, month, selectedDate));
      }
    };

    const handleNextMonth = () => {
      if (calendarView === 'month') {
        setCalendarDate(new Date(year, month + 1, Math.min(selectedDate, new Date(year, month + 2, 0).getDate())));
      } else if (calendarView === 'month-select') {
        setCalendarDate(new Date(year + 1, month, selectedDate));
      } else if (calendarView === 'year-select') {
        setCalendarDate(new Date(year + 12, month, selectedDate));
      }
    };

    const handleMonthClick = () => {
      setCalendarView('month-select');
    };

    const handleYearClick = () => {
      setCalendarView('year-select');
    };

    const handleDateClick = (day: number) => {
      setCalendarDate(new Date(year, month, day));
    };

    const handleMonthSelect = (selectedMonth: number) => {
      const daysInSelectedMonth = new Date(year, selectedMonth + 1, 0).getDate();
      setCalendarDate(new Date(year, selectedMonth, Math.min(selectedDate, daysInSelectedMonth)));
      setCalendarView('month');
    };

    const handleYearSelect = (selectedYear: number) => {
      const daysInSelectedMonth = new Date(selectedYear, month + 1, 0).getDate();
      setCalendarDate(new Date(selectedYear, month, Math.min(selectedDate, daysInSelectedMonth)));
      setCalendarView('month');
    };

    const handlePrevYear = () => {
      if (calendarView === 'year-select') {
        setCalendarDate(new Date(year - 12, month, selectedDate));
      } else if (calendarView === 'month-select') {
        setCalendarDate(new Date(year - 1, month, selectedDate));
      }
    };

    const handleNextYear = () => {
      if (calendarView === 'year-select') {
        setCalendarDate(new Date(year + 12, month, selectedDate));
      } else if (calendarView === 'month-select') {
        setCalendarDate(new Date(year + 1, month, selectedDate));
      }
    };

    // 生成日历日期数组
    const calendarDays: (number | null)[] = [];
    // 添加上个月的日期（用于填充开头）
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
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
            {calendarView === 'month-select' && (
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
            {calendarView === 'year-select' && (
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
            {calendarView === 'month' && (
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
    class="rounded-md border"
    @prev-month="handlePrevMonth"
    @next-month="handleNextMonth"
    @month-select="handleMonthSelect"
    @year-select="handleYearSelect"
  />
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

  const renderCarousel = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Carousel</h1><p className="text-xl text-muted-foreground">A carousel with motion and swipe built using Embla.</p></div>
        <ComponentPreview preview={<div className="relative w-full max-w-xs mx-auto"><div className="overflow-hidden rounded-xl border bg-card"><div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>{Array.from({ length: 5 }).map((_, index) => (<div key={index} className="min-w-full p-6"><div className="flex aspect-square items-center justify-center rounded-lg border bg-muted"><span className="text-4xl font-semibold">{index + 1}</span></div></div>))}</div></div><button onClick={() => setCurrentSlide(prev => (prev === 0 ? 4 : prev - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => setCurrentSlide(prev => (prev === 4 ? 0 : prev + 1))} className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-accent"><ChevronRight className="h-4 w-4" /></button></div>} code={`<script setup>\nimport { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'\n</script>\n\n<template>\n  <Carousel class="w-full max-w-xs">\n    <CarouselContent>\n      <CarouselItem v-for="(_, index) in 5" :key="index">\n        <div class="p-1">\n          <Card>\n            <CardContent class="flex aspect-square items-center justify-center p-6">\n              <span class="text-4xl font-semibold">{{ index + 1 }}</span>\n            </CardContent>\n          </Card>\n        </div>\n      </CarouselItem>\n    </CarouselContent>\n    <CarouselPrevious />\n    <CarouselNext />\n  </Carousel>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/carousel embla-carousel-vue" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'`} /><CodeBlock code={`<Carousel>\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>`} /></div>
      </div>
  );

  const renderContextMenu = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Context Menu</h1><p className="text-xl text-muted-foreground">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</p></div>
        <ComponentPreview preview={<div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm font-medium text-muted-foreground relative group">Right click here<div className="absolute left-1/2 top-1/2 w-64 rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95 hidden group-active:block group-hover:block translate-x-4 translate-y-4 z-50"><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Back</div><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground" disabled>Forward</div><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Reload</div><div className="h-px my-1 bg-border" /><div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Save As...</div></div></div>} code={`<script setup>\nimport { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'\n</script>\n\n<template>\n  <ContextMenu>\n    <ContextMenuTrigger class="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">\n      Right click here\n    </ContextMenuTrigger>\n    <ContextMenuContent class="w-64">\n      <ContextMenuItem inset>Back</ContextMenuItem>\n      <ContextMenuItem inset disabled>Forward</ContextMenuItem>\n      <ContextMenuItem inset>Reload</ContextMenuItem>\n      <ContextMenuSeparator />\n      <ContextMenuItem inset>Save As...</ContextMenuItem>\n    </ContextMenuContent>\n  </ContextMenu>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/context-menu" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from '@/components/ui/context-menu'`} /><CodeBlock code={`<ContextMenu>\n  <ContextMenuTrigger>Right click</ContextMenuTrigger>\n  <ContextMenuContent>Menu Content</ContextMenuContent>\n</ContextMenu>`} /></div>
      </div>
  );

  const renderInputOTP = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input OTP</h1><p className="text-xl text-muted-foreground">Accessible one-time password component with copy paste support.</p></div>
        <ComponentPreview preview={<div className="flex items-center justify-center gap-2">{otpValue.map((val, i) => (<div key={i} className="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background bg-background"><div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="animate-caret-blink bg-foreground h-4 w-px duration-1000 hidden" /></div>{val}</div>))}</div>} code={`<script setup>\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'\n</script>\n\n<template>\n  <InputOTP maxlength={6}>\n    <InputOTPGroup>\n      <InputOTPSlot index={0} />\n      <InputOTPSlot index={1} />\n      <InputOTPSlot index={2} />\n      <InputOTPSlot index={3} />\n      <InputOTPSlot index={4} />\n      <InputOTPSlot index={5} />\n    </InputOTPGroup>\n  </InputOTP>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/input-otp" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'`} /><CodeBlock code={`<InputOTP maxlength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n  </InputOTPGroup>\n</InputOTP>`} /></div>
      </div>
  );

  const renderButtonGroup = () => {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button Group</h1><p className="text-xl text-muted-foreground">A container that groups related buttons together with consistent styling.</p></div>
        <ComponentPreview preview={
          <div className="flex flex-col gap-8 items-center w-full">
            {/* Basic Button Group */}
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-input bg-background rounded-l-lg hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Profile
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Settings
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-input bg-background rounded-r-lg hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Messages
              </button>
            </div>

            {/* Button Group with Dropdown */}
            <div className="relative inline-flex rounded-md shadow-sm" role="group">
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-3 text-sm font-medium border border-input bg-background rounded-l-md hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Archive
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Report
              </button>
              <button 
                type="button" 
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border-t border-b border-input bg-background hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
              >
                Snooze
              </button>
              <div className="relative">
                <button 
                  ref={buttonGroupTriggerRef}
                  type="button" 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setButtonGroupDropdownPosition({
                      top: rect.bottom + 4,
                      left: rect.right
                    });
                    setIsButtonGroupDropdownOpen(!isButtonGroupDropdownOpen);
                  }}
                  className="inline-flex items-center justify-center h-9 px-3 text-sm font-medium border border-input bg-background rounded-r-md hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:bg-accent transition-all active:scale-95"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
                {isButtonGroupDropdownOpen && buttonGroupDropdownPosition && ReactDOM.createPortal(
                  <div 
                    ref={buttonGroupDropdownRef}
                    className="fixed w-56 rounded-md border border-border bg-background shadow-lg z-[9999] animate-in fade-in slide-in-from-top-2"
                    style={{
                      top: `${buttonGroupDropdownPosition.top}px`,
                      left: `${buttonGroupDropdownPosition.left - 224}px` // 224px is w-56 (14rem)
                    }}
                  >
                    <div className="py-1">
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Mark as Read
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <Box className="h-4 w-4 text-muted-foreground" />
                        Archive
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        Snooze
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        Add to Calendar
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <List className="h-4 w-4 text-muted-foreground" />
                        Add to List
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1">Label As...</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <div className="border-t border-border my-1"></div>
                      <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left text-destructive">
                        <Trash2 className="h-4 w-4" />
                        Trash
                      </button>
                    </div>
                  </div>,
                  document.body
                )}
              </div>
            </div>
          </div>
        } code={`<script setup>
import { ButtonGroup, Button } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ChevronLeft, MoreHorizontal, Mail, Box, Clock, Calendar, List, Tag, ChevronRight, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <!-- Basic Button Group -->
  <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <!-- Button Group with Dropdown -->
  <ButtonGroup>
    <Button>
      <ChevronLeft class="h-4 w-4" />
    </Button>
    <Button>Archive</Button>
    <Button>Report</Button>
    <Button>Snooze</Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button>
          <MoreHorizontal class="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Mail class="h-4 w-4 mr-2" />
          Mark as Read
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Box class="h-4 w-4 mr-2" />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Clock class="h-4 w-4 mr-2" />
          Snooze
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Calendar class="h-4 w-4 mr-2" />
          Add to Calendar
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List class="h-4 w-4 mr-2" />
          Add to List
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Tag class="h-4 w-4 mr-2" />
          Label As...
          <ChevronRight class="h-4 w-4 ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive">
          <Trash2 class="h-4 w-4 mr-2" />
          Trash
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/button-group" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { ButtonGroup, Button } from '@/components/ui/button-group'`} />
         <div className="space-y-3 mt-4">
           <h3 className="text-lg font-semibold">Basic Button Group</h3>
           <CodeBlock code={`<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`} />
           <h3 className="text-lg font-semibold">Button Group with Dropdown</h3>
           <CodeBlock code={`<script setup>
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-vue-next'
</script>

<template>
  <ButtonGroup>
    <Button>Archive</Button>
    <Button>Report</Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button>
          <MoreHorizontal class="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>`} />
         </div>
         </div>
      </div>
  );
  };

  const renderEmpty = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Empty</h1><p className="text-xl text-muted-foreground">A placeholder state for when there is no data to display.</p></div>
        <ComponentPreview preview={<div className="flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-lg bg-muted/20 w-full max-w-sm"><div className="rounded-full bg-muted p-3 mb-4"><Package className="h-6 w-6 text-muted-foreground" /></div><h3 className="text-lg font-semibold">No products created</h3><p className="text-sm text-muted-foreground mt-2 mb-6">You have not created any products yet. Add a new product to get started.</p><button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Add Product</button></div>} code={`<script setup>import { EmptyState } from '@/components/ui/empty'</script>\n\n<template>\n  <EmptyState>\n    <template #icon><Package /></template>\n    <template #title>No data</template>\n    <template #description>There is no data to display.</template>\n    <Button>Add Data</Button>\n  </EmptyState>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/empty" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { EmptyState } from '@/components/ui/empty'`} /><CodeBlock code={`<EmptyState>\n  <template #title>Title</template>\n</EmptyState>`} /></div>
      </div>
  );

  const renderField = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Field</h1><p className="text-xl text-muted-foreground">A semantic wrapper for form controls with label and description.</p></div>
        <ComponentPreview preview={<div className="grid w-full max-w-sm items-center gap-1.5"><label className="text-sm font-medium leading-none">Email</label><input type="email" placeholder="Email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /><p className="text-[0.8rem] text-muted-foreground">We'll never share your email.</p></div>} code={`<script setup>import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field'</script>\n\n<template>\n  <Field>\n    <FieldLabel>Email</FieldLabel>\n    <Input placeholder="email@example.com" />\n    <FieldDescription>We'll never share your email.</FieldDescription>\n  </Field>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/field" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Field, FieldLabel } from '@/components/ui/field'`} /><CodeBlock code={`<Field>\n  <FieldLabel>Label</FieldLabel>\n  <Input />\n</Field>`} /></div>
      </div>
  );

  const renderInputGroup = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input Group</h1><p className="text-xl text-muted-foreground">Attach labels and buttons to your inputs.</p></div>
        <ComponentPreview preview={<div className="flex w-full max-w-sm items-center space-x-2"><div className="relative flex w-full items-center"><Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" /><input type="search" placeholder="Search..." className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9" /></div></div>} code={`<script setup>import { InputGroup } from '@/components/ui/input-group'</script>\n\n<template>\n  <InputGroup>\n    <template #prefix>\n      <Search class="h-4 w-4" />\n    </template>\n    <Input placeholder="Search..." />\n  </InputGroup>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/input-group" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { InputGroup } from '@/components/ui/input-group'`} /><CodeBlock code={`<InputGroup>\n  <Input />\n</InputGroup>`} /></div>
      </div>
  );

  const renderItem = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Item</h1><p className="text-xl text-muted-foreground">A basic list item component for building menus and lists.</p></div>
        <ComponentPreview preview={<div className="w-full max-w-sm border rounded-md divide-y"><div className="flex items-center p-4 hover:bg-muted/50 cursor-pointer transition-colors"><div className="flex-1 space-y-1"><p className="text-sm font-medium leading-none">Notifications</p><p className="text-sm text-muted-foreground">Manage your notification preferences.</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div><div className="flex items-center p-4 hover:bg-muted/50 cursor-pointer transition-colors"><div className="flex-1 space-y-1"><p className="text-sm font-medium leading-none">Privacy</p><p className="text-sm text-muted-foreground">Manage your data and privacy.</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div></div>} code={`<script setup>import { Item } from '@/components/ui/item'</script>\n\n<template>\n  <Item>Content</Item>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/item" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Item } from '@/components/ui/item'`} /><CodeBlock code={`<Item>Content</Item>`} /></div>
      </div>
  );

  const renderKbd = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Kbd</h1><p className="text-xl text-muted-foreground">Displays a keyboard key or shortcut.</p></div>
        <ComponentPreview preview={<div className="flex justify-center gap-4"><div className="flex items-center gap-2"><p className="text-sm text-muted-foreground">Press</p><kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>K</kbd></div><div className="flex items-center gap-2"><p className="text-sm text-muted-foreground">to search</p></div></div>} code={`<script setup>import { Kbd } from '@/components/ui/kbd'</script>\n\n<template>\n  <Kbd>⌘K</Kbd>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/kbd" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Kbd } from '@/components/ui/kbd'`} /><CodeBlock code={`<Kbd>Ctrl + C</Kbd>`} /></div>
      </div>
  );

  const renderNativeSelect = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Native Select</h1><p className="text-xl text-muted-foreground">A wrapper for the native HTML select element.</p></div>
        <ComponentPreview preview={<div className="w-[280px]"><select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><option value="" disabled selected>Select a fruit</option><option value="apple">Apple</option><option value="banana">Banana</option><option value="blueberry">Blueberry</option><option value="grapes">Grapes</option><option value="pineapple">Pineapple</option></select></div>} code={`<script setup>import { NativeSelect } from '@/components/ui/native-select'</script>\n\n<template>\n  <NativeSelect>\n    <option>Option 1</option>\n  </NativeSelect>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/native-select" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { NativeSelect } from '@/components/ui/native-select'`} /><CodeBlock code={`<NativeSelect>\n  <option>Option</option>\n</NativeSelect>`} /></div>
      </div>
  );

  const renderSidebar = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sidebar</h1><p className="text-xl text-muted-foreground">A composable sidebar structure for dashboards.</p></div>
        <ComponentPreview preview={<div className="flex h-[300px] w-full border rounded-lg overflow-hidden"><div className="w-[200px] border-r bg-muted/10 p-4 space-y-4"><div className="font-semibold px-2">My App</div><div className="space-y-1"><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md"><LayoutDashboard className="h-4 w-4" />Dashboard</button><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md text-muted-foreground"><ShoppingCart className="h-4 w-4" />Orders</button><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium hover:bg-muted rounded-md text-muted-foreground"><Package className="h-4 w-4" />Products</button></div></div><div className="flex-1 p-6"><h3 className="text-lg font-medium">Dashboard Overview</h3><div className="grid gap-4 mt-4 grid-cols-2"><div className="h-20 rounded-md bg-muted/20 border border-dashed"></div><div className="h-20 rounded-md bg-muted/20 border border-dashed"></div><div className="h-20 rounded-md bg-muted/20 border border-dashed col-span-2"></div></div></div></div>} code={`<script setup>import { Sidebar } from '@/components/ui/sidebar'</script>\n\n<template>\n  <Sidebar>\n    <!-- Sidebar content -->\n  </Sidebar>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/sidebar" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Sidebar } from '@/components/ui/sidebar'`} /><CodeBlock code={`<Sidebar>\n  Content\n</Sidebar>`} /></div>
      </div>
  );

  const renderSpinner = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Spinner</h1><p className="text-xl text-muted-foreground">A loading spinner.</p></div>
        <ComponentPreview preview={<div className="flex items-center gap-4"><Loader2 className="h-4 w-4 animate-spin" /><Loader2 className="h-6 w-6 animate-spin text-primary" /><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /><button disabled className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</button></div>} code={`<script setup>import { Loader2 } from 'lucide-vue-next'</script>\n\n<template>\n  <Loader2 class="h-4 w-4 animate-spin" />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install lucide-vue-next" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Loader2 } from 'lucide-vue-next'`} /><CodeBlock code={`<Loader2 class="animate-spin" />`} /></div>
      </div>
  );

  const renderChart = () => {
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

    const chartData = generateChartData(chartViewType);
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
                  onClick={() => setChartViewType('desktop')}
                  className={`text-right transition-colors cursor-pointer ${
                    chartViewType === 'desktop' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="text-sm text-muted-foreground">Desktop</div>
                  <div className="text-2xl font-bold">{desktopTotal.toLocaleString()}</div>
                </button>
                <div className="h-12 w-px bg-border"></div>
                <button
                  onClick={() => setChartViewType('mobile')}
                  className={`text-right transition-colors cursor-pointer ${
                    chartViewType === 'mobile' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
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
                      const isHovered = chartHoveredBar === index;
                      return (
                        <div
                          key={index}
                          className="flex-1 relative group min-w-[2px]"
                          onMouseEnter={() => setChartHoveredBar(index)}
                          onMouseLeave={() => setChartHoveredBar(null)}
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
    
    <div class="flex gap-6">
      <div>
        <div class="text-sm text-muted-foreground">Desktop</div>
        <div class="text-2xl font-bold">24,828</div>
      </div>
      <div>
        <div class="text-sm text-muted-foreground">Mobile</div>
        <div class="text-2xl font-bold">25,010</div>
      </div>
    </div>

    <BarChart :data="chartData" :config="chartConfig">
      <BarChartTooltip>
        <BarChartTooltipContent />
      </BarChartTooltip>
    </BarChart>
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

  const renderDataTable = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Data Table</h1><p className="text-xl text-muted-foreground">Powerful table and data grid components.</p></div>
        <ComponentPreview preview={<div className="w-full"><div className="flex items-center py-4"><input placeholder="Filter emails..." className="max-w-sm flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" /></div><div className="rounded-md border"><table className="w-full caption-bottom text-sm"><thead className="[&_tr]:border-b"><tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"><button className="inline-flex items-center hover:text-foreground">Status <ArrowUpDown className="ml-2 h-4 w-4" /></button></th><th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Email</th><th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Amount</th></tr></thead><tbody className="[&_tr:last-child]:border-0"><tr className="border-b transition-colors hover:bg-muted/50"><td className="p-4 align-middle">Success</td><td className="p-4 align-middle">ken99@yahoo.com</td><td className="p-4 align-middle text-right">$316.00</td></tr><tr className="border-b transition-colors hover:bg-muted/50"><td className="p-4 align-middle">Processing</td><td className="p-4 align-middle">abe45@gmail.com</td><td className="p-4 align-middle text-right">$242.00</td></tr></tbody></table></div><div className="flex items-center justify-end space-x-2 py-4"><button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm">Previous</button><button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm">Next</button></div></div>} code={`<script setup>\nimport { DataTable } from '@/components/ui/data-table'\nimport { columns } from './columns'\nimport { payments } from './data'\n</script>\n\n<template>\n  <DataTable :columns="columns" :data="payments" />\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @tanstack/vue-table" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { DataTable } from '@/components/ui/data-table'`} /><CodeBlock code={`<DataTable :columns="columns" :data="data" />`} /></div>
      </div>
  );

  const renderDatePicker = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Date Picker</h1><p className="text-xl text-muted-foreground">A date picker component with range and presets.</p></div>
        <ComponentPreview preview={<div className="relative"><button onClick={() => setDatePickerOpen(!datePickerOpen)} className={`w-[280px] justify-start text-left font-normal flex items-center h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${!datePickerDate ? 'text-muted-foreground' : ''}`}><CalendarIcon className="mr-2 h-4 w-4" />{datePickerDate ? datePickerDate.toLocaleDateString() : "Pick a date"}</button>{datePickerOpen && (<div className="absolute top-full mt-2 z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in zoom-in-95"><div className="space-y-2"><div className="flex justify-between items-center mb-2"><button className="p-1 hover:bg-muted rounded"><ChevronLeft className="w-4 h-4" /></button><span className="font-medium text-sm">Today</span><button className="p-1 hover:bg-muted rounded"><ChevronRight className="w-4 h-4" /></button></div><div className="grid grid-cols-7 gap-1 text-center text-xs mb-2"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div className="grid grid-cols-7 gap-1">{Array.from({length: 30}).map((_, i) => (<button key={i} onClick={() => { setDatePickerDate(new Date()); setDatePickerOpen(false); }} className="h-8 w-8 rounded-sm hover:bg-accent hover:text-accent-foreground flex items-center justify-center text-sm">{i + 1}</button>))}</div></div></div>)}</div>} code={`<script setup>\nimport { ref } from 'vue'\nimport { Calendar } from '@/components/ui/calendar'\nimport { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'\nimport { Button } from '@/components/ui/button'\nimport { cn } from '@/lib/utils'\nimport { CalendarIcon } from 'lucide-vue-next'\n\nconst date = ref()\n</script>\n\n<template>\n  <Popover>\n    <PopoverTrigger as-child>\n      <Button variant="outline" :class="cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')">\n        <CalendarIcon class="mr-2 h-4 w-4" />\n        {{ date ? date.toLocaleDateString() : "Pick a date" }}\n      </Button>\n    </PopoverTrigger>\n    <PopoverContent class="w-auto p-0">\n      <Calendar v-model="date" mode="single" initial-focus />\n    </PopoverContent>\n  </Popover>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/calendar @beautyvue/popover" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Calendar } from '@/components/ui/calendar'\nimport { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'`} /><CodeBlock code={`<Popover>\n  <PopoverTrigger>Pick date</PopoverTrigger>\n  <PopoverContent>\n    <Calendar />\n  </PopoverContent>\n</Popover>`} /></div>
      </div>
  );

  const renderForm = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Form</h1><p className="text-xl text-muted-foreground">Building forms with VeeValidate and Zod.</p></div>
        <ComponentPreview preview={<form className="w-2/3 space-y-6" onSubmit={(e) => e.preventDefault()}><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label><input placeholder="shadcn" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /><p className="text-[0.8rem] text-muted-foreground">This is your public display name.</p></div><button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Submit</button></form>} code={`<script setup>\nimport { useForm } from 'vee-validate'\nimport { toTypedSchema } from '@vee-validate/zod'\nimport * as z from 'zod'\nimport { Button } from '@/components/ui/button'\nimport { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'\nimport { Input } from '@/components/ui/input'\n\nconst formSchema = toTypedSchema(z.object({\n  username: z.string().min(2).max(50),\n}))\n\nconst form = useForm({\n  validationSchema: formSchema,\n})\n\nconst onSubmit = form.handleSubmit((values) => {\n  console.log('Form submitted!', values)\n})\n</script>\n\n<template>\n  <form @submit="onSubmit">\n    <FormField v-slot="{ componentField }" name="username">\n      <FormItem>\n        <FormLabel>Username</FormLabel>\n        <FormControl>\n          <Input type="text" placeholder="shadcn" v-bind="componentField" />\n        </FormControl>\n        <FormDescription>\n          This is your public display name.\n        </FormDescription>\n        <FormMessage />\n      </FormItem>\n    </FormField>\n    <Button type="submit">Submit</Button>\n  </form>\n</template>`} />
         <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install vee-validate zod @vee-validate/zod" /></div>
         <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'`} /><CodeBlock code={`<form @submit="onSubmit">\n  <FormField name="username">\n    <FormItem>\n      <FormLabel>Username</FormLabel>\n      <FormControl>\n        <Input />\n      </FormControl>\n      <FormMessage />\n    </FormItem>\n  </FormField>\n</form>`} /></div>
      </div>
  );

  const renderTypography = () => (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Typography</h1><p className="text-xl text-muted-foreground">Styles for headings, paragraphs, lists...etc.</p></div>
        <ComponentPreview preview={<div className="space-y-4 max-w-lg"><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">The Joke Tax Chronicles</h1><p className="leading-7 [&:not(:first-child)]:mt-6">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.</p><blockquote className="mt-6 border-l-2 pl-6 italic">"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote><ul className="my-6 ml-6 list-disc [&>li]:mt-2"><li>1st level of puns: 5 gold coins</li><li>2nd level of jokes: 10 gold coins</li><li>3rd level of one-liners : 20 gold coins</li></ul></div>} code={`<template>\n  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">\n    The Joke Tax Chronicles\n  </h1>\n  <p class="leading-7 [&:not(:first-child)]:mt-6">\n    Once upon a time, in a far-off land, there was a very lazy king who\n    spent all day lounging on his throne. One day, his advisors came to him\n    with a problem: the kingdom was running out of money.\n  </p>\n  <blockquote class="mt-6 border-l-2 pl-6 italic">\n    "After all," he said, "everyone enjoys a good joke, so it's only fair\n    that they should pay for the privilege."\n  </blockquote>\n</template>`} />
      </div>
  );

  return (
    <div className="container max-w-screen-2xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto px-4 md:px-8 py-6">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r border-border/40 pr-4">
        <div className="py-6 lg:py-8">
          <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold tracking-tight">{t.gettingStarted}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm space-y-1 mb-6">
            <button onClick={() => setActiveSection('intro')} className={`flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-left transition-colors ${activeSection === 'intro' ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground hover:underline hover:text-foreground'}`}>{t.intro.title}</button>
            <button onClick={() => setActiveSection('install')} className={`flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-left transition-colors ${activeSection === 'install' ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground hover:underline hover:text-foreground'}`}>{t.install.title}</button>
          </div>
          
          <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold tracking-tight">{t.components}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm space-y-1 pb-10">
            {[
              'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'breadcrumb', 'button', 'button-group',
              'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 
              'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty',
              'field', 'form', 'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'menubar', 
              'native-select', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group', 'resizable', 
              'scroll-area', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'spinner', 'switch', 
              'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typography'
            ].sort().map((item) => (
              <button 
                key={item}
                onClick={() => setActiveSection(item as DocSection)} 
                className={`flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-left transition-colors capitalize ${activeSection === item ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground hover:underline hover:text-foreground'}`}
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
        <div className="mx-auto w-full min-w-0">
           {renderContent()}
        </div>
        <div className="hidden xl:block">
           <div className="sticky top-20 space-y-4">
              <h4 className="text-sm font-semibold">{t.onThisPage}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                 {tocItems.map((item, index) => (
                   <li key={index}>
                     <button 
                       onClick={() => scrollToId(item.id)}
                       className="hover:text-foreground transition-colors text-left w-full block truncate"
                     >
                       {item.label}
                     </button>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};