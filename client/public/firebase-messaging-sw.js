/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAK-ASn55k_gyFSgARhkhGw9n_-p08mbo0",
    authDomain: "baove-8228a.firebaseapp.com",
    databaseURL: "https://baove-8228a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "baove-8228a",
    storageBucket: "baove-8228a.appspot.com",
    messagingSenderId: "838502064282",
    appId: "1:838502064282:web:29f98b3a9e68780c6d3f23",
    measurementId: "G-X5VH2CMXJ6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body
    };
  
    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle, notificationOptions);
  });