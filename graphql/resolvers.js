import {getMovies, getById, addMovie, deleteMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id )
    },
    Mutation: { 
        //서버가 변경될때 Mutation을 사용함
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};


export default resolvers;