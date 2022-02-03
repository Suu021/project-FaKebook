/*TO ME:
no diretório da pasta do projeto instalei, além do express, sequelize e o mysql2, o handlebars com o seguinte comando no prompt de comando:
"npm install--save express-handlebars"
handlebars é um template engine que dá muitas funcionalidades ao html dentro do node.js
*/

//starting processes
const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const post = require("./models/Post")

//configs

//Template Engine - handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//"body-parser"
app.use(express.urlencoded({ extend: false }))
app.use(express.json())

// routes
app.get("/homePage", function(req, res) {
    post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render("homePage", {
            posts: posts
        })
    })

})

app.post("/add", function(req, res) {
    post.create({
        title: req.body.title,
        content: req.body.content
    }).then(function() {
        //res.send("post created successfully!")
        res.redirect("/homePage")
    }).catch(function(error) {
        res.send('There was an error: ' + error)
    })
})


app.listen(8081, function() {
    console.log("server is running in url http://localhost:8081")
})