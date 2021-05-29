const NotificationHelper = {
    sendNotification({ title, options }) {
        if (!this._checkAvailability()) {
            console.log('Notification not supported in this browser');
            return;
        }

        if (!this._checkPermission()) {
            console.log(`User didn't yet granted permission`);
            this._requestPermission();
            return;
        }

        this._showNotification({ title, options });
    },

    _checkAvailability() {
        return !!('Notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification Denied');
        }

        if (status === 'default') {
            console.log('Permission Close');
        }
    },

    async _showNotification({title, options}) {
        const swRegistration = await navigator.serviceWorker.ready;
        swRegistration.showNotification(title, options);
    },
};

export default NotificationHelper;