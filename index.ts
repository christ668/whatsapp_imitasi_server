import express from "express"; // buat listen server
// import { chats } from "./db";
import cors from "cors"; // biar bisa cross request antara port yang berbeda

// graphql
import { ApolloServer, gql, PubSub } from "apollo-server-express"; // server untuk graphql
import schema from "./schema";
import http from "http";

const app = express();

app.use(cors());
app.use(express.json());

//rest api server
// app.get("/chats", (req, res) => {
//   res.send(chats);
// });

//graphql server
const pubsub = new PubSub();
const server = new ApolloServer({
  schema,
  context: () => ({ pubsub }),
});

server.applyMiddleware({
  app,
  path: "/",
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 4000;

httpServer.listen(port, () => {
  console.log(`server running di port ${port}`);
});
