export async function fetchDestinations() {
    const response = await fetch("../destinations.json");
    const data = await response.json();
    return data.destinations;
  }
  
  export async function fetchFlightPrices() {
    const response = await fetch("../flights.json");
    const data = await response.json();
    return data.flights;
  }