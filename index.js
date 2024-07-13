import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './db.js';
import { Router } from './src/Routers/index.js';

// Configuring dotenv
dotenv.config();

// Initializing PORT
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

// Initializing Server
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
dbConnect();

// Adding router
app.use("/", Router)


// Listening to server
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});