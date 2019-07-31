const db = require("../data/dbConfig")

const Users= require("./usersModel")

describe("Users model", ()=> {
    beforeEach(async ()=> {
        await db("users").truncate()
    })
    describe("findUserWithKitchen(id)", ()=>{
        it("shoud  return 200 status and json", async ()=>{
            
        })
    })
})