

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import usePublic from "../hooks/usePublic";
const Home = () => {
    const [filter, setFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("All");
    const [events, setEvents] = useState([])
    const publicAxios = usePublic()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await publicAxios.get('/events');
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, [publicAxios])

    const filteredEvents = events.filter(event =>
        (filter === "All" || event.category === filter) &&
        (dateFilter === "All" || event.eventTime === dateFilter)
    );

    return (
        <div className="max-w-7xl w-full mx-auto mt-40 px-12">

            <div className="flex justify-between mb-4">
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="block appearance-none w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 bg-base-300 focus:ring-blue-500"
                    >
                        <option value="All">All Categories</option>
                        <option value="Technology">Technology</option>
                        <option value="Music">Music</option>
                        <option value="Business">Business</option>
                        <option value="Art">Art</option>
                    </select>
                </div>

                <div className="relative">
                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="block appearance-none w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm  bg-base-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">All Dates</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Past">Past</option>
                    </select>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2"
            >
                 {filteredEvents && filteredEvents.map(event => (
                    <div key={event.id} className="bg-base-300 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">{event.eventName}</h2>
                        <div className='flex items-center justify-between'>
                        <p className="text-gray-600">{event.eventDate}</p>
                        <p className="text-gray-600">{event.eventTime}</p>
                        </div>
                        <p className="text-sm text-blue-600">{event.category}</p>
                        <div className="mt-4">
                            <button
                                className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                            >
                                More Details
                            </button>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

    );
}
export default Home;