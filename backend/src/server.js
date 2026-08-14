import express from 'express';
import healthRouter from './routes/health.routes.js';
import appointmentRouter from './routes/appointment.routes.js';
import appointmentRequestRouter from './routes/appointmentRequest.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1', healthRouter);
app.use('/api/v1', appointmentRouter);
app.use('/api/v1', appointmentRequestRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});