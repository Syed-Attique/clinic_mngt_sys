import express from 'express';
import { createAppointmentRequest } from '../controllers/appointmentRequest.controller.js';

const appointmentRequestRouter = express.Router();

appointmentRequestRouter.post('/appointment-requests', createAppointmentRequest);

export default appointmentRequestRouter;