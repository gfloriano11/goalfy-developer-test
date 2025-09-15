import express from 'express';
import clients from '../model/clients.js';

const clientsRouter = express.Router();

clientsRouter.get('/', clients.getClients);
clientsRouter.post('/', clients.createClient);
clientsRouter.put('/:id', clients.editClient);
clientsRouter.delete('/:id', clients.deleteClient);

export default clientsRouter;