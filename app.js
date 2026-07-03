import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import eventsRouter from './routes/events.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Event scheduler API');
});
app.use('/events', eventsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
