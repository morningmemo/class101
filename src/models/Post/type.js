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
    name: 'Post',
    description: 'A Post',
    fields: {
        post_id: {
            type: new GraphQLNonNull(GraphQLID)
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
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})