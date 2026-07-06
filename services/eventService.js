import fs from 'fs/promises'; 
import path from 'path';
import { fileURLToPath } from 'url';
import { validateEvent } from '../utils/validation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/events.json');

const readData = async () => {
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data || '[]');
};

const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
};

export const getEvents = async (req, res, next) => {
  try {
    const events = await readData();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const events = await readData();
    const event = events.find(e => e.id === req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const { valid, error } = validateEvent(req.body);
    if (!valid) return res.status(400).json({ error });
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
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const { valid, error } = validateEvent(req.body);
    if (!valid) return res.status(400).json({ error });
    const events = await readData();
    const index = events.findIndex(e => e.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Event not found' });
    }
    events[index] = {
      ...events[index],
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      eventTime: req.body.eventTime,
      eventDescription: req.body.eventDescription,
      eventLocation: req.body.eventLocation,
      updatedAt: new Date().toISOString()
    };
    await writeData(events);
    res.status(200).json(events[index]);
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const events = await readData();
    const index = events.findIndex(e => e.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Event not found' });
    }
    events.splice(index, 1);
    await writeData(events);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    next(error);
  }
};



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