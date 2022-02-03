const db = require("./db")
const post = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.STRING
    }
})

//post.sync({ force: true })
module.exports = post