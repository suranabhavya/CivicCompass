import { getCoordinates } from "@/lib/address";
import { NextResponse } from "next/server";
import { getLLMResponse } from "@/lib/llm";
import { getPOI } from "@/lib/poi";
import { getViolations } from "@/lib/violations";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');
  const type = searchParams.get('type');

  const coordinates = await getCoordinates(address);
  const poi = await getPOI(coordinates.lat, coordinates.lon);
  const violations = await getViolations(coordinates.lat, coordinates.lon);
  const prompt = `
    The user is looking at ${address}.
    Here are some points of interest nearby:
    ${JSON.stringify(poi.elements)}

    Here are some public code violations nearby:
    ${JSON.stringify(violations)}

    Please provide some insights about this location for the viability of opening a new business.

    The user is interested in opening a ${type} in this location.

    Is there a lot of competition? Is it a good place to open a business? What are the pros and cons?
    Does the area have a lot of foot traffic? 
    Are there offices or universities or other large businesses nearby that could be potential customers?
    What is the demographic of the area?

    How is this area for opening a ${type} business? For example, it would not be great to open a bar in a very residential area.

    Provide insights like those to the best of your ability.

    Please output a response as a list of JSON objects, where each object represents a card:

    Each card will cover a specific topic like competition, foot traffic, etc.
    Each card will have a title and a description.
    The title will be a string, and the description will be a short paragraph summarizing the insights.

    Example: 
    [
     {"title": "Competition", "description": "There are a lot of similar businesses in the area, but there is still room for growth."},
     {"title": "Foot Traffic", "description": "The area has a lot of foot traffic, making it a great place to open a business."},
     {"title": "Demographics", "description": "The area has a diverse population, making it a great place to open a business." 
    ]
    
    Generate any cards you feel are relevant. Do not include any backticks or newlines. Ensure your output is immediately usable, valid JSON.
  `
  const llmResponse = await getLLMResponse(prompt);
  
  return NextResponse.json({ message: llmResponse }, { status: 200 });
}