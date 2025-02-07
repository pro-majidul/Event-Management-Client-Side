import React, { useContext } from 'react';
import { AuthContext } from '../provider/provider';

const useAuth = () => {
    const userInfo = useContext(AuthContext)
    return userInfo
};

export default useAuth;