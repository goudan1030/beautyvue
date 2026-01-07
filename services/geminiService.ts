const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const getApiKey = (): string | null => {
  return process.env.DEEPSEEK_API_KEY || process.env.API_KEY || null;
};

export const askVueAssistant = async (question: string): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return "AI Assistant is not available. Please configure DEEPSEEK_API_KEY in your environment variables.";
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are the AI Assistant for Vue.Beauty, a modern Vue 3 UI library based on Tailwind CSS and Headless UI primitives.
      
      Style guidelines:
      1. Use <script setup lang="ts">
      2. Use Tailwind CSS classes.
3. Be polite and professional.
4. Provide concise, helpful answers.
5. If users ask for code, provide Vue 3 Composition API code using <script setup>.
6. Assume components are imported from '@beautyvue/core'.`
          },
          {
            role: 'user',
            content: question
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`DeepSeek API error: ${response.status} ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    return error instanceof Error 
      ? `Sorry, I encountered an error: ${error.message}`
      : "Sorry, I encountered an error while processing your request.";
  }
};