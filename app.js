import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import eventsRouter from './routes/events.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
<<<<<<< HEAD

=======
>>>>>>> 365c5e720a60887e9a1da46b119a9f619f2c3383
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Event scheduler API');
});
app.use('/events', eventsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
