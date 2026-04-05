import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const logBlogPosts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "BlogPosts"));
        console.log("--- Blog Posts from Firestore ---");
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => `, doc.data());
        });
        console.log("---------------------------------");
    } catch (error) {
        console.error("Error fetching blog posts: ", error);
    }
};

export { db };
