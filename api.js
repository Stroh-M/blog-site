import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const posts = [
    {
      id: 1,
      title: "Short and Sweet Sleep",
      content: "Getting enough quality sleep is cruical for overall well-being. Aim for 7-9 hours of uninterrupted sleep each night. Establish a relaxing bedtime routine and create a sleep-conducive enviroment.",
      date: "Mon Jul 22 2024 19:19:38 GMT-0400 (Eastern Daylight Time)"
    },

    {
        id: 2,
        title: "Power up your plants",
        content: "Give your indoor plants a boost with a little extra TLC. Ensure proper lighting, consistent watering, and fresh soil. Consider adding a diluted liquid fertilizer once a month for nutrient-rich growth.",
        date: "Mon Jul 22 2024 19:20:22 GMT-0400 (Eastern Daylight Time)"
    },

    {
        id: 3,
        title: "Boost Your Brain",
        content: "Nourish your mind with brain-boosting foods like blueberries, nuts, and fatty fish. Regular physical activity, mental challenges, and sufficient sleep also contribute to optimal brain health.",
        date: "Mon Jul 22 2024 19:50:56 GMT-0400 (Eastern Daylight Time)"
    }
]

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/post/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundPost = posts.find((post) => post.id === id);
    res.json(foundPost);
})


app.post("/new", (req, res) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title, 
        content: req.body.content,
        date: Date()
    }
    console.log(newPost);
    posts.push(newPost);
    res.json(posts);
});

app.patch("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existingPost = posts.find((post) => post.id === id);
    console.log(existingPost);
    const replacementPost = {
        id: id,
        title: req.body.title || existingPost.title,
        content: req.body.content || existingPost.content,
        date: Date()
    }
    
    const foundIndex = posts.findIndex((post) => post.id === id);
    posts[foundIndex] = replacementPost;

    res.json(posts);
});

app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundIndex = posts.findIndex((post) => post.id === id);
    posts.splice(foundIndex, 1);
    if (foundIndex > -1) {
        res.sendStatus(200);
    } else {
        res.status(404).json({error: `can't find post with id ${id}`})
    }
});





app.listen(port, () => {
    console.log(`API listening on port ${port}`);
})