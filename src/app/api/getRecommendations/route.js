import { getCoordinates } from "@/lib/address";
import { NextResponse } from "next/server";
import { getLLMResponse } from "@/lib/llm";
import { getPOI } from "@/lib/poi";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  const coordinates = await getCoordinates(address);
  const poi = await getPOI(coordinates.lat, coordinates.lon);
  const prompt = `
    The user is looking at ${address}.
    Here are some points of interest nearby:
    ${JSON.stringify(poi.elements)}

    Please provide some insights about this neighbood/location based on the points of interest.

    Is it walkable? Is it safe? Is it a good place to live? What are the pros and cons?
  `
  const llmResponse = await getLLMResponse(prompt);
  
  return NextResponse.json({ message: llmResponse }, { status: 200 });
}