import express from 'express';
import {
    getAppointment,
    getAppointments
} from '../controllers/appointment.controller.js';

const appointmentRouter = express.Router();

appointmentRouter.get('/appointments', getAppointments);

appointmentRouter.get('/appointments/:appointmentNumber', getAppointment);

export default appointmentRouter;