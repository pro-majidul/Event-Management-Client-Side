import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const handelSignUp = async (data) => {
        console.log(data)
    }
    return (
        <section className="md:flex items-center justify-center md:px-12 py-10">
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus vero ea aut? Voluptates asperiores ducimus voluptate aliquid laborum, placeat, beatae rerum nulla itaque aut numquam at aspernatur! Voluptatem, neque!</p>
            </div>
            <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-600">Sign Up to your account</p>
                </div>
                <form
                    onSubmit={handleSubmit(handelSignUp)}
                    noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name "
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
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
                        <fieldset className="w-full space-y-1 dark:text-gray-800">
                            <label htmlFor="files" className="block text-sm font-medium">Select a Photo</label>
                            <div className="flex">
                                <input
                                    {...register("files", { required: true })}
                                    type="file"
                                    name="files"
                                    id="files"
                                    className="w-full px-3 py-2 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100" />
                                {errors.files && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </fieldset>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an Account?
                            <Link to='/login' className="hover:underline dark:text-violet-600">Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;