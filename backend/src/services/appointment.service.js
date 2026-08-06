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

export const getAppointmentService = (
    appointmentNumber
) => {
    return appointments.find(
        appointment =>
            appointment.appointmentNumber ===
            appointmentNumber
    );
};

export const getAppointmentsService = () => {
    return appointments;
};