import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import providerRoutes from './routes/providers';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/providers', providerRoutes);

mongoose.connect('mongodb://localhost:27017/funeral-planner').then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error: any) => {
  console.error('Database connection error:', error);
});