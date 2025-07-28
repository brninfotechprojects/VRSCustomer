const express = require("express"); // ✅ no space here!
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const path = require("path");

const app = express();
const PORT = 6000;

const MONGO_URI =
  "mongodb+srv://manjunadhb:manjunadhb@vrs.69ivstk.mongodb.net/MVP?retryWrites=true&w=majority&appName=VRS";
// const MONGO_URI =
//   "mongodb+srv://gopiuppu:Gopiu@batch2411cluster.xa8nb.mongodb.net/CUSTOMERUI?retryWrites=true&w=majority&appName=Batch2411Cluster";

// Middleware
app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname, "client", "build")));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../dist"))); // ← CORRECTED

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist", "index.html")); // ← CORRECTED
// });

// Routes
app.use("/api/auth", authRoutes);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
// DB Connection & Server Start
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ MongoDB Error:", err));
