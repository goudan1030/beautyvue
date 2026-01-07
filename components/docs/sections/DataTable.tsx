import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpDown, Search, ChevronDown, MoreHorizontal, Check, Minus } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';
import { DocSectionState } from '../types';

interface DataTableProps {
  state: DocSectionState;
}

export const DataTable: React.FC<DataTableProps> = ({ state }) => {
  const columnsDropdownRef = useRef<HTMLDivElement>(null);
  const rowMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const tableData = [
    { id: '1', status: 'Success', email: 'ken99@example.com', amount: '$316.00' },
    { id: '2', status: 'Success', email: 'abe45@example.com', amount: '$242.00' },
    { id: '3', status: 'Processing', email: 'monserrat44@example.com', amount: '$837.00' },
    { id: '4', status: 'Success', email: 'silas22@example.com', amount: '$874.00' },
    { id: '5', status: 'Failed', email: 'carmella@example.com', amount: '$721.00' },
  ];

  // 过滤数据
  const filteredData = tableData.filter(item => 
    item.email.toLowerCase().includes(state.dataTableFilter.toLowerCase()) ||
    item.status.toLowerCase().includes(state.dataTableFilter.toLowerCase())
  );

  // 排序数据
  const sortedData = [...filteredData].sort((a, b) => {
    if (!state.dataTableSortColumn) return 0;
    if (state.dataTableSortColumn === 'email') {
      return state.dataTableSortDirection === 'asc' 
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    }
    return 0;
  });

  // 全选/取消全选
  const allSelected = state.dataTableSelectedRows.length === sortedData.length && sortedData.length > 0;
  const someSelected = state.dataTableSelectedRows.length > 0 && state.dataTableSelectedRows.length < sortedData.length;

  const handleSelectAll = () => {
    if (allSelected) {
      state.setDataTableSelectedRows([]);
    } else {
      state.setDataTableSelectedRows(sortedData.map(item => item.id));
    }
  };

  const handleSelectRow = (id: string) => {
    if (state.dataTableSelectedRows.includes(id)) {
      state.setDataTableSelectedRows(state.dataTableSelectedRows.filter(rowId => rowId !== id));
    } else {
      state.setDataTableSelectedRows([...state.dataTableSelectedRows, id]);
    }
  };

  const handleSort = (column: string) => {
    if (state.dataTableSortColumn === column) {
      if (state.dataTableSortDirection === 'asc') {
        state.setDataTableSortDirection('desc');
      } else {
        state.setDataTableSortColumn(null);
        state.setDataTableSortDirection(null);
      }
    } else {
      state.setDataTableSortColumn(column);
      state.setDataTableSortDirection('asc');
    }
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(e.target as Node)) {
        state.setDataTableColumnsDropdownOpen(false);
      }
      // 关闭行菜单
      Object.values(rowMenuRefs.current).forEach(ref => {
        if (ref && !ref.contains(e.target as Node)) {
          state.setDataTableRowMenuOpen(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state]);

  const getStatusBadge = (status: string) => {
    const colors = {
      Success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      Processing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      Failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    };
    return (
      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colors[status as keyof typeof colors] || ''}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Data Table</h1>
        <p className="text-xl text-muted-foreground">Powerful table and data grid components.</p>
      </div>
      <ComponentPreview 
        preview={
          <div className="w-full">
            {/* Toolbar */}
            <div className="flex items-center justify-between py-4">
              <div className="relative max-w-sm flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  placeholder="Filter emails..." 
                  value={state.dataTableFilter}
                  onChange={(e) => state.setDataTableFilter(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                />
              </div>
              <div className="relative" ref={columnsDropdownRef}>
                <button
                  onClick={() => state.setDataTableColumnsDropdownOpen(!state.dataTableColumnsDropdownOpen)}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-normal transition-colors"
                >
                  Columns
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {state.dataTableColumnsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md border bg-background p-1 text-foreground shadow-lg z-50" style={{ backgroundColor: 'hsl(var(--background))' }}>
                    <div className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      <Check className="mr-2 h-4 w-4" />
                      Status
                    </div>
                    <div className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      <Check className="mr-2 h-4 w-4" />
                      Email
                    </div>
                    <div className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      <Check className="mr-2 h-4 w-4" />
                      Amount
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 w-12">
                      <button
                        onClick={handleSelectAll}
                        role="checkbox"
                        aria-checked={allSelected}
                        className={`h-4 w-4 shrink-0 rounded-sm border-2 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer ${
                          allSelected || someSelected
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-primary bg-background hover:bg-accent'
                        }`}
                      >
                        {allSelected && (
                          <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                        )}
                        {someSelected && !allSelected && (
                          <Minus className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      <button 
                        onClick={() => handleSort('status')}
                        className="inline-flex items-center hover:text-foreground"
                      >
                        Status
                        {state.dataTableSortColumn === 'status' && (
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      <button 
                        onClick={() => handleSort('email')}
                        className="inline-flex items-center hover:text-foreground"
                      >
                        Email
                        {state.dataTableSortColumn === 'email' && (
                          <ArrowUpDown className={`ml-2 h-4 w-4 ${state.dataTableSortDirection === 'desc' ? 'rotate-180' : ''}`} />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                      Amount
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground w-12">
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {sortedData.map((row) => (
                    <tr key={row.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <button
                          onClick={() => handleSelectRow(row.id)}
                          role="checkbox"
                          aria-checked={state.dataTableSelectedRows.includes(row.id)}
                          className={`h-4 w-4 shrink-0 rounded-sm border-2 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer ${
                            state.dataTableSelectedRows.includes(row.id)
                              ? 'bg-primary border-primary text-primary-foreground'
                              : 'border-primary bg-background hover:bg-accent'
                          }`}
                        >
                          {state.dataTableSelectedRows.includes(row.id) && (
                            <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                          )}
                        </button>
                      </td>
                      <td className="p-4 align-middle">
                        {getStatusBadge(row.status)}
                      </td>
                      <td className="p-4 align-middle">{row.email}</td>
                      <td className="p-4 align-middle text-right">{row.amount}</td>
                      <td className="p-4 align-middle text-right">
                        <div className="relative" ref={(el) => { rowMenuRefs.current[row.id] = el; }}>
                          <button
                            onClick={() => state.setDataTableRowMenuOpen(state.dataTableRowMenuOpen === row.id ? null : row.id)}
                            className="inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                          {state.dataTableRowMenuOpen === row.id && (
                            <div 
                              className="absolute right-0 mt-2 w-48 rounded-md border bg-background p-1 text-foreground shadow-lg z-50"
                              style={{ backgroundColor: 'hsl(var(--background))' }}
                            >
                              <div className="flex items-center rounded-sm px-2 py-1.5 text-sm font-normal hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                Edit
                              </div>
                              <div className="flex items-center rounded-sm px-2 py-1.5 text-sm font-normal hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                Copy
                              </div>
                              <div className="h-px my-1 bg-border" />
                              <div className="flex items-center rounded-sm px-2 py-1.5 text-sm font-normal text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer">
                                Delete
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between py-4">
              <div className="text-sm text-muted-foreground">
                {state.dataTableSelectedRows.length} of {sortedData.length} row(s) selected.
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  disabled
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-sm font-normal transition-colors disabled:pointer-events-none disabled:opacity-50"
                >
                  Previous
                </button>
                <button 
                  disabled
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-sm font-normal transition-colors disabled:pointer-events-none disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        } 
        code={`<script setup>
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { payments } from './data'
</script>

<template>
  <DataTable :columns="columns" :data="payments" />
</template>`} />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @tanstack/vue-table" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { DataTable } from '@/components/ui/data-table'`} /><CodeBlock code={`<DataTable :columns="columns" :data="data" />`} /></div>
    </div>
  );
};

