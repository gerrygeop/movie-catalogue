import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
    button: document.getElementById('hamburgerButton'),
    drawer: document.getElementById('navigationDrawer'),
    content: document.getElementById('mainContent')
});

console.log('Hello Geopers!');