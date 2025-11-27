import {useDispatch, useSelector} from "react-redux";
import {removeMovie} from "../movieSlice";

export default function MovieList(){
    //                                                     //reducerName.slice
    const movies = useSelector((state: any) => {return state.movieReducer.movies})
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Movie List!</h1>
            <ul>
                {movies.map((movie:any) => {
                    return (
                        <div key={movie.id}>
                            <li >
                                {movie.name} <button onClick={() => { dispatch(removeMovie(movie.id)) }}>Delete</button>
                            </li>
                        </div>
                    )})}
            </ul>
        </div>
    );
}