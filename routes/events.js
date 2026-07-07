import express from 'express';
<<<<<<< HEAD
import { getEvents, createEvent, updateEvent, deleteEvent, getEventById, deleteExpiredEvents } from '../services/eventService.js';
=======
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent, deleteExpiredEvents } from '../services/eventService.js';

>>>>>>> 365c5e720a60887e9a1da46b119a9f619f2c3383

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.delete('/expired', deleteExpiredEvents);

export default router;
