import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIInstance = (): GoogleGenAI | null => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const askVueAssistant = async (question: string): Promise<string> => {
  const aiInstance = getAIInstance();
  
  if (!aiInstance) {
    return "AI Assistant is not available. Please configure GEMINI_API_KEY in your environment variables.";
  }

  try {
    const response = await aiInstance.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AI Assistant for Vue.Beauty, a modern Vue 3 UI library based on Tailwind CSS and Headless UI primitives. 
      The user is asking: "${question}".
      
      Provide a concise, helpful answer. If they ask for code, provide Vue 3 Composition API code using <script setup>.
      Assume components are imported from '@beautyvue/core'.
      
      Style guidelines:
      1. Use <script setup lang="ts">
      2. Use Tailwind CSS classes.
      3. Be polite and professional.`,
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};