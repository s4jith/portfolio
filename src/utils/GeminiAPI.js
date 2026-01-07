// Gemini AI API integration - DISABLED
// API key should be stored in .env file as VITE_GEMINI_API_KEY
// This feature is currently disabled

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const queryGeminiAI = async (query) => {
    // Feature disabled - return error message
    if (!GEMINI_API_KEY) {
        throw new Error('AI Query feature is currently disabled');
    }

    const systemContext = `You are an AI assistant embedded in Sajith J's portfolio terminal. Sajith is a 3rd-year B.Tech AI/Data Science student specializing in Machine Learning, GenAI, RAG systems, and Computer Vision. Keep responses concise (max 150 words), technically accurate, and helpful. If asked about Sajith, use the context that he's an aspiring AI/ML engineer who has built projects like FlexiEV (EV Management with RAG), VerseVault (AI Library), MythSnare (Misinformation Detection), and Fire Detection systems. He's proficient in Python, PyTorch, TensorFlow, HuggingFace, and LangChain.`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: systemContext },
                            { text: `User query: ${query}` }
                        ]
                    }
                ],
                generationConfig: {
                    maxOutputTokens: 300,
                    temperature: 0.7,
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        }

        throw new Error('No response generated');
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
};
