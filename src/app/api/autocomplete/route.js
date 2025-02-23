import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get('input');

  if (!input) {
    return NextResponse.json({ error: 'Missing input parameter' }, { status: 400 });
  }

  try {
    // Use your server-side API key from .env.local
    const apiKey = process.env.GOOGLE_API_KEY;
    console.debug(`api key: ${apiKey}`);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input
    )}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching autocomplete data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}