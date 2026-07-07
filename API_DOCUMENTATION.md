Event Scheduler API Documentation
Group 5 TechCrush Backend Mini Project

Base URL:* http://localhost:3000

---

 1. We create a New Event
  *Method:* POST
   *URL Path:* /events
   *What to send (JSON Body):*
json
{
  "eventName": "Event Schedule",
  "eventDate": "2026-07-20",
  "eventDescription": "Testing our project endpoints"
}

   *Success Response (201 Created):* Returns the created event data along with its new id.
   *Error Response (400 Bad Request):* Happens if eventName or eventDate is empty.

---
 2. Get All Events
   *Method:* GET
   *URL Path:* /events
   *Success Response (200 OK):* Returns a list of all events in the system.

---

 3. Get One Specific Event
   *Method:* GET
   *URL Path:* /events/:id (Example: /events/1)
   *Success Response (200 OK):* Returns the details of that single event.
   *Error Response (404 Not Found):* Happens if the event ID does not exist.

---
 4. Update an Event
   *Method:* PUT
   *URL Path:* /events/:id (Example: /events/1)
   *What to send (JSON Body):* Send the updated fields you want to change.
  *Success Response (200 OK):* Returns the newly updated event details.

---

 5. Delete an Event
   *Method:* DELETE
   *URL Path:* /events/:id (Example: /events/1)
   *Success Response (200 OK):* Confirms the event was successfully deleted.
*