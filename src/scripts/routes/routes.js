import Detail from "../views/pages/detail";
import Like from "../views/pages/like";
import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";

const routes = {
    '/': NowPlaying, // default page
    '/now-playing': NowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;