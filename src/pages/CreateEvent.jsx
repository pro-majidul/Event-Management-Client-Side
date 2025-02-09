import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import usePrivate from "../hooks/usePrivate";
import useAuth from "../hooks/useAuth";

const CreateEvent = () => {
    const {user}= useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const privateAxios = usePrivate();

    const onSubmit = (data) => {
        console.log("Event Data:", data);
        const info ={
            email : user?.email || 'guest@gmail.com'
        }

        
    };

    return (

        <div className="w-11/12 mx-auto  flex items-center justify-center mt-40">
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-base-300 bg-opacity-10 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-full max-w-lg border border-white/20"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold  text-center mb-5">Create an Event</h2>

                {/* Event Name */}
                <label className="block  font-medium">Event Name:</label>
                <input
                    type="text"
                    {...register("eventName", { required: "Event name is required" })}
                    className="w-full px-4 py-2 mt-2  bg-opacity-20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white"
                    placeholder="Enter event name"
                />
                {errors.eventName && <p className="text-red-400 text-sm mt-1">{errors.eventName.message}</p>}

                {/* Description */}
                <label className="block  font-medium mt-4">Description:</label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    className="w-full px-4 py-2 mt-2  bg-opacity-20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white"
                    placeholder="Write a short description"
                />
                {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>}

                {/* Date */}
                <label className="block  font-medium mt-4">Event Date:</label>
                <input
                    type="date"
                    {...register("eventDate", { required: "Event date is required" })}
                    className="w-full px-4 py-2 mt-2  bg-opacity-20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.eventDate && <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>}

                {/* Time */}
                <label className="block  font-medium mt-4">Event Time:</label>
                <input
                    type="time"
                    {...register("eventTime", { required: "Event time is required" })}
                    className="w-full px-4 py-2 mt-2  bg-opacity-20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.eventTime && <p className="text-red-400 text-sm mt-1">{errors.eventTime.message}</p>}
                {/* Category */}
                <div className="relative">
                    <label className="block  font-medium mt-4">Select Category </label>
                    <select
                        {...register("category", { required: "Event category is required" })}
                        defaultValue='Select A Category'
                        className="block appearance-none w-full py-2 px-4 border mt-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 bg-base-300 focus:ring-blue-500"
                    >
                        <option disabled value=" ">Select A Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Music">Music</option>
                        <option value="Business">Business</option>
                        <option value="Art">Art</option>
                    </select>
                    {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
                </div>
                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="mt-6 w-full py-3 bg-gradient-to-r from-green-400 to-blue-500  font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                >
                    Create Event
                </motion.button>
            </motion.form>
        </div>

    );
};

export default CreateEvent;