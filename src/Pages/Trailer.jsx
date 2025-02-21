import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Trailer() {
  const { id } = useParams();
  const [trailers, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=814cccf54eaa2fa0d11fe4aa57e9ab6b&language=en-US`
        );
        
        setTrailer(videoResponse.data.results);
        console.log(videoResponse.data.results);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      } finally {
        setLoading(false); // Stop loading after the request is completed
      }
    };

    fetchTrailer();
  }, [id]);

  if (loading) return <h1 className="loading">Loading...</h1>;

  const trailer = trailers.find(vid => vid.type === 'Trailer' && vid.site === 'YouTube');

  return (
    <div className="trailer-container">
      {trailer ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframe-video"
        ></iframe>
      ) : (
        <h2 className="no-trailer">Trailer Not Available</h2>
      )}
    </div>
  );
}

export default Trailer;
