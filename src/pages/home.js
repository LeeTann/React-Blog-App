import React from 'react'
import {PostMasonry, MasonryPost} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
  1: {
    // Start at row 1 / col 2. End at row 3 / col 3
    gridArea: '1 / 2 / 3 / 3'
  }
}
const featuredConfig = {
  0: {
    gridArea: '1 / 1 / 2 / 3',
    height: '300px'
  },
  1: {
    height: '300px'
  },
  3: {
    height: 'auto',
    marginLeft: '30px',
    width: '630px'
  }
}

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index]
  })
}

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default function Home() {
  return (
    <section className="container home">
      <div>
        <h1>Featured Post</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        <h1>Trending Post</h1>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  )
}
