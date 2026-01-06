
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const sendMessageToNiyahBot = async (prompt: string, history: any[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `You are "Niyah Bot", a world-class mentor for women in Africa and Latin America. 
        Context: The user is on the Niemah Platform.
        Goals: 
        1. Explain tech concepts (Web3, AI, Design) simply.
        2. Provide career encouragement.
        3. Help with specific coding/blockchain challenges.
        Tone: Empathetic, expert, sisterly, and highly encouraging. 
        If asked about technical implementation, provide code snippets. 
        If asked about the platform, explain Niyah Points and Learn-to-Earn mechanics.`,
      },
    });

    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having a little trouble connecting right now, sister. Please try again in a moment!";
  }
};
