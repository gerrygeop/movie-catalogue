import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieItemTemplte } from "../templates/template-creator";

const Upcoming = {
    async render() {
        return `
            <div class="content">
                <h2>Upcoming in Cinema</h2>
                <div id="movies" class="movies">
                </div>
            </div>
        `;
    },

    async afterRender() {
        const movies = await TheMovieDbSource.upcomingMovies();
        // console.log(movies);

        const moviesContainer = document.getElementById('movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplte(movie);
        });
    },
};

export default Upcoming;