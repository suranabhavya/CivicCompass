// import { NextResponse } from 'next/server';

// export async function GET(req) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const placeId = searchParams.get("place_id");
//         console.debug(`place id: ${placeId}`)

//         if (!placeId) {
//             return NextResponse.json({ error: "Missing place_id parameter" }, { status: 400 });
//         }

//         const apiKey = process.env.GOOGLE_API_KEY;
//         const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
//         url.searchParams.append("place_id", placeId);
//         url.searchParams.append("key", apiKey);

//         const response = await fetch(url.toString());
//         const data = await response.json();

//         if (!data.result || !data.result.address_components) {
//             return NextResponse.json({ error: "Invalid response from Google API" }, { status: 500 });
//         }

//         // Extract the postal code
//         const addressComponents = data.result.address_components;
//         const postalCodeComponent = addressComponents.find(component =>
//             component.types.includes("postal_code")
//         );

//         if (!postalCodeComponent) {
//             return NextResponse.json({ error: "Postal code not found" }, { status: 404 });
//         }

//         const zipcode = postalCodeComponent.long_name;
//         console.debug(`zipcode is: ${zipcode}`)

//         // Fetch crime data
//         const crimeApiUrl = `https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Boston_Incidents_View/FeatureServer/0/query?outFields=*&where=ZIP%3D'${zipcode}'%20AND%20YEAR%3D2023&f=geojson`;
//         const crimeResponse = await fetch(crimeApiUrl);
//         const crimeData = await crimeResponse.json();

//         if (!crimeData.features || crimeData.features.length === 0) {
//             return NextResponse.json({ error: "No crime data found for this zipcode" }, { status: 404 });
//         }

//         // Count top 5 crimes
//         const crimeCounts = {};
//         crimeData.features.forEach(feature => {
//             const offenseCode = feature.properties.OFFENSE_CODE;
//             crimeCounts[offenseCode] = (crimeCounts[offenseCode] || 0) + 1;
//         });

//         const sortedCrimes = Object.entries(crimeCounts)
//             .sort((a, b) => b[1] - a[1])
//             .slice(0, 5)
//             .map(([code, count]) => ({
//                 offenseCode: code,
//                 count,
//             }));

//         return NextResponse.json({ zipcode, topCrimes: sortedCrimes });
//     } catch (error) {
//         console.error("Error fetching zipcode or crime data:", error);
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
// }


import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const placeId = searchParams.get("place_id");

        if (!placeId) {
            return NextResponse.json({ error: "Missing place_id parameter" }, { status: 400 });
        }

        const apiKey = process.env.GOOGLE_API_KEY;
        const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
        url.searchParams.append("place_id", placeId);
        url.searchParams.append("key", apiKey);

        const response = await fetch(url.toString());
        const data = await response.json();

        if (!data.result || !data.result.address_components) {
            return NextResponse.json({ error: "Invalid response from Google API" }, { status: 500 });
        }

        const postalCodeComponent = data.result.address_components.find(component => component.types.includes("postal_code"));

        if (!postalCodeComponent) {
            return NextResponse.json({ error: "Postal code not found" }, { status: 404 });
        }

        const zipcode = postalCodeComponent.long_name;
        const crimeApiUrl = `https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Boston_Incidents_View/FeatureServer/0/query?outFields=*&where=ZIP='${zipcode}'%20AND%20YEAR=2023&f=geojson`;
        const crimeResponse = await fetch(crimeApiUrl);
        const crimeData = await crimeResponse.json();

        const crimeCounts = {};
        crimeData.features?.forEach(feature => {
            const offenseDesc = feature.properties.OFFENSE_DESC;
            crimeCounts[offenseDesc] = (crimeCounts[offenseDesc] || 0) + 1;
        });

        return NextResponse.json({ zipcode, topCrimes: Object.entries(crimeCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([desc, count]) => ({ offenseDesc: desc, count })) });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}