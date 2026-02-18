const express = require("express");
const app = express();
require("dotenv").config();

// your routes here
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// use PORT from .env or default
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
});
