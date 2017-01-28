# Reddit Feed Machine

## Setup

Running Reddit Feed Machine is easy. 

All you really need to do is create an `.env` file in the root of the project:

```
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
REDDIT_USERNAME=
REDDIT_PASSWORD=
FEEDS_APP_ID=
FEED_NAME=
SUBREDDIT_NAME=
```

Then run:

```
yarn
```

Run `yarn append` to run the `./bin/append` script that appends new posts to a feed from Reddit.

Run `yarn serve` to serve the web page that _subscribes_ to the feed.