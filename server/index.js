import express from 'express';
import mongoose from 'mongoose';
import auth from './src/routes/auth.js';
import cors from 'cors'; // Import the cors package

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use('/auth', auth);

const CONNECTION_URL = 'mongodb+srv://khushalsindhav26:iitj@iit.axzzmf1.mongodb.net/iit';

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
