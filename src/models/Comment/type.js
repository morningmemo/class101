let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Comment',
    description: 'A Comment',
    fields: {
        comment_id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        post_id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        contents: {
            type: GraphQLString
        },
        writer: {
            type: GraphQLID
        },
        created_at: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})