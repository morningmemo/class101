const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Post = require("./post")

// Defines the queries
module.exports = {
    posts: {
        type: new GraphQLList(type),
        args: {
            post_id: {
                type: GraphQLID
            },
            title: {
                type: GraphQLString
            },
            contents: {
                type: GraphQLString
            },
            writer: {
                type: GraphQLID
            },
            created_at: {
                type: GraphQLString
            }
        },
        resolve: Post.findMatching.bind(Post)
    },
    post: {
        type,
        args: {
            post_id: {
                type: GraphQLID
            },
            title: {
                type: GraphQLString
            },
            contents: {
                type: GraphQLString
            },
            writer: {
                type: GraphQLID
            },
            created_at: {
                type: GraphQLString
            }
        },
        resolve: Post.getByID.bind(Post)
    }
}