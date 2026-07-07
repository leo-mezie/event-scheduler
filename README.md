 Event Scheduler API
*TechCrush Backend Mini Project - Group 5

This repository contains the backend implementation for a local Event Scheduler API. The system handles standard CRUD actions for calendar management and filters invalid data payloads through a structural validation.

---

  Group 5 Team Members & Task Assignments

  *Leonard Chimezie Okwuosah*
     Tasks: Creating GitHub repository, adding collaborators, implementing createEvent, getEvents, deleteExpiredEvents, and getEventById.

   *Marcus Oliver Zoryii*
    *   Tasks: Structuring and configuring the routes handler file (routes/event.js).

   *Mercy Ikubor*
    *   Tasks: Building the core database service layers (services/eventService.js).

   *Michael Samuel Oche*
    *   Tasks: Implementing the endpoint function execution logic for deleteEvent.

   *Napoleon Asenso*
    *   Tasks: Setting up the core backend server initialization configuration (server.js/app.js).

   *Nash Kwadjo Lucas*
    *Tasks: Developing data checking rule mechanisms for request sanitization (utils/validation.js).

   *Ngozi Jessica Manukwor*
    Tasks: Finalizing project testing, verifying API endpoint functionality, and drafting the project documentation (README.md).

---

 Local Environment Setup

To boot this application environment locally for validation testing:

1. Clone or download this project workspace repository folder.
2. Open your terminal inside the root directory and install dependencies:
  Called: npm install
   
3. Start the application runtime server execution:
   By typing: node app.js
   

*Base Gateway URL:* http://localhost:3000

---

 API Endpoints Reference Specification

   1. Create a New Event
   *HTTP Method:* POST
   *URL Path Extension:* /events
   *Data Payload Requirement (JSON Body):*
json
{
  "eventName": "Event Schedule",
  "eventDate": "2026-07-20",
  "eventDescription": "Testing our project endpoints"
}

  *Successful Status Response:* 201 Created
   *Failed Validation Status Response:* 400 Bad Request

---

 2. Get All Scheduled Records
   *HTTP Method:* GET
   *URL Path Extension:* /events
   *Successful Status Response:* 200 OK (Returns an array collection log of items).

---

 3. Get One Specific Event
  *HTTP Method:* GET
   *URL Path Extension:* /events/:id (/events/1783356825649)
   *Successful Status Response:* 200 OK
   *Missing Resource Status Response:* 404 Not Found

---

 4. Update an Event Record
   *HTTP Method:* PUT
   *URL Path Extension:* /events/:id (/events/1783356825649)
   *Data Payload Requirement (JSON Body):*
json
{
  "eventName": "Event Schedule Updated",
  "eventDate": "2026-07-20",
  "eventDescription": "Testing our project endpoints"
}

   *Successful Status Response:* 200 OK

---

 5. Remove an Event Entry
  *HTTP Method:* DELETE
   *URL Path Extension:* /events/:id (/events/1783356825649)
   *Successful Status Response:* 200 OK