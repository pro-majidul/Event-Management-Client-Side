import { Link, useNavigate } from "react-router-dom";
import AnimationImage from '../assets/Animation - 1738954441745.json'
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import usePublic from "../hooks/usePublic";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const Login = () => {
    const { loginUser, setUser, googleLogin, setIsGuest } = useAuth()
    const navigate = useNavigate()
    const publicAxios = usePublic()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        console.log(data.username, 'username ', data.password, ' user password')
        try {
            const result = await loginUser(data.username, data.password)
            console.log(data)
            setUser(result.user);
            navigate('/')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login SuccessFull",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (err) {
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.code}`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }

    const handelGoogleLogin = async () => {

        try {
            const data = await googleLogin()
            console.log(data.user)
            setUser(data.user)
            const userInfo = {
                email: data.user.email,
                name: data.user.displayName,
                photo: data.user.photoURL,
                loginDate: new Date()
            }
            const result = await publicAxios.put('/users', userInfo);
            console.log(result.data)
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login SuccessFull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }
        } catch (err) {
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.code}`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    const handleGuestLogin = async () => {
        const response = await publicAxios.post('/guest-login');
        setIsGuest(true)
        console.log(response.data.token)
        localStorage.setItem('guestToken', response.data.token);
        navigate('/')
    };

    return (

        <div className="md:flex items-center justify-center max-w-7xl w-full mx-auto py-10 md:px-12">
            <div>
                <Lottie animationData={AnimationImage} />
            </div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-gray-800 shadow-2xl bg-white">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input
                            {...register("username", { required: true })}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.username && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 hover:bg-violet-400 dark:bg-violet-600">Login</button>
                </form>
                <div className="flex items-center justify-center py-3">
                    <button className="btn bg-violet-600 text-white hover:bg-violet-400" onClick={handleGuestLogin}>Guest Login</button>

                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handelGoogleLogin}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className="text-3xl hover:bg-violet-200 " />
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to='/signup' className="hover:underline dark:text-violet-600">Sign up</Link>
                </p>
            </div>
        </div>

    );
};

export default Login;