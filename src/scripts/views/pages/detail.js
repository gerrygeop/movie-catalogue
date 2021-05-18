import TheMovieDbSource from "../../data/themoviedb-source";
import UrlParser from "../../routes/url-parser";
import { createMovieDetailTemplate } from "../templates/template-creator";

const Detail = {
    async render() {
        return `
            <div id="movie" class="movie"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await TheMovieDbSource.detailMovie(url.id);
        // console.log(movie);

        const moviesContainer = document.getElementById('movie');
        moviesContainer.innerHTML += createMovieDetailTemplate(movie);
    },
};

export default Detail;