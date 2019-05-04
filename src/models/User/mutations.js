const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const User = require('./user')

// Defines the mutations
module.exports = {
    addUser: {
        type,
        args: {
            name: {
                type: GraphQLString
            }
        },
        resolve: User.createEntry.bind(User)
    }
}
