// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './src/routes/posts.js'

const app = express();

app.use(express.json());
app.use('/auth',postRoutes)
// 
const CONNECTION_URL = 'mongodb+srv://IITJ:iitj@atlascluster.wajnvrs.mongodb.net/?retryWrites=true&w=majority';

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
