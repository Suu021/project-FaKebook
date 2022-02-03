const Sequelize = require("sequelize")

//sequelize - connection to MySQL database
const sequelize = new Sequelize('fakebook', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function() {
    console.log("Successfully connected!")
}).catch(function(error) {
    console.log("Failed to connect: " + error)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}