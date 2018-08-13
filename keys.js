console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
  message: "Hello"
};
// SPOTIFY_ID=522bb3d368134dea882c2131eb489142
// SPOTIFY_SECRET=8458279429a74544b639f69637b189bf

// TWITTER_CONSUMER_KEY=hO6MviIyPNkQxECgLvTibRHvL
// TWITTER_CONSUMER_SECRET=vNMPcU2zkte3Zz42tGLgZYSJ8rODRy3qorSEiUPG0LqIuhB6Zk
// TWITTER_ACCESS_TOKEN_KEY=1021181148146339840-djSZsU5UfjijkP4X7gQbTcvBNQ3e2S
// TWITTER_ACCESS_TOKEN_SECRET=DP5BfaQ7Xiac7iPPcGXR2AtdNQL9e9l0CE8iISX6sPFMZ