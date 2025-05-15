// simple static file server that serves files from the dist directory. Non /assets requests will send the index.html file
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const dirname = path.resolve();

// Cache hashed files for 7 days
app.use((req, res, next) => {
    if (/-[A-Z0-9]{8}\./.test(req.path)) {
        res.setHeader("Cache-Control", "public, max-age=604800");
    }
    next();
});

// Serve static files from the "dist" directory
app.use(express.static(path.join(dirname, "dist")));

// Catch-all route to serve index.html for non-asset requests
app.get("/{*splat}", (req, res) => {

    if (req.path.startsWith("/assets")) {

        res.status(404).send("Not Found");

    } else {
        res.sendFile(path.join(dirname, "dist", "index.html"));
    }
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
    server.close(() => {
        process.exit(0);
    });
});
process.on("SIGTERM", () => {
    server.close(() => {
        process.exit(0);
    });
});