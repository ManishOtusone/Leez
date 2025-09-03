import React from "react";
import Srikant from '../../assets/Srikanth.png'
import Prateek from '../../assets/Prateek.png'

const agents = [
    { id: 1, name: "Srikant", image: Srikant },
    { id: 2, name: "Prateek", image: Prateek },
    { id: 3, name: "Madhuri", image: Srikant },
    { id: 4, name: "Ajay", image: Prateek },
];

const NearbyAgents = () => {
    return (
        <div className="mt-10 px-4 sm:px-6 md:px-12 bg-gray-100 py-5">
            <h2 className="text-3xl md:text-3xl font-semibold mb-6 text-center">
                Near By Agents
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {agents.map((agent) => (
                    <div
                        key={agent.id}
                        className="flex flex-col items-center text-center"
                    >
                        <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-green-400  object-cover shadow-md"
                        />
                        <p className="mt-2 text-sm md:text-base font-medium text-gray-700">
                            {agent.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyAgents;
