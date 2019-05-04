const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const User = require("./user")

// Defines the queries
module.exports = {
    users: {
        type: new GraphQLList(type),
        args: {
            user_id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            },
            created_at: {
                type: GraphQLString
            }
        },
        resolve: User.findMatching.bind(User)
    },
    user: {
        type,
        args: {
            user_id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            },
            created_at: {
                type: GraphQLString
            }
        },
        resolve: User.getByID.bind(User)
    }
}