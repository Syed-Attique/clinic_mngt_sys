import { createAppointmentRequestService } from "../services/appointmentRequest.service.js";

export const createAppointmentRequest = (req, res) => {
    
    const requestData = req.body;

    if (!requestData) {
        return res.status(400).json({
            message: "Request body is required"
        });
    };

    const appointmentNumberRegex = /^APT-\d{9}$/;
    if (!appointmentNumberRegex.test(requestData.appointmentNumber)) {
        return res.status(400).json({
            message: "Invalid appointment number format"
        });
    };

    const validRequestTypes = ['CANCEL', 'RESCHEDULE'];
    if (!validRequestTypes.includes(requestData.requestType)) {
        return res.status(400).json({
            message: "Invalid request type"
        });
    };

    if (requestData.requestType === 'RESCHEDULE') {
        if(requestData.requestedDateTime == null){
            return res.status(400).json({
                message: "Requested date and time is required for reschedule request"
            });
        };

        const isoDateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/;
        if (!isoDateTimeRegex.test(requestData.requestedDateTime)) {
            return res.status(400).json({
                message: "Invalid requested date and time format"
            });
        };


        const requestedDate = new Date(requestData.requestedDateTime);

        if (Number.isNaN(requestedDate.getTime())) {
            return res.status(400).json({
                message: "Invalid requested date and time"
            });
        }
    };

    const appointmentRequest = createAppointmentRequestService(requestData)
    return res.status(201).json(appointmentRequest);
};
