import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const zipCode = searchParams.get("zip");

  if (!zipCode) {
    return NextResponse.json({ error: "ZIP code is required" }, { status: 400 });
  }

  // Define the API URL (replace with actual API endpoint)
  const API_URL = `https://data.boston.gov/api/3/action/datastore_search_sql`;

  try {
    const response = await fetch(`${API_URL}?where=violation_zip='${zipCode}'`);
    const data = await response.json();

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }

    // Count the top 5 most frequent violations
    const violationCounts = {};
    data.forEach((item) => {
      const description = item.description || "Unknown";
      violationCounts[description] = (violationCounts[description] || 0) + 1;
    });

    // Sort and get top 5 violations
    const sortedViolations = Object.entries(violationCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return NextResponse.json({ violations: sortedViolations });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
