// this script will take in an address and return the latitude and longitude of that address

export async function getCoordinates(address) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`
    );
    const coordinates = await response.json();
    return coordinates;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
}