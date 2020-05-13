import app from 'firebase/app';
import 'firebase/auth';

class Firebase {
    constructor() {
        app.initializeApp({
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID,
            measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        });

        this.auth = app.auth();
    }

    createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    signOut = () => this.auth.signOut();
};

export default Firebase;