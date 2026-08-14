import { getAppointmentService } from "./appointment.service.js";
import { AppError } from "../errors/AppError.js";

const appointmentRequests = [];
let nextRequestNumber = 1;

export const createAppointmentRequestService = (requestData) => {

    const appointment = getAppointmentService(requestData.appointmentNumber);
    if (!appointment) {
        throw new AppError("Appointment not found", 404);
    };

    if (appointment.status === 'Cancelled') {
        throw new AppError("Appointment is already cancelled", 409);
    };

    const existingRequest = appointmentRequests.find(
        request =>
            request.appointmentNumber === requestData.appointmentNumber &&
            request.status === 'PENDING'
    );

    if (existingRequest) {
        throw new AppError("A pending request already exists for this appointment", 409);
    };

    const requestId =
    `REQ-${String(nextRequestNumber).padStart(9, "0")}`;
    nextRequestNumber += 1;

    const appointmentRequest = {
        requestId: requestId,
        appointmentNumber: requestData.appointmentNumber,
        requestType: requestData.requestType,
        reason: requestData.reason,
        requestedDateTime: requestData.requestedDateTime ?? null,
        status: 'PENDING',
        createdAt: new Date(),
        updatedAt: new Date()
    };

    appointmentRequests.push(appointmentRequest);
    return appointmentRequest;

}