const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Comment = require("./comment")

// Defines the queries
module.exports = {
    comments: {
        type: new GraphQLList(type),
        args: {
            comment_id: {
                type: GraphQLID
            },
            post_id: {
                type: GraphQLID
            },
            contents: {
                type: GraphQLString
            },
            writer: {
                type: GraphQLID
            },
            created_at: {
                type: GraphQLString
            },
            page: {
                type: GraphQLID
            },
            pageCount: {
                type: GraphQLID
            }
        },
        resolve: Comment.findMatching.bind(Comment)
    },
    comment: {
        type,
        args: {
            comment_id: {
                type: GraphQLID
            },
            post_id: {
                type: GraphQLID
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
        resolve: Comment.getByID.bind(Comment)
    }
}