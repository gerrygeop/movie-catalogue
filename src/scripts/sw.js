import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
    // console.log('Installing Service Worker...');
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
    // console.log('Activating Service Worker...');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
    // console.log(event.request);
});