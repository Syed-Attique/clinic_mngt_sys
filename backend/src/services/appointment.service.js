export const getAppointmentService = (appointmentNumber) => {
    if (appointmentNumber === 'APT-000000001'){
        return{
            appointmentNumber: appointmentNumber,
            status: 'Active',
            estimatedWaitMinutes: 15
        }
    }
    else{
        return null
    }
}
