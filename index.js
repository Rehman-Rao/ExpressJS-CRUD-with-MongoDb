import express from 'express';
const app = express();
const port = 2999;

// Import the Contact model
import contactRoutes from './routes/contacts.routes.js';
import { connectDB } from './config/database.js';


// Database connection
connectDB();



// Middle wares
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Routes
// Use the contact routes
app.use("/", contactRoutes);

// Start Server 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// New Comments here
// New Comment for testing
// Testing for git sync feature



