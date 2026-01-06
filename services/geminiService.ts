
import { GoogleGenAI } from "@google/genai";

export const sendMessageToNiyahBot = async (prompt: string, history: any[]) => {
  try {
    // CRITICAL: Create a new instance right before the call to pick up fresh key from dialog selection
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
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
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    
    // Handle specific error for missing entity (usually means key selection state needs reset)
    if (error?.message?.includes("Requested entity was not found")) {
      // In a real browser environment, we might trigger a state change to re-show the gate
      return "I need you to reconnect your project key, sister. Please refresh the page to update your connection.";
    }
    
    return "I'm having a little trouble connecting right now, sister. Please try again in a moment!";
  }
};
