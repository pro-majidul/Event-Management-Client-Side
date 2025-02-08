import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const privateAxios = axios.create({
    baseURL: 'http://localhost:5000/',
})
const usePrivate = () => {
    // const navigate = useNavigate()
    // const { userLogOut } = useAuth()
    // privateAxios.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('guestToken');
    //     config.headers.Authorization = (`Bearer ${token}`);
    //     return config
    // }, function (error) {
    //     return Promise.reject(error)
    // })

    // privateAxios.interceptors.response.use(function (response) {
    //     return response;
    // }, async function (error) {
    //     const status = error?.response?.status;
    //     if (status === 401 || status === 403) {
    //         await userLogOut
    //         navigate('/login')
    //     }
    //     return Promise.reject(error)
    // })

    return privateAxios
};

export default usePrivate;