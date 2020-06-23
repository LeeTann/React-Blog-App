const postsSchema = require('./posts.js')

const resolvers = [
  postsSchema.resolvers
]

const typeDefs = [
  postsSchema.schema
]

module.exports = {
  resolvers,
  typeDefs
}