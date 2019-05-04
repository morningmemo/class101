const { GraphQLObjectType } = require('graphql')
const userMutation = require('../../models/User/mutations')
const postMutation = require('../../models/Post/mutations')
const commentMutation = require('../../models/Comment/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addUser: userMutation.addUser,
        addPost: postMutation.addPost,
        updatePost: postMutation.updatePost,
        removePost: postMutation.removePost,
        addComment: commentMutation.addComment,
        updateComment: commentMutation.updateComment,
        removeComment: commentMutation.removeComment
    }
})