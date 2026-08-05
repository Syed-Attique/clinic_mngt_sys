import express from 'express';
import healthRouter from './routes/health.routes.js';
import appointmentRouter from './routes/appointment.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1', healthRouter);
app.use('/api/v1', appointmentRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});