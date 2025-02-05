import { fetchDestinations, fetchFlightPrices } from './api.js';
import { populateDestinations, displayBookings } from './dom.js';
import { loadBookings, saveBooking } from './storage.js';
import { filterByDestination, sortBookings } from './filters.js';

let bookings = loadBookings();
let flightPrices = [];

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  COP: 4000,
  ARS: 1053
};

document.addEventListener("DOMContentLoaded", async () => {
  const destinationSelect = document.getElementById("destination");
  const destinations = await fetchDestinations();
  populateDestinations(destinationSelect, destinations);
  flightPrices = await fetchFlightPrices();
  displayBookings(bookings);
});

document.getElementById("tripType").addEventListener("change", function () {
  const roundTripOptions = document.getElementById("roundTripOptions");
  roundTripOptions.style.display = this.value === "roundTrip" ? "block" : "none";
});

document.getElementById("currency").addEventListener("change", function () {
  displayBookings(bookings);
});

document.getElementById("flightForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const tripType = document.getElementById("tripType").value;
  const date = document.getElementById("date").value;
  const returnDate = document.getElementById("returnDate").value;
  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;
  const amount = document.getElementById("amount").value;
  const booking = {
    tripType,
    date,
    returnDate: tripType === "roundTrip" ? returnDate : null,
    name,
    destination,
    amount: parseInt(amount, 10)
  };
  bookings.push(booking);
  saveBooking(bookings);
  displayBookings(bookings);
  this.reset();
});

document.getElementById("filterByDestination").addEventListener("click", () => {
  const destination = prompt("Ingrese el destino para filtrar:");
  const filteredBookings = filterByDestination(bookings, destination);
  displayBookings(filteredBookings);
});

document.getElementById("sortByDate").addEventListener("click", () => {
  const sortedBookings = sortBookings(bookings, "date");
  displayBookings(sortedBookings);
});

document.getElementById("sortByTickets").addEventListener("click", () => {
  const sortedBookings = sortBookings(bookings, "amount");
  displayBookings(sortedBookings);
});

export function getFlightPrice(destination) {
  const flight = flightPrices.find(f => f.destination === destination);
  const currency = document.getElementById("currency").value;
  const rate = currencyRates[currency];
  return flight ? flight.price * rate : 0;
}

export function deleteBooking(index) {
  bookings.splice(index, 1);
  saveBooking(bookings);
  displayBookings(bookings);
}

export function editBooking(index) {
  const booking = bookings[index];
  document.getElementById("tripType").value = booking.tripType;
  document.getElementById("date").value = booking.date;
  document.getElementById("returnDate").value = booking.returnDate;
  document.getElementById("name").value = booking.name;
  document.getElementById("destination").value = booking.destination;
  document.getElementById("amount").value = booking.amount;
  bookings.splice(index, 1); 
  saveBooking(bookings);
  displayBookings(bookings);
}

window.deleteBooking = deleteBooking;
window.editBooking = editBooking;