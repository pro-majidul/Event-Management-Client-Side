

import { useState } from "react";
import { motion } from "framer-motion";

const events = [
    { id: 1, name: "Tech Conference", date: "2025-02-10", category: "Technology", status: "Upcoming" },
    { id: 2, name: "Music Festival", date: "2024-12-15", category: "Music", status: "Past" },
    { id: 3, name: "Startup Pitch", date: "2025-03-05", category: "Business", status: "Upcoming" },
    { id: 4, name: "Art Exhibition", date: "2024-11-20", category: "Art", status: "Past" },
];

export default function Home() {
    const [filter, setFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("All");

    const filteredEvents = events.filter(event =>
        (filter === "All" || event.category === filter) &&
        (dateFilter === "All" || event.status === dateFilter)
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
                {filteredEvents.map(event => (
                    <div key={event.id} className="bg-base-300 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">{event.name}</h2>
                        <p className="text-gray-600">{event.date}</p>
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
