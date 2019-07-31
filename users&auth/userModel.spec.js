const db = require("../data/dbConfig")

const Users= require("./usersModel")

describe("Users model", ()=> {
    beforeEach(async ()=> {
        await db("users").truncate()
    })
    describe("findUserWithKitchen(id)", ()=>{
        it("shoud return json object", async ()=>{
            const user = await Users.findUserById(1)
            expect(user).toHaveLength(1)
        })
    })
})