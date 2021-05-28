import FavoriteMovieIdb from "../../data/favoritemovie-idb";
import { createMovieItemTemplte } from "../templates/template-creator";

const Like = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">#Your Liked Movie</h2>
                <div id="movies" class="movies"></div>
            </div>
        `;
    },

    async afterRender() {
        const movies = await FavoriteMovieIdb.getAllMovies();
        const moviesContainer = document.getElementById('movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplte(movie);
        });
    },
};

export default Like;