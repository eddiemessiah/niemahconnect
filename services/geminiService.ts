
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const sendMessageToNiyahBot = async (prompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "Niyah Bot", a friendly and encouraging AI tutor for women and girls in Africa and Latin America. 
        Your goal is to help them learn technology (coding, blockchain, design) and provide mentorship. 
        Keep your tone supportive, use simple language, and provide examples relevant to their contexts (e.g., using local currencies or business scenarios). 
        You are part of the Niemah platform. If asked about the platform, explain that Niemah democratizes access to tech education.`,
      },
    });

    // Note: We're using chat.sendMessage for simplicity here, but in a real app we'd pass history
    // Since we're initiating a new chat instance in this mock, we can just send the current message
    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having a little trouble connecting right now, sister. Please try again in a moment!";
  }
};
