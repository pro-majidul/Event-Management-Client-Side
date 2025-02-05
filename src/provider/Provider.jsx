import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile ,GoogleAuthProvider} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
export const AuthContext = createContext()
const provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const info = {
        name: 'majidul',
        user,
        setUser,
        loading,
        createUser,
        googleLogin,
        loginUser,
        updateUserProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            if (currentUser) {
                setLoading(true)
                setUser(currentUser)
            } else {
                setLoading(false)
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default provider;