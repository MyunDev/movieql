import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    //환경설정을 넣어준다. 서버라는 새로운 variable과 새로운 GraphQLServer를 만든 자리에

    typeDefs:"graphql/schema.graphql",
    resolvers

});

server.start(() => console.log("Graphql Server Running"));  