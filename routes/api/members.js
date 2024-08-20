import express from "express";
import users from "../../Members.js";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../../middlewares/logger.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {

  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const user = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };
  try {
    users.push(user);
  } catch (error) {
    console.error("Error pushing user:", error);
    return res.status(500).send("Internal Server Error");
  }
  res.send(user);
});

router.put("/:userId", (req, res) => {
  const user = users.filter((user) => user.id === parseInt(req.params.userId));
  if (user.length === 0) {
    res
      .status(404)
      .json({ message: `User with id ${req.params.userId} not found` });
  }
  const updatedUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };
  users.forEach((user) => {
    if (user.id === parseInt(req.params.userId)) {
      user.name = updatedUser.name? updatedUser.name : user.name;
      user.email = updatedUser.email? updatedUser.email : user.email;
      user.status = updatedUser.status? updatedUser.status : user.status;

      res.send(user);
    }
   
  });

  
});

router.get("/:userId", (req, res) => {
  const user = users.filter((user) => user.id === parseInt(req.params.userId));
  if (user.length === 0) {
    res
      .status(404)
      .json({ message: `User with id ${req.params.userId} not found` });
  }
  res.send(user);
});

router.delete("/:userId", (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.userId));
  
  if (index === -1) {
    return res.status(404).json({ message: `User with id ${req.params.userId} not found` });
  }
  
  const deletedUser = users.splice(index, 1); // Remove the user by index
  res.send(deletedUser); // Send the deleted user as a response
});
export default router;