export function loadBookings() {
    const data = localStorage.getItem("bookings");
    return data ? JSON.parse(data) : [];
  }
  
  export function saveBooking(bookings) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }