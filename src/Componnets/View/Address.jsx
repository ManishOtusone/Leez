import { FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
    const lat = 28.6076262; 
    const lng = 77.4211557;
    const zoom = 15;
    

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Address
                </h2>
                <a
                    href={`https://www.google.com/maps?q=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 font-medium hover:underline"
                >
                    View on Map
                </a>
            </div>

            <div className="flex items-start gap-2 mb-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base">
                    1012 Ocean Avenue, Noida Sector 2, India
                </p>
            </div>

            <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-xl">
                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
                    className="w-full h-full rounded-xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                
            </div>
        </div>
    );
};

export default Address;
