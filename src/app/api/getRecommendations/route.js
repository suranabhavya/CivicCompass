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

    Please output a response as a list of JSON objects, where each object represents a card:

    Each card will cover a specific topic like walkability, safety, etc.
    Each card will have a title and a description.
    The title will be a string, and the description will be a short paragraph summarizing the insights.

    Example: 
    [
      {"title": "Walkability", "description": "The neighborhood is very walkable with a lot of pedestrian-friendly infrastructure."},
      {"title": "Safety", "description": "The area is generally safe, but there are some reports of petty theft."},
      {"title": "Livability", "description": "The neighborhood has a good mix of residential and commercial spaces, making it a great place to live."}
    ]
    
    Generate any cards you feel are relevant. Do not include any backticks or newlines. Ensure your output is immediately usable, valid JSON.
  `
  const llmResponse = await getLLMResponse(prompt);
  
  return NextResponse.json({ message: llmResponse }, { status: 200 });
}