# Reddit Feed Machine

## Setup

Running Reddit Feed Machine is easy. 

All you really need to do is create an `.env` file in the root of the project:

```
REDDIT_CLIENT_ID=k89tnvTqYmINJQ
REDDIT_CLIENT_SECRET=LibPdTgKa1lUvczPQIU5W_Qnr3g
REDDIT_USERNAME=reddit-demo-feed
REDDIT_PASSWORD=reddit-demo-feed
FEEDS_APP_ID=bf0331d5-9df7-46cd-9cbb-95a9a2e859dc
FEED_NAME=reddit
SUBREDDIT_NAME=aww
```

Then run:

```
yarn
```

Run `yarn append` to run the `./bin/append` script that appends new posts to a feed from Reddit.

Run `yarn serve` to serve the web page that _subscribes_ to the feed.