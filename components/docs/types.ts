import React from 'react';
import { Language } from '../../types';
import { translations } from '../../translations';

export interface DocSectionProps {
  language?: Language;
}

export interface DocSectionState {
  // Dialog states
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  isAlertDialogOpen: boolean;
  setIsAlertDialogOpen: (open: boolean) => void;
  
  // Accordion
  accordionValue: string | null;
  setAccordionValue: (value: string | null) => void;
  
  // Checkbox
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  isChecked2: boolean;
  setIsChecked2: (checked: boolean) => void;
  isChecked3: boolean;
  setIsChecked3: (checked: boolean) => void;
  isChecked4: boolean;
  setIsChecked4: (checked: boolean) => void;
  
  // Switch
  isSwitchOn: boolean;
  setIsSwitchOn: (on: boolean) => void;
  
  // Tabs
  activeTab: string;
  setActiveTab: (tab: string) => void;
  
  // Collapsible
  isCollapsibleOpen: boolean;
  setIsCollapsibleOpen: (open: boolean) => void;
  
  // Dropdown
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  
  // ContextMenu
  isContextMenuOpen: boolean;
  setIsContextMenuOpen: (open: boolean) => void;
  contextMenuPosition: { x: number; y: number } | null;
  setContextMenuPosition: (pos: { x: number; y: number } | null) => void;
  
  // HoverCard
  isHoverCardOpen: boolean;
  setIsHoverCardOpen: (open: boolean) => void;
  
  // Popover
  isPopoverOpen: boolean;
  setIsPopoverOpen: (open: boolean) => void;
  
  // Radio
  radioValue: string;
  setRadioValue: (value: string) => void;
  
  // Slider
  sliderValue: number;
  setSliderValue: (value: number) => void;
  
  // Sheet
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  
  // Drawer
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  
  // Toggle
  toggleState: boolean;
  setToggleState: (state: boolean) => void;
  
  // Toast
  showToast: boolean;
  setShowToast: (show: boolean) => void;
  showSimpleToast: boolean;
  setShowSimpleToast: (show: boolean) => void;
  
  // Progress
  progressValue: number;
  setProgressValue: (value: number) => void;
  
  // Select
  selectValue: string;
  setSelectValue: (value: string) => void;
  isSelectOpen: boolean;
  setIsSelectOpen: (open: boolean) => void;
  
  // Carousel
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  
  // ToggleGroup
  toggleGroupValue: string[];
  setToggleGroupValue: (value: string[]) => void;
  
  // InputOTP
  otpValue: string[];
  setOtpValue: (value: string[]) => void;
  
  // DatePicker
  datePickerOpen: boolean;
  setDatePickerOpen: (open: boolean) => void;
  datePickerDate: Date | undefined;
  setDatePickerDate: (date: Date | undefined) => void;
  datePickerViewDate: Date;
  setDatePickerViewDate: (date: Date) => void;
  datePickerMonthSelectOpen: boolean;
  setDatePickerMonthSelectOpen: (open: boolean) => void;
  datePickerYearSelectOpen: boolean;
  setDatePickerYearSelectOpen: (open: boolean) => void;
  
  // Calendar
  calendarDate: Date;
  setCalendarDate: (date: Date) => void;
  calendarView: 'month' | 'month-select' | 'year-select';
  setCalendarView: (view: 'month' | 'month-select' | 'year-select') => void;
  
  // Combobox
  comboboxOpen: boolean;
  setComboboxOpen: (open: boolean) => void;
  comboboxValue: string;
  setComboboxValue: (value: string) => void;
  
  // Chart
  chartHoveredBar: number | null;
  setChartHoveredBar: (index: number | null) => void;
  chartViewType: 'desktop' | 'mobile';
  setChartViewType: (type: 'desktop' | 'mobile') => void;
  
  // Breadcrumb
  breadcrumbHoveredItem: string | null;
  setBreadcrumbHoveredItem: (item: string | null) => void;
  
  // ButtonGroup
  isButtonGroupDropdownOpen: boolean;
  setIsButtonGroupDropdownOpen: (open: boolean) => void;
  clickedButtonId: string | null;
  setClickedButtonId: (id: string | null) => void;
  buttonGroupDropdownPosition: { top: number; left: number } | null;
  setButtonGroupDropdownPosition: (pos: { top: number; left: number } | null) => void;
  buttonGroupDropdownRef: React.RefObject<HTMLDivElement>;
  buttonGroupTriggerRef: React.RefObject<HTMLButtonElement>;
  
  // DataTable
  dataTableSelectedRows: string[];
  setDataTableSelectedRows: (rows: string[]) => void;
  dataTableFilter: string;
  setDataTableFilter: (filter: string) => void;
  dataTableSortColumn: string | null;
  setDataTableSortColumn: (column: string | null) => void;
  dataTableSortDirection: 'asc' | 'desc' | null;
  setDataTableSortDirection: (direction: 'asc' | 'desc' | null) => void;
  dataTableColumnsDropdownOpen: boolean;
  setDataTableColumnsDropdownOpen: (open: boolean) => void;
  dataTableRowMenuOpen: string | null;
  setDataTableRowMenuOpen: (rowId: string | null) => void;
}

export const getTranslations = (language: Language = 'en') => {
  return translations[language]?.docs || translations['en'].docs;
};

