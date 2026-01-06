import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { askVueAssistant } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    try {
      const result = await askVueAssistant(query);
      setResponse(result);
    } catch (err) {
      setResponse("Failed to connect to the AI service.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-96 rounded-xl border border-border bg-card p-4 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">Vue.Beauty AI Helper</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="h-64 overflow-y-auto mb-4 space-y-4 pr-2 text-sm">
            {!response && !isLoading && (
              <div className="text-muted-foreground text-center mt-10">
                <p>Ask me anything about components, props, or styling.</p>
              </div>
            )}
            
            {query && (response || isLoading) && (
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg rounded-tr-none max-w-[85%]">
                  {query}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-muted px-3 py-2 rounded-lg rounded-tl-none flex items-center gap-2">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    <span>Thinking...</span>
                 </div>
              </div>
            )}

            {response && (
              <div className="flex justify-start">
                <div className="bg-muted px-3 py-2 rounded-lg rounded-tl-none max-w-[90%] whitespace-pre-wrap">
                  {response}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="How do I add a button?"
              className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
};
