import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieItemTemplte } from "../templates/template-creator";

const NowPlaying = {
    async render() {
        return `
            <div class="content">
                <h2>Now Playing</h2>
                <div id="movies" class="movies">
                </div>
            </div>
        `;
    },

    async afterRender() {
        const movies = await TheMovieDbSource.nowPlayingMovies();
        // console.log(movies);
        
        const moviesContainer = document.getElementById('movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplte(movie);
        });
    },
};

export default NowPlaying;