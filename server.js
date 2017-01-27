require("dotenv").config()
const chalk = require("chalk")
const express = require("express")

const app = express()
 
app.set("view engine", "ejs")
app.use("/public", express.static("public"))

app.get("/", function (req, res) {
  const context = {
    FEED_NAME: process.env.FEED_NAME,
    FEEDS_APP_ID: process.env.FEEDS_APP_ID,
    FEEDS_ACCESS_TOKEN: process.env.FEEDS_ACCESS_TOKEN,
    SUBREDDIT_NAME: process.env.SUBREDDIT_NAME
  } 
  res.render("index", context)
})
 
const port = 8080
app.listen(port, function (err) {
  if (err) {
    console.error(chalk.red(error))
  } else {
    console.log(`Running on port ${port} 🚀`)
  }
})