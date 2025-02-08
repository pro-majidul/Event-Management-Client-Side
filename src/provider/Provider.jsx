import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
import usePublic from '../hooks/usePublic';
export const AuthContext = createContext()
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isGuest, setIsGuest] = useState(false);
    const [loading, setLoading] = useState(false)
    const publicAxios = usePublic()
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
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const info = {
        name: 'majidul',
        user,
        setUser,
        loading,
        createUser,
        googleLogin,
        loginUser,
        updateUserProfile,
        userLogOut,
        isGuest, setIsGuest
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser.email) {
                setUser(currentUser)
                publicAxios.post('/jwt', { email: currentUser.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('guestToken' , res.data.token)
                            setLoading(false)
                        }
                    })

            } else {
                localStorage.removeItem('guestToken')
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

export default Provider;