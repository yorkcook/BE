const db =require("../data/dbConfig")

module.exports = {
    find
}

async function find() {
    const units = await db("units")
    if(units) {
        return units
    } else {
        return null
    }
}