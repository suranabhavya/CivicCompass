import { NextResponse } from "next/server";
import { getViolations } from "@/lib/violations";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const violationsList = await getViolations(lat, lon);
  
  return NextResponse.json({ message: violationsList }, { status: 200 });
}