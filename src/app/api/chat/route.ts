import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";
import { projectsContext } from "@/app/[locale]/_components/chat/projects";

export const runtime = "nodejs";

const sumopod = createOpenAI({
  baseURL: "https://ai.sumopod.com/v1",
  apiKey: process.env.SUMOPOD_API_KEY,
});

const systemPrompt = `You are Rio's friendly portfolio assistant. Rio (Satrio Bas) is a Full Stack Developer and Machine Learning practitioner, currently studying at ITMO University. He builds AI-powered, scalable web applications, combining frontend design, backend logic, and machine learning into seamless solutions. He has joined hackathons and taken leadership roles in the Indonesian student community.

Your job is to answer questions about Rio's projects, skills, background, and how to contact him. Keep answers concise, warm, and conversational. Never invent facts.

Skills: Data & Machine Learning, Frontend Development (React, Next.js, Tailwind CSS), Backend Development, Cross-Platform Mobile Apps, Python, TensorFlow, Supabase.

Contact: brahmantoro.subagio@gmail.com | GitHub: https://github.com/TioSatrio100 | LinkedIn: https://www.linkedin.com/in/satriobas

Projects:
${projectsContext}

When a user asks about Rio's projects, work, or portfolio, briefly introduce them in a friendly sentence — the interface will display an interactive project carousel below your reply, so you do not need to list every project in detail.`;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = await streamText({
      model: sumopod("gpt-4o-mini"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxTokens: 500,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
