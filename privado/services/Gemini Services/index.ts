import { GoogleGenAI } from "@google/genai";
import type { Workout } from '../../types';
import { formatWorkoutForSharing } from '../../utils/workoutUtils';

// As per strict guidelines, the API key must be sourced from process.env.API_KEY.
// Ensure your deployment environment is configured to provide this variable.
const apiKey = process.env.API_KEY;
if (!apiKey) {
    // In a real-world scenario, you might want to handle this more gracefully,
    // for example, by disabling AI features and showing a message to the user.
    // For this implementation, we throw an error to make the misconfiguration obvious.
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

/**
 * Generates a detailed explanation for a given workout using the Gemini API.
 * @param workout The workout object to be explained.
 * @returns A promise that resolves to a Markdown-formatted string with the explanation.
 */
export async function getWorkoutExplanation(workout: Workout): Promise<string> {
    if (!workout || workout.restDay) {
        return "Este es un día de descanso. ¡Aprovecha para recuperar!";
    }

    const workoutText = formatWorkoutForSharing(workout);

    const prompt = `
        Eres un entrenador experto en Hyrox y fitness funcional.
        Analiza el siguiente entrenamiento y proporciona una explicación detallada para el atleta.
        La explicación debe estar en español y usar formato Markdown.
        Incluye los siguientes puntos principales con títulos en negrita:
        1.  **Objetivo Principal del Día:** ¿Cuál es el foco principal? (ej. fuerza, resistencia, potencia, etc.)
        2.  **Estrategia y Consejos:** ¿Cómo debería abordar el atleta el entrenamiento? (ej. ritmos, descansos, técnica en ejercicios clave).
        3.  **Sensaciones Esperadas:** ¿Qué debería sentir el atleta durante y después del entreno?
        4.  **Importancia en el Plan:** ¿Cómo contribuye esta sesión al objetivo general de prepararse para un Hyrox?

        Aquí está el entrenamiento:
        ---
        ${workoutText}
        ---
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating workout explanation:", error);
        return "Hubo un error al generar la explicación. Por favor, asegúrate de que la API Key esté configurada correctamente e inténtalo de nuevo más tarde.";
    }
}
