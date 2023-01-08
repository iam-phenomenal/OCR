const { text } = require("express")
const {createWorker} = require("tesseract.js")

const tesseractTest = async()=>{
    const worker = await createWorker()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const {data: {text}} = await worker.recognize("./download.png")
    
    console.log(text)

    worker.terminate()
}

tesseractTest()