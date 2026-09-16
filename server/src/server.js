import dns from "dns";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dns.setServers(["1.1.1.1"]);

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});