import Movie from "../components/Movie"
import { useState, useEffect } from 'react';
import styles from "./Home.module.css";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    
    // How to call API modernly
    const getMovies = async() => {
        const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
        ).json();
        // update movies to json.data.movies
        setMovies(json.data.movies);
        // update current loading status to false
        setLoading(false);
    };
    
    // Call only once
    useEffect(() => {
        getMovies();
    }, []);

    return (
    <div className={styles.container}>
        {loading ? ( 
            <div className={styles.loader}>
                <span>Loading...</span>
            </div> 
            ) : ( 
            <div className={styles.movies}>
                {movies.map((movie) => (
                <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} />
                ))}
            </div> 
            )
        }
    </div>
    );
}
export default Home;