import React from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    // CREATE-USER
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // UPDATE USER
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };
    // SIGNIN
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Google Signin
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const googleSignin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // GitHub Login
    const githubSignin = (provider) => {
        return signInWithPopup(auth, provider);
    };
    // LOgOUT
    const logOut = () => {
        return signOut(auth);
    };
    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignin,
        logOut,
        updateUser,
        githubSignin,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
