const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")
const uploadFile = require("./services/storage.services")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()

app.use(cors())

const cors = require("cors");

app.use(cors({
  origin: "https://02-feed-project.vercel.app/",
  credentials: true
}));

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {

    const result =  await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })
    
    return res.status(201).json({
        message: "Post created successfully",
        post
    })

})

app.get("/posts", async (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Post fetched successfully",
        posts
    })
})

app.patch("/create-post/:id", upload.single("image"), async (req, res) => {
    const id = req.params.id

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            image: result.url,
            caption: req.body.caption,
        },
        {
            new: true
        }
    )

    return res.status(201).json({
        message: "Post updated successfully",
        post
    })
})

app.delete("/create-post/:id", async (req, res) => {
    const id = req.params.id

    const post = await postModel.deleteOne(
        {
            _id: id
        },
        {
            new: true
        }
    )

    return res.status(201).json({
        message: "Post updated successfully",
        post
    })
})

module.exports = app