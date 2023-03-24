import express from "express";
import fs from "fs";

// Config
const PORT = 8000;

const app = express();
app.use(express.static("public/"));

app.get("/api/images", async function getListOfFiles(req, res) {
    let files = await fs.promises.readdir("public/images/");
    res.json(files);
})

console.log(`Listening on http://0.0.0.0:${PORT}`);
app.listen(PORT);
