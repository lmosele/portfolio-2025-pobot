import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-4o-mini'),
        messages,
        temperature: 0.7,
        // max_tokens: 500,
    });

    return result.toDataStreamResponse();
}