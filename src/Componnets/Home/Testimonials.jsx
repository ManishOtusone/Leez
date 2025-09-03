import React from 'react';
import Srikanth from '../../assets/Srikanth.png';
import Prateek from '../../assets/Prateek.png';
import Sobha from '../../assets/SOBHA.png';

const testimonials = [
    {
        id: 1,
        name: "Srikanth Malleboina",
        role: "Owner, Hyderabad",
        image: Srikanth,
        feedback: "You get an exclusive RM from 99acres team who tracks your property closely"
    },
    {
        id: 2,
        name: "Prateek",
        role: "Owner, Delhi",
        image: Prateek,
        feedback: "Leez has a better response rate compared to any of their competitors."
    },
    {
        id: 3,
        name: "SOBHA Developers",
        role: "Developer",
        image: Sobha,
        feedback: "Platform to meet customers & generate revenues with lowest cost of acquisition"
    }
];

const Testimonials = () => {
    return (
        <div className='bg-[#F4F5F7] py-12 px-4'>
            <div className='max-w-6xl mx-auto mb-10 text-center '>
                <p className='text-sm font-semibold text-gray-500'>TESTIMONIALS</p>
                <h3 className='text-2xl md:text-3xl font-bold mt-2'>
                    What our customers are <br /> saying about LEEZ
                </h3>
                <p className='text-gray-600 mt-2'>Hear from our satisfied buyers, tenants, owners and dealers</p>
            </div>

            <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                {testimonials.map((testi) => (
                    <div key={testi.id} className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src={testi.image} alt={testi.name} className='w-16 h-16 rounded-full object-cover' />
                            <div>
                                <p className='font-semibold'>{testi.name}</p>
                                <p className='text-gray-500 text-sm'>{testi.role}</p>
                            </div>
                        </div>
                        <p className='text-gray-700'>{testi.feedback}</p>
                    </div>
                ))}
            </div>

            <div className='mt-8 text-center'>
                <button className='font-semibold hover:underline'>
                    View All Testimonials
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
