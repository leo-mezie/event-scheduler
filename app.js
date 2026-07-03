import express from 'express';
import path from 'path';


const app = express();
const PORT = 3000;


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Event Scheduling API');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
