import express from 'express';
import clients from '../model/clients.js';

const clientsRouter = express.Router();

clientsRouter.get('/', clients.getClients);
clientsRouter.post('/', clients.createClient);

export default clientsRouter;