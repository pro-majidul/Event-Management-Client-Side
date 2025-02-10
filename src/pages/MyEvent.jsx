import React from 'react';
import useAuth from '../hooks/useAuth';
import { motion } from "framer-motion";
import { useQuery } from '@tanstack/react-query';
import usePrivate from '../hooks/usePrivate';

const MyEvent = () => {
    const { user } = useAuth()
    const privateAxios = usePrivate()
    const { data: events = [ ], isError, isLoading, refetch } = useQuery({
        queryKey: ['clientdata', user?.email],
        queryFn: async () => {
            const result = await privateAxios.get(`/events/${user?.email}`)
            return result.data;

        },
        enabled: !!user
    })
    console.log(events)

    return (
        <div className='md:mt-36 mt-32 w-full max-w-7xl mx-auto px-12'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2"
            >
                {events && events.map(event => (
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
};

export default MyEvent;