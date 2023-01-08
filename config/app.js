const express = require("express")
const {json, urlencoded} = require("express")
const multer = require("multer")
const {createWorker} = require("tesseract.js")

const app = express()

const worker = await createWorker()
app.use(json())
app.use(urlencoded({extended: true}))

app.use("/img-text", (req, res)=>{
    res.status(200).json("Got here")
})

module.exports = app