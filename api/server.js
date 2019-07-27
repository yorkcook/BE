const express = require("express")
const helmet = require("helmet")
const cors = require("cors")


const UserRouter = require("../users&auth/usersRouter")
const AuthRouter = require("../users&auth/authRouter")
const InvRouter = require("../inventory/inventoryRouter")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", UserRouter)
server.use("/api/auth", AuthRouter)
server.use("/api/inventory", InvRouter)

server.get("/", (req, res)=> {
    res.send("Server Running")
})

module.exports = server;