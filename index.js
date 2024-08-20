import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Emily Smith',
    email: 'emily.smith@example.com',
    status: 'active'
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    status: 'inactive'
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    status: 'active'
  },
  {
    id: 6,
    name: 'David Lee',
    email: 'david.lee@example.com',
    status: 'inactive'
  },
  {
    id: 7,
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    status: 'active'
  },
  {
    id: 8,
    name: 'William Davis',
    email: 'william.davis@example.com',
    status: 'inactive'
  },
  {
    id: 9,
    name: 'Ava Garcia',
    email: 'ava.garcia@example.com',
    status: 'active'
  },
  {
    id: 10,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    status: 'inactive'
  },
  {
    id: 11,
    name: 'Isabella Rodriguez',
    email: 'isabella.rodriguez@example.com',
    status: 'active'
  },
  {
    id: 12,
    name: 'Benjamin Thompson',
    email: 'benjamin.thompson@example.com',
    status: 'inactive'
  },
  {
    id: 13,
    name: 'Mia Sanchez',
    email: 'mia.sanchez@example.com',
    status: 'active'
  },
  {
    id: 14,
    name: 'Alexander White',
    email: 'alexander.white@example.com',
    status: 'inactive'
  },
  {
    id: 15,
    name: 'Charlotte Harris',
    email: 'charlotte.harris@example.com',
    status: 'active'
  },
  {
    id: 16,
    name: 'Ethan Walker',
    email: 'ethan.walker@example.com',
    status: 'inactive'
  },
  {
    id: 17,
    name: 'Abigail Russell',
    email: 'abigail.russell@example.com',
    status: 'active'
  },
  {
    id: 18,
    name: 'Liam Brooks',
    email: 'liam.brooks@example.com',
    status: 'inactive'
  },
  {
    id: 19,
    name: 'Sophia Jenkins',
    email: 'sophia.jenkins@example.com',
    status: 'active'
  },
  {
    id: 20,
    name: 'Noah Hall',
    email: 'noah.hall@example.com',
    status: 'inactive'
  }
];



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.get("/api/users", (req, res) => {

     res.send(users);
});

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});