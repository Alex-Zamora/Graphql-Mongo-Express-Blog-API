const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { users, user, posts, post, comments, comment } = require('./queries');
const { register, login, createPost, updatePost, deletePost, addComment, updateComment, deletedComment } = require('./mutations');

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields: {
    users,
    user,
    posts,
    post,
    comments,
    comment
  }
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    register,
    login,
    createPost,
    updatePost,
    deletePost,
    addComment,
    updateComment,
    deletedComment
  }
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});