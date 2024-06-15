import express from "express";
import bodyParser from "body-parser";
import bandname from "bandname";

const app = express();
const port = 3000;
app.use(express.static("public"));
const laOtraX = new Date;
const x = laOtraX.getFullYear();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {lax: x});
});

app.post("/submit", (req, res) => {
    const nombreBanda = bandname(); 
    res.render("index.ejs", {nameBand: nombreBanda, lax: x 
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

