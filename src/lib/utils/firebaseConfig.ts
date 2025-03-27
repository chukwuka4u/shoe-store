const firebaseConfig = {

    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "shoe-storestore.firebaseapp.com",
    projectId: "shoe-storestore",
    storageBucket: "shoe-storestore.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

};

export default firebaseConfig;