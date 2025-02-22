import { NextResponse } from "next/server";
import { getLLMResponse } from "@/lib/llm";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get('prompt');
  const llmResponse = await getLLMResponse(prompt)
  return NextResponse.json({ message: llmResponse }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
