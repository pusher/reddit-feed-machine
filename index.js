require("dotenv").config()
const _ = require("lodash")
const fs = require("fs")
const pify = require("pify")
const request = require("request")
const Promise = require("bluebird")
const Snoowrap = require("snoowrap")
const chalk = require("chalk")

const reddit = new Snoowrap({
  userAgent: "whocares",
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD 
})

function append (items) {
  return pify(request)({ 
    method: "POST",
    url: `https://api.private-beta-1.pusherplatform.com:443/apps/${process.env.FEEDS_APP_ID}/feeds/${process.env.FEED_NAME}`,
    body: { 
      items
    },
    json: true 
  })
}

function fetch (previousPosts = []) {
  reddit
    .getNew("all")
    .then(posts => {
      const newPosts = _
        .differenceBy(posts, previousPosts, post => post.id)
        .map(post => {
          return {
            id: post.id,
            title: post.title,
            url: post.url
          }
        })
      console.log(chalk.green(`Found ${newPosts.length} new posts.`))
      return append(newPosts)
        .then(() => Promise.delay(5000, [...previousPosts, ...newPosts]))
        .then(posts => fetch(posts))
    })
    .catch(err => console.error(chalk.red(err)))
}
console.log("Running. Press ^-C to quit.")
fetch()