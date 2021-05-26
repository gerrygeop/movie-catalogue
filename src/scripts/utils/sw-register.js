import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }
    console.log('Service Worker tidak didukung oleh browser ande!');
};

export default swRegister;