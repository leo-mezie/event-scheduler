import express from 'express';
import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../services/eventService.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.delete('/expired', deleteExpiredEvents);

export default router;
