import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import BricksMarvella from '../../assets/Images/Bricks.png';
import RishiCoralWoodBungalows from '../../assets/Images/Rishi.png';
import Rishi from '../../assets/Rishi.png';
import Bricks from '../../assets/Bricks.png';

const projects = [
    {
        id: 1,
        name: "Bricks Marvella",
        location: "2,3,4 BHK Apartment, Tellapur, Hyderabad",
        price: "₹99.71 Lacs - 2.58 Cr",
        image: BricksMarvella,
        logo: Bricks
    },
    {
        id: 2,
        name: "Rishi Coral Wood Bungalows",
        location: "4,5 BHK Independent House/Villa, Hoshangabad Road, Bhopal",
        price: "₹1.95 Cr",
        image: RishiCoralWoodBungalows,
        logo: Rishi
    }
];

const HandpickedProject = () => {
    const [likedProjects, setLikedProjects] = useState([]);

    const toggleLike = (id) => {
        setLikedProjects(prev =>
            prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-[1044px] mx-auto p-4 sm:p-6 mt-10">
            <h3 className="text-xl font-semibold text-center sm:text-left">Handpicked Residential Projects</h3>
            <p className="text-gray-600 mb-6 text-center sm:text-left">Featured Residential projects across India</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="relative rounded-lg overflow-visible shadow-md hover:shadow-lg transition-shadow duration-300 bg-white
                 mb-20 md:mb-0"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-64 sm:h-60 md:h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                        />

                        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            Featured
                        </span>

                        <span
                            onClick={() => toggleLike(project.id)}
                            className={`absolute top-2 right-2 text-xl cursor-pointer transition-transform duration-200 ${likedProjects.includes(project.id)
                                ? 'text-yellow-400 scale-110'
                                : 'text-gray-300 hover:text-yellow-400'
                                }`}
                        >
                            <AiFillStar />
                        </span>

                        <div className="absolute -bottom-10 w-[90%] left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-6 md:translate-y-8 bg-white rounded-lg p-4 shadow-md flex items-center gap-4">
                            <img
                                src={project.logo}
                                alt="Project Logo"
                                className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg bg-white"
                            />

                            <div className="flex flex-col">
                                <h4 className="text-md font-semibold">{project.name}</h4>
                                <p className="text-sm text-gray-500">{project.location}</p>
                                <p className="text-lg font-medium mt-2">{project.price}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    );
};

export default HandpickedProject;
