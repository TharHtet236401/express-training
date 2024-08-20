import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import users from "./Members.js";

import { logger } from "./middlewares/logger.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
