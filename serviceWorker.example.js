// Registering a service worker
navigator.serviceWorker.register('/service-worker.js')
  .then((registration) => {
    console.log('Service worker registered:', registration);
  })
  .catch((error) => {
    console.log('Service worker registration failed:', error);
  });

// Checking for service worker updates
navigator.serviceWorker.ready
  .then((registration) => {
    registration.update();
  });

// Unregistering a service worker
navigator.serviceWorker.getRegistration('/service-worker.js')
  .then((registration) => {
    if (registration) {
      registration.unregister()
        .then(() => {
          console.log('Service worker unregistered');
        })
        .catch((error) => {
          console.log('Service worker unregistration failed:', error);
        });
    }
  });

// Listening to service worker events
navigator.serviceWorker.addEventListener('message', (event) => {
  console.log('Received message from service worker:', event.data);
});

// Showing a notification
navigator.serviceWorker.ready
  .then((registration) => {
    registration.showNotification('New Message', {
      body: 'You have a new message.',
      icon: '/notification-icon.png'
    });
  });

// Handling fetch events in service worker
self.addEventListener('fetch', (event) => {
  console.log('Fetch event intercepted:', event.request.url);
  event.respondWith(fetch(event.request));
});
