import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common'
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
    post.author = 'Lee Tann'
    post.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default function Home() {
  return (
    <main className="home">
      <section className="container">
        <div>
          <h1>Featured Posts</h1>
            <section className="featured-posts-container">
              <PostMasonry posts={featured} columns={2} />
              <MasonryPost post={lastFeatured} tagsOnTop={true} />
            </section>
        </div>
      </section>
      
      <section className="bg-white">
        <section className="container">
          <div>
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="container">
        <div>
          <h1>Trending Posts</h1>
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  )
}
