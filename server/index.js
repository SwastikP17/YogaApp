const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const MONGO_DB=process.env.MONGO_DB;
const PORT = process.env.PORT || 3001;
// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  selectedBatch: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// POST endpoint for enrolling users
app.get('/', (req,res)=> {
    res.json({message:"Hello from server"});
});

app.post('/enroll', async (req, res) => {
  const { name, age, selectedBatch } = req.body;

  // Validate age between 18-65
  if (age < 18 || age > 65) {
    return res.status(400).json({ error: 'Age should be between 18 and 65.' });
  }

  try {
    // Create a new user instance
    const newUser = new User({ name, age, selectedBatch });

    // Save user data to MongoDB
    await newUser.save();

    // Simulate payment (mock function)
    const paymentStatus = CompletePayment(name, age, selectedBatch);

    // Return success response if payment succeeds
    if (paymentStatus === 'success') {
      return res.status(200).json({ message: 'Enrollment successful!' });
    } else {
      return res.status(500).json({ error: 'Payment failed. Enrollment unsuccessful.' });
    }
  } catch (error) {
    console.error('Error enrolling user:', error);
    return res.status(500).json({ error: 'Error enrolling user.' });
  }
});

// Mock function for payment (replace this with actual payment logic)
function CompletePayment(name, age, selectedBatch) {
  // Mock payment logic
  // This function would handle the payment process
  // For demonstration purposes, it returns 'success' in this example
  return 'success';
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
