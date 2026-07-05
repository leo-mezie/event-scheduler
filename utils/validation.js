// validation.js — Validates event input data

//checking to see if the title is missing or just empty space
export function validateEvent(data) {
  //checks if the event name exists , is a string and not an empty string 
  if (!data.eventName || typeof data.eventName !== "string" || data.eventName.trim() === "") {
    return { valid: false, error: "Event name is required and must be a non-empty string." };
  }

//checking to see if the date field exists and is of the correct format
  if (!data.eventDate || typeof data.eventDate !== "string") {
    return { valid: false, error: "Event date is required " };
  }

  //converts the date to a number and checks if it is a valid date 
  const parsed = new Date(data.eventDate);
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

//checking the id field but optional, only runs if id is provided
  if (data.id !== undefined && typeof data.id !== "string" && typeof data.id !== "number") {
    return { valid: false, error: "Unique ID must be a string or a number." };
  }

  //checking the createdAt field but optional, only runs if createdAt is provided
  if (data.createdAt !== undefined) {
    const created = new Date(data.createdAt);
    if (isNaN(created.getTime())) {
      return { valid: false, error: "createdAt must be a valid date format." };
    }
  }
  
  
  if (data.updatedAt !== undefined) {
    const updated = new Date(data.updatedAt);
    if (isNaN(updated.getTime())) {
      return { valid: false, error: "updatedAt must be a valid date format." };
    }
  }

  return { valid: true };
}


