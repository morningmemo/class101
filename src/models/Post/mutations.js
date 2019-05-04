const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Post = require('./post')

// Defines the mutations
module.exports = {
    addPost: {
        type,
        args: {
            title: {
                type: GraphQLString
            },
            contents: {
                type: GraphQLString
            },
            writer: {
                type: GraphQLID
            }
        },
        resolve: Post.createEntry.bind(Post)
    },
    updatePost: {
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
            }
        },
        resolve: Post.updateEntry.bind(Post)
    },
    removePost: {
        type: GraphQLString,
        args: {
            post_id: {
                type: GraphQLID
            }
        },
        resolve: Post.removeEntry.bind(Post)
    }
}
