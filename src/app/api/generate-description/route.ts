import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that generates a description for a given job based on its requirements and target audience. Your goal is to create a detailed and engaging description that will capture the essence of the job and make it stand out from the competition. You should also consider the target audience and tailor the description to their needs and preferences. Please provide a concise and informative description that highlights the key requirements and benefits of the job, while also addressing any potential concerns or objections that the target audience may have. Remember to keep the description engaging and easy to read, and to use a conversational tone that reflects the brand's voice and personality. Good luck!",
      },
      ...messages,
    ],
    maxTokens: 200,
  });

  return result.toDataStreamResponse();
}
