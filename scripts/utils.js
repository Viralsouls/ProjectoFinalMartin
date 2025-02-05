export function validateDate(date) {
    const currentDate = new Date();
    const validDate = new Date(date);
    return !isNaN(validDate.getTime()) && validDate >= currentDate;
  }
  
  export function validateName(name) {
    return name && name.trim() !== "";
  }
  
  export function validateAmount(amount) {
    return !isNaN(amount) && amount > 0;
  }