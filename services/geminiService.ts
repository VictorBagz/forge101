// This service is wired to work safely in client (browser) and server (Node) environments.
// Importing `@google/genai` directly at module top-level will break Vite's dev server
// because that package requires Node-builtins. To avoid that, we only dynamically
// import it when running in a server environment (i.e., when `window` is undefined).

type MaybeString = string | undefined;

export const getAIWorkoutAdvice = async (userGoal: string): Promise<string> => {
  // If running in the browser, return a safe, fast mock so the UI remains usable.
  if (typeof window !== 'undefined') {
    return `- Goal: ${userGoal}\n- Emphasize progressive overload and compound lifts.\n- Train 3x/week strength + 2x conditioning.\n- Prioritize sleep, protein, and mobility.`;
  }

  // Server-side: attempt to dynamically import the official SDK and call the model.
  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as MaybeString });

    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are "Forge AI," an elite fitness performance coach for Forge Performance Hub.\nYour tone is motivational, professional, concise, and scientific.\nKeep answers under 150 words and use short bullet points focused on strength, hypertrophy, performance, and recovery.`;

    const response = await ai.models.generateContent({
      model,
      contents: userGoal,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // SDK may return different shapes; prefer `.text` but fallback to string coercion
    return (response && (response as any).text) || String(response) || "I'm focusing on my reps right now. Ask me again in a moment.";
  } catch (error) {
    // Log on server and return user-friendly fallback
    // eslint-disable-next-line no-console
    console.error('Error fetching AI advice (server):', error);
    return 'Connection error. Our systems are currently under heavy load. Please try again later.';
  }
};