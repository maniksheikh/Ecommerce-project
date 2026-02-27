require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
global.app = app;

// Mongoose Connection
const mongoDbUri = process.env.MONGO_DB_URI;
const dbName = process.env.MONGO_DB;

mongoose.connect(mongoDbUri, {
    dbName: dbName,
}).then(() => {
    console.log("Mongoose connected to MongoDB");
}).catch((err) => {
    console.error("Mongoose connection error:", err);
});

app.use(express.json());

app.set("trust proxy", true);
app.use('/uploads', express.static('uploads'));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map(o => o.trim())
    .filter(o => o.length > 0);

// Always allow standard dev ports if not specified
if (!allowedOrigins.includes("http://localhost:3000")) allowedOrigins.push("http://localhost:3000");
if (!allowedOrigins.includes("http://localhost:5173")) allowedOrigins.push("http://localhost:5173");

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            const isAllowed = allowedOrigins.some(allowed => origin.toLowerCase() === allowed.toLowerCase());
            if (!isAllowed) {
                const msg = `The CORS policy for ${origin} does not allow access from the specified Origin.`;
                const err = new Error(msg);
                err.status = 403;
                return callback(err, false);
            }
            return callback(null, true);
        },
    })
);

app.use("/api/persion", require("./api/persion"));
// app.use("/api/invoice", require("./api/invoice"));
app.use("/api/products", require("./api/products"));

// Update the global error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message,
        status: status
    });
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log("Server started at port : ", port);
});

server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(
            `Error: Port ${port} is already in use. Please terminate the process using this port or choose a different port.`
        );
        process.exit(1);
    } else {
        throw error;
    }
});


