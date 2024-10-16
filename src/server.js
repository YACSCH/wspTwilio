import express from 'express';
import wspRoutes from './routes/wsp.routes.js'
const app = express();

app.use(express.json());

app.use("/api/v1", wspRoutes);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})