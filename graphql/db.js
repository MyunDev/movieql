let movies = [
    {
        id: 0,
        name: "Avengers",
        score: 9
    },
    {
        id: 1,
        name: "Spiderman",
        score: 8
    },
    {
        id: 2,
        name: "Lord of ther Ring",
        score: 9
    },
    {
        id: 3,
        name: "About Time",
        score: 9
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};


export const addMovie = (name, score) =>{
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};