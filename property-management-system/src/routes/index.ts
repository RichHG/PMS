import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.post('/login', indexController.login);
    app.get('/reservations', indexController.manageReservations);
    app.post('/bookings', indexController.createEditBooking);
}