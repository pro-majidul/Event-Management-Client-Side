import { Link } from "react-router-dom";
import AnimationImage from '../assets/Animation - 1738954441745.json'
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
const Login = () => {
    const { loginUser, setUser, googleLogin } = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        console.log(data.username, 'username ', data.password, ' user password')
        const result = await loginUser(data.Username, data.password)
        console.log(data)
        setUser(result.user)


    }

    const handelGoogleLogin = async () => {

        const data = await googleLogin()
        console.log(data.user)
    }
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
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handelGoogleLogin}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
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