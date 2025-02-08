
import { Link, useNavigate } from "react-router-dom";
import AnimationImage from "../assets/Animation - 1738954441745.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import usePublic from "../hooks/usePublic";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Login = () => {
    const { loginUser, setUser, googleLogin, setIsGuest } = useAuth();
    const navigate = useNavigate();
    const publicAxios = usePublic();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await loginUser(data.username, data.password);
            setUser(result.user);
            navigate("/");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Successful",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.code}`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const data = await googleLogin();
            setUser(data.user);
            const userInfo = {
                email: data?.user?.email,
                name: data?.user?.displayName,
                photo: data?.user?.photoURL,
                loginDate: new Date(),
            };
            const result = await publicAxios.put("/users", userInfo);
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            }
        } catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.code}`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleGuestLogin = async () => {
        const response = await publicAxios.post("/guest-login");
        setIsGuest(true);
        localStorage.setItem("guestToken", response.data.token);
        navigate("/");
    };

    return (
        <section className="flex items-center justify-center min-h-screen p-5">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:flex items-center justify-center max-w-7xl w-full mx-auto py-10 md:px-12"
            >
                <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="flex-1">
                    <Lottie animationData={AnimationImage} />
                </motion.div>

                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 shadow-2xl"
                >
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block">Username</label>
                            <input {...register("username", { required: true })} type="text" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border focus:outline-none" />
                            {errors.username && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block">Password</label>
                            <input {...register("password", { required: true })} type="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border focus:outline-none" />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <motion.button whileHover={{ scale: 1.05 }} className="block w-full p-3 text-center rounded-md bg-violet-600 text-white hover:bg-violet-400">Login</motion.button>
                    </form>
                    <div className="flex items-center justify-center py-3">
                        <motion.button whileHover={{ scale: 1.05 }} className="btn bg-violet-600 text-white hover:bg-violet-400" onClick={handleGuestLogin}>Guest Login</motion.button>
                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="px-3 text-sm">Login with social accounts</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <motion.button whileHover={{ scale: 1.1 }} onClick={handleGoogleLogin} className="p-3 rounded-sm">
                            <FcGoogle className="text-3xl hover:bg-violet-200" />
                        </motion.button>
                    </div>
                    <p className="text-xs text-center">Don't have an account? <Link to='/signup' className="hover:underline text-violet-600">Sign up</Link></p>
                </motion.div>
            </motion.div>
        </section>

    );
};

export default Login;
