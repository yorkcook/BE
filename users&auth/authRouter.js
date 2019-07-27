const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = require("../data/secrets")

const Users = require("./usersModel")

const router = express.Router()

router.post("/register", (req, res)=> {
    const user = req.body
    const hash = bcrypt.hashSync(user.password,8)
    user.password = hash

    try{
        const registered = await Users.add(user)
        if (registered) {
            res.status(201).json(registered)
        } else {
            res.status(400).json({message: "Invalid credentials"})
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
      }
})

router.post("/login", async (req, res)=> {
    try{
        const user = await Users.findBy({username}).first()
        if (user &&bcrypt.compareSync(password, user.password)){
            const token = generateToken(user)
            res.status(200).json({message: `Welcome ${user.username}`, token})
        } else {
            res.status(400).json({message: "Invalid credentials"})
        }
    }catch(err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: "8h"
    }
    return jwt.sign(payload, secret.jwtSecret, options)
}



module.exports = router