import React, { useState } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentPreview } from '../shared/ComponentPreview';
import { CodeBlock } from '../shared/CodeBlock';

export const Pagination: React.FC = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(5);
  const [currentPage3, setCurrentPage3] = useState(3);
  const [jumpPage, setJumpPage] = useState('');

  const totalPages = 10;
  const totalItems = 100;
  const itemsPerPage = 10;

  const getPageNumbers = (current: number, total: number) => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (total <= maxVisible) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      } else if (current >= total - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = total - 3; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      }
    }
    return pages;
  };

  const handleJump = () => {
    const page = parseInt(jumpPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage3(page);
      setJumpPage('');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2"><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pagination</h1><p className="text-xl text-muted-foreground">Pagination with page navigation, next and previous links.</p></div>
      <ComponentPreview 
        preview={
          <div className="space-y-8 w-full">
            {/* Basic Pagination */}
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="text-sm font-semibold text-foreground">Basic</div>
              <nav role="navigation" aria-label="pagination" className="flex justify-center">
                <ul className="flex flex-row items-center gap-1">
                  <li>
                    <button
                      onClick={() => setCurrentPage1(Math.max(1, currentPage1 - 1))}
                      disabled={currentPage1 === 1}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>
                  </li>
                  {getPageNumbers(currentPage1, totalPages).map((page, index) => (
                    <li key={index}>
                      {page === 'ellipsis' ? (
                        <span className="flex h-10 w-10 items-center justify-center">
                          <MoreHorizontal className="h-4 w-4" />
                        </span>
                      ) : (
                        <button
                          onClick={() => setCurrentPage1(page as number)}
                          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ${
                            currentPage1 === page ? 'border border-input bg-background' : ''
                          }`}
                        >
                          {page}
                        </button>
                      )}
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => setCurrentPage1(Math.min(totalPages, currentPage1 + 1))}
                      disabled={currentPage1 === totalPages}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Pagination with Page Info */}
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="text-sm font-semibold text-foreground">With Page Info</div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage2 - 1) * itemsPerPage + 1} to {Math.min(currentPage2 * itemsPerPage, totalItems)} of {totalItems} results
                </div>
                <nav role="navigation" aria-label="pagination" className="flex">
                  <ul className="flex flex-row items-center gap-1">
                    <li>
                      <button
                        onClick={() => setCurrentPage2(Math.max(1, currentPage2 - 1))}
                        disabled={currentPage2 === 1}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                      </button>
                    </li>
                    {getPageNumbers(currentPage2, totalPages).map((page, index) => (
                      <li key={index}>
                        {page === 'ellipsis' ? (
                          <span className="flex h-10 w-10 items-center justify-center">
                            <MoreHorizontal className="h-4 w-4" />
                          </span>
                        ) : (
                          <button
                            onClick={() => setCurrentPage2(page as number)}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ${
                              currentPage2 === page ? 'border border-input bg-background' : ''
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => setCurrentPage2(Math.min(totalPages, currentPage2 + 1))}
                        disabled={currentPage2 === totalPages}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                      >
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Pagination with Jump */}
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="text-sm font-semibold text-foreground">With Page Jump</div>
              <div className="flex items-center justify-center gap-4">
                <nav role="navigation" aria-label="pagination" className="flex">
                  <ul className="flex flex-row items-center gap-1">
                    <li>
                      <button
                        onClick={() => setCurrentPage3(Math.max(1, currentPage3 - 1))}
                        disabled={currentPage3 === 1}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                      </button>
                    </li>
                    {getPageNumbers(currentPage3, totalPages).map((page, index) => (
                      <li key={index}>
                        {page === 'ellipsis' ? (
                          <span className="flex h-10 w-10 items-center justify-center">
                            <MoreHorizontal className="h-4 w-4" />
                          </span>
                        ) : (
                          <button
                            onClick={() => setCurrentPage3(page as number)}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ${
                              currentPage3 === page ? 'border border-input bg-background' : ''
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => setCurrentPage3(Math.min(totalPages, currentPage3 + 1))}
                        disabled={currentPage3 === totalPages}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                      >
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Go to</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={jumpPage}
                    onChange={(e) => setJumpPage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleJump();
                      }
                    }}
                    className="h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Page"
                  />
                  <button
                    onClick={handleJump}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div>
        } 
        code={`<script setup>
import { Pagination, PaginationEllipsis, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import { ref } from 'vue'

const currentPage = ref(1)
const totalPages = 10
</script>

<template>
  <!-- Basic Pagination -->
  <Pagination>
    <PaginationList>
      <PaginationPrev />
      <PaginationListItem v-for="page in pages" :key="page" :value="page" />
      <PaginationEllipsis />
      <PaginationNext />
    </PaginationList>
  </Pagination>

  <!-- With Page Info -->
  <div class="flex items-center justify-between">
    <div class="text-sm text-muted-foreground">
      Showing 1 to 10 of 100 results
    </div>
    <Pagination>
      <PaginationList>
        <PaginationPrev />
        <PaginationListItem v-for="page in pages" :key="page" :value="page" />
        <PaginationNext />
      </PaginationList>
    </Pagination>
  </div>

  <!-- With Page Jump -->
  <div class="flex items-center gap-4">
    <Pagination>
      <PaginationList>
        <PaginationPrev />
        <PaginationListItem v-for="page in pages" :key="page" :value="page" />
        <PaginationNext />
      </PaginationList>
    </Pagination>
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Go to</span>
      <input type="number" v-model="jumpPage" class="h-10 w-16 rounded-md border px-3" />
      <button @click="handleJump">Go</button>
    </div>
  </div>
</template>`} 
      />
      <div className="space-y-4"><h2 id="installation" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2><CodeBlock code="npm install @beautyvue/pagination" /></div>
      <div className="space-y-4"><h2 id="usage" className="scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2><CodeBlock code={`import { Pagination, PaginationList, PaginationListItem, PaginationPrev, PaginationNext } from '@/components/ui/pagination'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-vue-next'`} />
      <div className="space-y-3 mt-4">
        <h3 className="text-lg font-semibold">Basic Pagination</h3>
        <CodeBlock code={`<Pagination>
  <PaginationList>
    <PaginationPrev />
    <PaginationListItem :value="1" />
    <PaginationListItem :value="2" />
    <PaginationEllipsis />
    <PaginationNext />
  </PaginationList>
</Pagination>`} />
        <h3 className="text-lg font-semibold">With Page Info</h3>
        <CodeBlock code={`<div class="flex items-center justify-between">
  <div class="text-sm text-muted-foreground">
    Showing 1 to 10 of 100 results
  </div>
  <Pagination>
    <PaginationList>
      <PaginationPrev />
      <PaginationListItem v-for="page in pages" :key="page" :value="page" />
      <PaginationNext />
    </PaginationList>
  </Pagination>
</div>`} />
        <h3 className="text-lg font-semibold">With Page Jump</h3>
        <CodeBlock code={`<div class="flex items-center gap-4">
  <Pagination>
    <PaginationList>
      <PaginationPrev />
      <PaginationListItem v-for="page in pages" :key="page" :value="page" />
      <PaginationNext />
    </PaginationList>
  </Pagination>
  <div class="flex items-center gap-2">
    <span class="text-sm text-muted-foreground">Go to</span>
    <input type="number" v-model="jumpPage" class="h-10 w-16 rounded-md border px-3" />
    <button @click="handleJump">Go</button>
  </div>
</div>`} />
      </div>
      </div>
    </div>
  );
};

