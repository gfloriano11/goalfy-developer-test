import express from 'express';
import cors from 'cors';
import clientsRouter from '../router/clients.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/clients', clientsRouter);

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
})