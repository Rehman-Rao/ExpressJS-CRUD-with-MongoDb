import express from 'express';
const app = express();
const port = 2999;

// Import the Contact model
import contactRoutes from './routes/contacts.routes.js';
import { connectDB } from './config/database.js';


// Database connection
connectDB();

// its jus a comment for testing git commit and push


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



// First try Starts from here. 
// Another try for git commit and push.
