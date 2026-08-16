import {
    getAppointmentService,
    getAppointmentsService
} from '../services/appointment.service.js';

export const getAppointment = (req, res) => {
    const appointmentNumber = req.params.appointmentNumber;

    const appointmentNumberRegex = /^APT-\d{9}$/;

    if (!appointmentNumberRegex.test(appointmentNumber)) {
        return res.status(400).json({
            message: 'Invalid appointment number format'
        });
    }

    const appointment = getAppointmentService(appointmentNumber);

    if (!appointment) {
        return res.status(404).json({
            message: 'Appointment not found'
        });
    }

    return res.status(200).json(appointment);
};

export const getAppointments = (req, res) => {
    const appointments = getAppointmentsService();

    return res.status(200).json(appointments);
};