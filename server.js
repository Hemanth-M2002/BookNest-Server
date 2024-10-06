const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const userRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors()); 
app.use(
  cors({
    origin: "https://booknest-server-kju1.onrender.com",
  })
);

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
