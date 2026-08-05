import express from 'express';
import { getAppointment } from '../controllers/appointment.controller.js'

const appointmentRouter = express.Router();

appointmentRouter.get('/appointments/:appointmentNumber', getAppointment);

export default appointmentRouter;