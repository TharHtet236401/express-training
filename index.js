import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { logger } from "./middlewares/logger.js";
import membersRouter from "./routes/api/members.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory

app.use("/api/members", membersRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
