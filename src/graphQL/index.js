const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
import schema from './schema';

export default ({ config }) => graphqlHTTP({
	// We construct our GraphQL schema which has three types:
    // The User, Group, and Query types (through which all
    // queries for data are defined)
    schema,
    graphiql: true
});
