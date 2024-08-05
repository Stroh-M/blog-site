import express, { response } from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
import axios from "axios";

const app = express();
const port = "3000";
const API_URL = "http://localhost:4000";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static("public"));
    
app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        console.log(response.data);
        res.render("index.ejs", {
            content: response.data
        });
    } catch (error) {
        console.log(error.message);
    }
    
});

app.get("/posts/:id", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/post/${req.params.id}`);
        console.log(response.data); 
        res.render("update.ejs", {
            content: response.data
        }); 
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/newpost", (req, res) => {
    try {
       res.render("newpost.ejs"); 
    } catch (error) {
        res.status(500).json({message: "error fetching page"});
    }
    
});

app.post("/newPost", async (req, res) => {
    try {
        console.log(req.body.title);
        const response = await axios.post(`${API_URL}/new`, req.body);
        console.log(response.data);
        res.redirect("/");
    } catch (error) {
        res.status(500).json({message: "error posting new post"});
    }
});

app.post("/posts/edit/:id", async (req, res) => {
    try {
       await axios.patch(`${API_URL}/edit/${req.params.id}`, req.body);
       res.redirect("/");
    } catch (error) {
       res.status(500).json({message: "error editing post"}); 
    }
});

app.post("/posts/delete/:id", async (req, res) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${req.params.id}`);
        res.redirect("/");  
    } catch (error) {
        if (response.status === 500) {
            res.status(500).json({message: "error deleting message"});
        } else if (response.status === 404) {
            res.sendStatus(404).json({message: `can't find post with id ${req.params.id}`});
        }
    }
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

