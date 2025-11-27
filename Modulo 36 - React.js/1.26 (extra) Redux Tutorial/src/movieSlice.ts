import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [{id: "0", name: "interstellar"}, {id: "1", name:"harry potter"}] as any[] 
}

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addMovie: (state, action) => {
            //state has a reference to the current value of movies
            state.movies.push({
                id:state.movies.length,
                name: action.payload
            });
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter((movie) => {return movie.id !== action.payload})
        }
    }
});

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;