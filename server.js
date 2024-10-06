const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const userRoutes = require("./routes/bookRoutes");
const allowedOrigins = ['https://book-nest-chi.vercel.app', 'http://localhost:3000'];


const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
//mongodb connection
mongoose.connect(
  "mongodb+srv://hemanthvijay02:XQMwVhpa40X2cFQ5@book-cluster.sdxv3.mongodb.net/booknest",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
