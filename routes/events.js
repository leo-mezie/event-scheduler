import express from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent, getEventById, deleteExpiredEvents } from '../services/eventService.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/expired', deleteExpiredEvents);
router.delete('/:id', deleteEvent);
export default router;
