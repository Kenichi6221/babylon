import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

import userResolver from "./users/resolvers";
import conferenceResolver from "./conferences/resolvers";

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

const resolvers = [userResolver, conferenceResolver];

export default resolvers;
