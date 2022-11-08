import {app} from "./App.js"
import dotenv from "dotenv"
import {connectDatabase} from "./Config/Database.js"
import cloudinary from "cloudinary"

dotenv.config({path: "./backend/Config/Config.env"})

connectDatabase()

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT} `)
})