const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Comment = require('./comment')

// Defines the mutations
module.exports = {
    addComment: {
        type,
        args: {
            post_id: {
                type: GraphQLID
            },
            contents: {
                type: GraphQLString
            },
            writer: {
                type: GraphQLID
            }
        },
        resolve: Comment.createEntry.bind(Comment)
    },
    updateComment: {
        type,
        args: {
            comment_id: {
                type: GraphQLID
            },
            contents: {
                type: GraphQLString
            }
        },
        resolve: Comment.updateEntry.bind(Comment)
    },
    removeComment: {
        type: GraphQLString,
        args: {
            comment_id: {
                type: GraphQLID
            }
        },
        resolve: Comment.removeEntry.bind(Comment)
    }
}
