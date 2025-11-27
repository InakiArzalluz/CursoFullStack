import {useState} from "react";
import {addMovie} from "../movieSlice";
import {useDispatch} from "react-redux";

export default function MovieInput(){
    const [newMovie, setNewMovie] = useState("");
    const dispatch = useDispatch();
    function handleAddMovie(){
        if (newMovie !== ""){
            dispatch(addMovie(newMovie));
        }
    }
    return (
        <div>
            <input
                onChange={(event) => setNewMovie(event.target.value)}
                value={newMovie}
             />
            <button
                onClick={(event) => {
                    /*Add to Redux*/
                    handleAddMovie();
                }}
            >Add Movie</button>
        </div>
    );
}