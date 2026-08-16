const appointments = [
    {
        appointmentNumber: 'APT-000000001',
        status: 'Active',
        estimatedWaitMinutes: 15
    },
    {
        appointmentNumber: 'APT-000000002',
        status: 'Active',
        estimatedWaitMinutes: 8
    },
    {
        appointmentNumber: 'APT-000000003',
        status: 'Cancelled',
        estimatedWaitMinutes: 0
    }
];

export const getAppointmentService = (appointmentNumber) => {
    return appointments.find(appointment => appointment.appointmentNumber === appointmentNumber);
};

export const getAppointmentsService = () => {
    return appointments;
};

export const cancelAppointmentService = (appointmentNumber) => {
    const appointment = getAppointmentService(appointmentNumber);
    if (!appointment) {
        throw new AppError("Appointment not found", 404);
    }
    if (appointment.status === 'CANCELLED') {
        throw new AppError("Appointment is already cancelled", 409);
    }
    appointment.status = "CANCELLED";
    appointment.estimatedWaitMinutes = 0;
    return appointment;
}