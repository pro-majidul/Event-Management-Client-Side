// import axios from "axios";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import usePublic from "../hooks/usePublic";
// import Swal from "sweetalert2";
// import SignUpImage from '../assets/SignUp.json'
// import Lottie from "lottie-react";

// const SignUp = () => {
//     const { updateUserProfile, createUser, setUser } = useAuth()
//     const { register, handleSubmit, formState: { errors }, } = useForm()
//     const [uploadfile, setUploadfile] = useState('');
//     const [files, setFiles] = useState(null)
//     const [uploading, setUploading] = useState(false)
//     const publicAxios = usePublic()
//     const navigate = useNavigate()
//     const handelfileChange = e => {
//         setFiles(e.target.files[0])
//     }

//     const handelSignUp = async (data) => {
//         if (!files) return
//         const formdata = new FormData();
//         formdata.append('file', files)
//         formdata.append('upload_preset', 'Event-management')
//         setUploading(true)
//         try {
//             const response = await axios.post(`https://api.cloudinary.com/v1_1/dyqlswfe4/image/upload`, formdata)
//             setUploadfile(response.data.url)

//             const result = await createUser(data.email, data.password)
//             await updateUserProfile(data.name, response.data.url)
//             console.log(result.user, 'create user')
//             setUser(result.user)
//             const userInfo = {
//                 email: data.email,
//                 name: data.name,
//                 photo: response.data.url,
//             }
//             const user = await publicAxios.post('/users', userInfo);
//             console.log(user.data, ' database er user')
//             if (user.data.insertedId) {
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "User Create Successfull",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//                 navigate('/')
//             }
//             setUploading(false)

//         } catch (error) {
//             console.log(error)
//             Swal.fire({
//                 position: "top-end",
//                 icon: "error",
//                 title: `${error.code}`,
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//             setUploading(false)
//         }

//     }
//     console.log(uploadfile)
//     return (
//         <section className="md:flex items-center justify-center md:px-12 py-10">
//             <div>
//                 <Lottie animationData={SignUpImage} />
//             </div>
//             <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//                 <div className="mb-8 text-center">
//                     <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
//                     <p className="text-sm dark:text-gray-600">Sign Up to your account</p>
//                 </div>
//                 <form
//                     onSubmit={handleSubmit(handelSignUp)}
//                     noValidate="" action="" className="space-y-12">
//                     <div className="space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block mb-2 text-sm">Name</label>
//                             <input
//                                 {...register("name", { required: true })}
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Enter your name "
//                                 className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
//                             {errors.name && <span className='text-red-500'>This field is required</span>}
//                         </div>
//                         <div className="space-y-1 text-sm">
//                             <label htmlFor="email" className="block dark:text-gray-600">Email</label>
//                             <input
//                                 {...register("email", { required: true })}
//                                 type="text"
//                                 name="email"
//                                 id="email"
//                                 placeholder="Enter your Email"
//                                 className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
//                             {errors.email && <span className='text-red-500'>This field is required</span>}
//                         </div>
//                         <div className="space-y-1 text-sm">
//                             <label htmlFor="password" className="block dark:text-gray-600">Password</label>
//                             <input
//                                 {...register("password", {
//                                     required: "This field is required",
//                                     pattern: {
//                                         value: /^(?=.*[a-z])(?=.*\d).{7,}$/,
//                                         message: "Must be at least 7 characters & include 1 lowercase and 1 number",
//                                     },
//                                 })}
//                                 type="password"
//                                 name="password"
//                                 id="password"
//                                 placeholder="Password"
//                                 className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
//                             {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//                         </div>
//                         <fieldset className="w-full space-y-1 dark:text-gray-800">
//                             <label htmlFor="files" className="block text-sm font-medium">Select a Photo</label>
//                             <div className="flex">
//                                 <input
//                                     onChange={handelfileChange}
//                                     required
//                                     type="file"
//                                     name="files"
//                                     id="files"
//                                     className="w-full px-3 py-2 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100" />

//                             </div>

//                         </fieldset>
//                     </div>
//                     <div className="space-y-2">
//                         <div>
//                             <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">{uploading ? 'Signing' : 'Sign Up'}</button>
//                         </div>
//                         <p className="px-6 text-sm text-center dark:text-gray-600">Already have an Account?
//                             <Link to='/login' className="hover:underline dark:text-violet-600">Login</Link>.
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default SignUp;

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import usePublic from "../hooks/usePublic";
import Swal from "sweetalert2";
import SignUpImage from '../assets/SignUp.json';
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const SignUp = () => {
    const { updateUserProfile, createUser, setUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [files, setFiles] = useState(null);
    const [uploading, setUploading] = useState(false);
    const publicAxios = usePublic();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFiles(e.target.files[0]);
    };

    const handleSignUp = async (data) => {
        if (!files) return;
        const formData = new FormData();
        formData.append('file', files);
        formData.append('upload_preset', 'Event-management');
        setUploading(true);

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dyqlswfe4/image/upload`, formData);
            const imageUrl = response.data.url;

            const result = await createUser(data.email, data.password);
            await updateUserProfile(data.name, imageUrl);
            setUser(result.user);

            const userInfo = {
                email: data.email,
                name: data.name,
                photo: imageUrl,
            };

            const user = await publicAxios.post('/users', userInfo);
            if (user.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
            setUploading(false);

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.code}`,
                showConfirmButton: false,
                timer: 1500
            });
            setUploading(false);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-scree p-5">

            <motion.section
                className="md:flex items-center justify-center md:px-12 py-10 md:mt-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <Lottie animationData={SignUpImage} />
                </div>
                <motion.div
                    className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 shadow-lg bg-base-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-300">Create your account</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
                        <div>
                            <label className="block text-sm">Name</label>
                            <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md border focus:border-violet-600" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm">Email</label>
                            <input {...register("email", { required: true })} type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md border focus:border-violet-600" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm">Password</label>
                            <input {...register("password", {
                                required: "This field is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*\d).{7,}$/,
                                    message: "Must be at least 7 characters & include 1 lowercase and 1 number",
                                },
                            })} type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md border focus:border-violet-600" />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div>
                            <label className="block text-sm">Profile Picture</label>
                            <input onChange={handleFileChange} type="file" className="w-full px-4 py-3 border-2 border-dashed rounded-md" />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-500"
                            whileHover={{ scale: 1.05 }}
                        >
                            {uploading ? 'Signing up...' : 'Sign Up'}
                        </motion.button>
                    </form>
                    <p className="px-6 text-sm text-center text-gray-300 mt-4">Already have an account? <Link to='/login' className="text-violet-600 hover:underline">Login</Link>.</p>
                </motion.div>
            </motion.section>
        </section>
    );
};

export default SignUp;
