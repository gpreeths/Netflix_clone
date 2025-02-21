import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Logout from "../Components/Logout";
import Menu from "../Components/Menu";
import Icons from "../Components/Icons";

function Movie() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch movies from the API
    const getMovie = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/discover/movie?api_key=814cccf54eaa2fa0d11fe4aa57e9ab6b"
            );
            setMovieList(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    if (loading) return <h1 className="loading">Loading...</h1>;

    // Select a random movie for the header section
    const randomMovie = movieList[Math.floor(Math.random() * movieList.length)];

    return (
        <>
            <Navbar />
            <Menu />
            <Icons/>
            <Logout />

            <div className="movielist">
                {/* 🎬 Main Random Movie Section */}
                {randomMovie ? (
                    <div
                        className="movie-header"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "500px",
                            position: "relative",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            padding: "20px",
                            
                        }}
                    >
                        <div className="overlay" style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0, 0, 0, 0.5)"
                        }}></div>
                        <div className="movie-info" style={{ background: "rgba(0, 0, 0, 0.5)",position: "relative", zIndex: 1 }}>
                            <h1>{randomMovie.title}</h1>
                            <p>
                                <strong>{randomMovie.release_date}</strong> | ⭐ {randomMovie.vote_average} | 🎬{" "}
                                {randomMovie.original_language.toUpperCase()}
                            </p>
                            <p className="overview" style={{ maxWidth: "50%" }}>{randomMovie.overview}</p>
                            <Link to={`/trailer/${randomMovie.id}`} className="details-button">
                                <button style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#e50914", color: "#fff", border: "none" }}>
                                    Watch Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <h2>No Movies Available</h2>
                )}

                {/* 🍿 Related Movies Section */}
                <div className="movie-section">
                    <h2>Related Movies</h2>
                    <div className="movie-cards">
                        {movieList.slice(0, 5).map((movie) => (
                            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title || "Movie Poster"}
                                    className="movie-poster"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 🔥 Trending Now Section */}
                <div className="movie-section">
                    <h2>Trending Now</h2>
                    <div className="movie-cards">
                        {movieList.slice(5, 10).map((movie) => (
                            <Link to={`/trailer/${movie.id}`} key={movie.id} className="movie-card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title || "Movie Poster"}
                                    className="movie-poster"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 🎉 New Releases Section */}
                <div className="movie-section">
                    <h2>New Releases</h2>
                    <div className="movie-cards">
                        {movieList.slice(10, 15).map((movie) => (
                            <Link to={`/trailer/${movie.id}`} key={movie.id} className="movie-card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title || "Movie Poster"}
                                    className="movie-poster"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default Movie;
