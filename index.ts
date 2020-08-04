import express from "express"; // buat listen server
// import { chats } from "./db";
import cors from "cors"; // biar bisa cross request antara port yang berbeda

// graphql
import { ApolloServer, gql } from "apollo-server-express"; // server untuk graphql
import schema from "./schema";

const app = express();

app.use(cors());
app.use(express.json());

//rest api server
// app.get("/chats", (req, res) => {
//   res.send(chats);
// });

//graphql server
const server = new ApolloServer({ schema });

server.applyMiddleware({
  app,
  path: "/graphql",
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running di port ${port}`);
});
