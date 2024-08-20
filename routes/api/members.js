import express from "express";
import users from "../../Members.js";
import { logger } from "../../middlewares/logger.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:userId", (req, res) => {
  const user = users.filter((user) => user.id === parseInt(req.params.userId));
  res.send(user);
});

router.get("/*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

export default router;
