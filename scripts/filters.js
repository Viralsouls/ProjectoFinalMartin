export function filterByDestination(bookings, destination) {
    return bookings.filter(b => b.destination === destination);
  }
  
  export function sortBookings(bookings, field) {
    return [...bookings].sort((a, b) => {
      if (field === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (field === "amount") {
        return b.amount - a.amount;
      }
      return 0;
    });
  }