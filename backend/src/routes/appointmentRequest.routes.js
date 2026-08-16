import express from 'express';
import { createAppointmentRequest, processAppointmentRequest } from '../controllers/appointmentRequest.controller.js';

const appointmentRequestRouter = express.Router();

appointmentRequestRouter.post('/appointment-requests', createAppointmentRequest);
appointmentRequestRouter.patch('/appointment-requests/:requestId', processAppointmentRequest);

export default appointmentRequestRouter;