import fs from 'fs/promises'; 
import path from 'path';
import { fileURLToPath } from 'url';
import { validateEvent } from '../utils/validation.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/events.json');


 const readData = async () => {  
try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data || '[]');
    }
    catch(error){
    console.error('Error reading data:', error);
}
}

  const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  console.log(error.message)
    
}

// get all events

export const getEvents = async (req, res) => {
  try{
  const events = await readData();
  res.status(200).json(events);
  }catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}


// create a new event

  export const createEvent = async (req, res) => {
  const { valid, message } = validateEvent(newEvent);
  try{
  if (!valid) return res.status(400).json({ message });
  const events = await readData();
  const newEvent = {
    id: Date.now().toString(),
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    eventTime: req.body.eventTime,
    eventDescription: req.body.eventDescription,
    eventLocation: req.body.eventLocation,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  events.push(newEvent);
  await writeData(events);
  res.status(201).json(newEvent);
}catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });

}
  }


  // get event by id
const getEventById = async (req, res) => {
  try{
  const events = await readData();//read db data first
  //check if event exists in db
  //by checking with the id passed in the request params
  const event = events.find(event => event.id === req.params.id); 
  if (!event) {
    return res.status(404).json({ error: 'Event not found' }); // Return 404 if event not found
  }
  res.status(200).json(event);
} catch (error) {
  console.error('Error fetching event:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
}


// DELETE an event by ID
// export async function deleteEvent(req, res) {
//   const events = await readData();
//   const filtered = events.filter(e => e.id !== req.params.id);

//   await writeData(filtered);
//   res.status(200).json({ message: 'Event deleted' });
// }

// DELETE expired events
export async function deleteExpiredEvents(req, res) {
  const events = await readData();
  const now = new Date();

  const filtered = events.filter(event => new Date(event.eventDate) > now);
  await writeData(filtered);

  res.status(200).json({ message: 'Expired events deleted' });
}