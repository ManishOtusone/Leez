import { FaHeart, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Img1 from '../../assets/Images/Banner.png'
import Img2 from '../../assets/Images/Buying.png'


const nearbyProperties = [
    {
        id: 1,
        name: "Wings Tower",
        price: 35000,
        location: "Sector 63A, Noida",
        rating: 4.9,
        image: Img1,
    },
    {
        id: 2,
        name: "Wings Tower",
        price: 35000,
        location: "Sector 63A, Noida",
        rating: 4.9,
        image: Img2,
    },
    {
        id: 3,
        name: "Wings Tower",
        price: 35000,
        location: "Sector 63A, Noida",
        rating: 4.9,
        image: Img1,
    },
    {
        id: 4,
        name: "Wings Tower",
        price: 35000,
        location: "Sector 63A, Noida",
        rating: 4.9,
        image: Img2,
    },
];

const NearbyProperties = () => {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Nearby From this Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyProperties.map((property) => (
                    <div
                        key={property.id}
                        className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="relative">
                            <img
                                src={property.image}
                                alt={property.name}
                                className="w-full h-40 sm:h-48 object-cover"
                            />
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-red-500">
                                <FaHeart />
                            </button>
                            <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-md">
                                ₹ {property.price}/month
                            </span>
                        </div>

                        <div className="p-3">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                {property.name}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                <FaStar className="text-yellow-500" />
                                <span>{property.rating}</span>
                                <FaMapMarkerAlt className="text-blue-500 ml-2" />
                                <span>{property.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                    <p className="text-sm text-gray-500">Total Price</p>
                    <p className="text-lg font-bold text-gray-800">
                        ₹ 35000 <span className="text-sm font-normal">/month</span>
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-700 transition">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default NearbyProperties;
