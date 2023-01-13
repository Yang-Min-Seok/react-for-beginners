import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// useParams() -> returns id(the last one in path)
import { Link } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [currMovie, setCurrMovie] = useState("");
    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        // Give currMovie an inforamtion in form of json
        setCurrMovie(json);
        // set Loading status false
        setLoading(false);
    };

    // Get API by using getMovie function
    useEffect(() => {
        getMovie();
    }, [])
    
    return (
        <div>
            {loading ? <h1>Loading,,,</h1> : // if it is still on loading,, 
                // if loading finished,,,
                <div>
                    <img src={currMovie.data.movie.medium_cover_image}></img>
                    <h3> Title : {currMovie.data.movie.title}</h3>
                    <h3> Genres : {currMovie.data.movie.genres[0]}</h3>
                    <h3> Year : {currMovie.data.movie.year}</h3>
                    <h3> Languages : {currMovie.data.movie.language}</h3>
                    <h3><Link to='/' style={{textDecoration:"none", color:"black"}}>Go back</Link></h3>
                </div>
            }
        </div>
    )
}
export default Detail;