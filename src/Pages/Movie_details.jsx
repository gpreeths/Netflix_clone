import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Logout from "../Components/Logout";
import { Link } from "react-router-dom";
import Icons from "../Components/Icons";


function MovieDetails() {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState();
    const [relatedMovies, setRelatedMovies] = useState([]); // State for related movies

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${`814cccf54eaa2fa0d11fe4aa57e9ab6b`}`
                );
                setMovie(movieResponse.data);

                

                // Fetch related movies
                const relatedResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${`814cccf54eaa2fa0d11fe4aa57e9ab6b`}`
                );
                setRelatedMovies(relatedResponse.data.results);
            } 
    
            catch(error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <h2>Loading...</h2>;

    return (
        <div className="movie-container">
            <Navbar/>
<Icons/>
            <Logout/>
            {/* Main Movie Display */}
            <Link to={`/trailer/${movie.id}`}><div 
                className="movie-header"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, height:"500px" }}
            >
                <div className="overlay"></div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p><strong>{movie.release_date}</strong> | ⭐ {movie.vote_average} | 🎬 {movie.original_language.toUpperCase()}</p>
                    <p className="overview">{movie.overview}</p>
                </div>
            </div></Link>

            {/* Related Movies Section */}
            <div className="related-movies">
                
                <h1 style={{marginTop:"100px" , fontSize:"20px"}}>Because you watched {movie.original_title}</h1>
                <div className="movie-list">
                    {relatedMovies.map((related) => (
                        <div key={related.id} className="movie-card">
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${related.poster_path}`} 
                                alt={related.title} 
                                onClick={() => window.location.href = `/movie/${related.id}`} // Click to open related movie
                            />
                            
                        </div>
                        
                    ))}
                    {/* <Footer/> */}
                </div>
            </div>
            
        </div>
    );
}

export default MovieDetails;
