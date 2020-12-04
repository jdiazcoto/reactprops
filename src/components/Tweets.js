import React from 'react'
import Tweet from './Tweet'

function Tweets(props) {
  const tweets = [{ name: 'jfdcDevops', tweet: 'reac yeay yippi ka yay' }, { name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' },{ name: 'gggg', tweet: 'yeah again' }, {
    name: 'eeee', tweet:'tweeeeeeet'
  }]
  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  )
}

export default Tweets
