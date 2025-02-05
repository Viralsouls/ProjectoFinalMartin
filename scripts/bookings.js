import { getFlightPrice } from './app.js';

export function populateDestinations(selectElement, destinations) {
  destinations.forEach(destination => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    selectElement.appendChild(option);
  });
}

export function displayBookings(bookingsToDisplay) {
  const bookingList = document.getElementById("bookingList");
  bookingList.innerHTML = "";
  if (bookingsToDisplay.length === 0) {
    bookingList.innerHTML = "<p>No hay reservas disponibles.</p>";
    return;
  }
  bookingsToDisplay.forEach((booking, index) => {
    const flightPrice = getFlightPrice(booking.destination);
    const totalPrice = flightPrice * booking.amount * (booking.tripType === "roundTrip" ? 2 : 1);
    const div = document.createElement("div");
    div.classList.add("booking-card", "fade-in");
    div.innerHTML = `
      <h3>${booking.destination}</h3>
      <p><strong>Pasajero:</strong> ${booking.name}</p>
      <p><strong>Fecha de Ida:</strong> ${booking.date}</p>
      ${booking.returnDate ? `<p><strong>Fecha de Vuelta:</strong> ${booking.returnDate}</p>` : ""}
      <p><strong>Tiquetes:</strong> ${booking.amount}</p>
      <p><strong>Precio Total:</strong> $${totalPrice}</p>
    `;
    bookingList.appendChild(div);
  });
}