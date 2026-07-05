// validation.js — Validates event input data

//checking to see if the title is missing or just empty space
export function validateEvent(data) {
  if (!data.eventName || typeof data.eventName !== "string" || data.eventName.trim() === "") {
    return { valid: false, error: "Event name is required and must be a non-empty string." };
  }

  //checking to see if the date field exists and is of the correct format
  if (!data.eventDate || typeof data.eventDate !== "string") {
    return { valid: false, error: "Event date is required " };
  }

  //converts the date to a number and checks if it is a valid date 
  const parsed = new Date(data.date);
  if (isNaN(parsed.getTime())) {
    return { valid: false, error: "Date must be a valid date format (e.g. 2026-07-15T10:00:00Z)." };
  }

  //checking the description field but optional, only runs if description is provided   
  if (data.description !== undefined && typeof data.description !== "string") {
    return { valid: false, error: "Description must be a string." };
  }

  //checking the location field but optional, only runs if location is provided
  if (data.eventLocation !== undefined && typeof data.eventLocation !== "string") {
    return { valid: false, error: "Event location must be a string." };
  }

  return { valid: true };
}


