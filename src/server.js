import express from 'express';
import wspRoutes from './routes/wsp.routes.js'
const app = express();

app.use(express.json());

app.use("/api/v1", wspRoutes);

const port = process.env.PORT || 3000;  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
