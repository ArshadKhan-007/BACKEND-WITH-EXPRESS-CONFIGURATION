import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


//routes

import userRouter from "./routes/user.routes"

//routes declaration
app.use("/api/v1/users", userRouter)


export { app }