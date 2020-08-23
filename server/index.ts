import express from "express";

import { ApolloServer, AuthenticationError } from "apollo-server-express";
import typeDefs from "./src/graphqlApi/typeDefs";
import resolvers from "./src/graphqlApi/mainResolver";
import connectDB from "./src/models/connectDB";
import { PORT } from "./src/configurations/configuration";
import { createServer } from "http";
import routes from "./src/routes";
import bodyParser from "body-parser";
import { getUserFromToken } from "./src/utils/jwtManagement";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUserFromToken(token);
    if (!user) throw new AuthenticationError("you must be logged in");

    // add the user to the context
    return { user };
  },
});
server.applyMiddleware({ app });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  connectDB();
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
