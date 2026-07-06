import fs from 'fs/promises'; 
import path from 'path';
import { fileURLToPath } from 'url';
import { validateEvent } from '../utils/validation.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/events.json');


try {
    
    const readData = async () => {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data || '[]');
    }
}catch(error){
    console.error('Error reading data:', error);
}

  const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  console.log(error.message)
    
}

// get all events
try{
export const getEvents = async (req, res) => {
  const events = await readData();
  res.status(200).json(events);
};
}catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}

// create a new event
try{
export const createEvent = async (req, res) => {
  const { valid, message } = validateEvent(req.body);
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
}

}catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });

}

// update an existing event
export const updateEvent = async (req, res) => {
  const { valid, message } = validateEvent(req.body);
  if (!valid) return res.status(400).json({ message });

  const events = await readData();
  const eventIndex = events.findIndex((e) => e.id === req.params.id);

  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  events[eventIndex] = {
    ...events[eventIndex],
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    eventTime: req.body.eventTime,
    eventDescription: req.body.eventDescription,
    eventLocation: req.body.eventLocation,
    updatedAt: new Date().toISOString()
  };

  await writeData(events);
  res.status(200).json(events[eventIndex]);
};