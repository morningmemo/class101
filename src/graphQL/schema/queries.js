const { GraphQLObjectType } = require('graphql')
const userQueries = require('../../models/User/queries')
const postQueries = require('../../models/Post/queries')
const commentQueries = require('../../models/Comment/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: userQueries.user,
        users: userQueries.users,
        post: postQueries.post,
        posts: postQueries.posts,
        comment: commentQueries.comment,
        comments: commentQueries.comments
    }
})