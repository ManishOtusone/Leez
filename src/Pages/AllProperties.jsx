import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ useNavigate here
import Navbar from "../Componnets/Common/Navbar";
import Footer from "../Componnets/Common/Footer";
import Banner from "../Componnets/AllProperties/Banner";

const AllProperties = () => {
    const location = useLocation();
    const navigate = useNavigate(); // ✅ initialize navigate

    const queryParams = new URLSearchParams(location.search);
    const initialType = queryParams.get("type") || "buy";

    const [selectedType, setSelectedType] = useState(initialType);

    const properties = {
        buy: [
            {
                id: 1,
                name: "Luxury Apartment",
                price: "₹ 85 Lac",
                location: "Noida",
                image:
                    "https://gplwebsitecdnblob.blob.core.windows.net/godrej-cdn/Images/dd72330a-5447-470d-9063-10fe893471a5.webp",
            },
            {
                id: 2,
                name: "Villa Paradise",
                price: "₹ 1.5 Cr",
                location: "Gurgaon",
                image:
                    "https://goldendreamproperty.com/wp-content/uploads/2024/12/Ikebana-4.webp",
            },
        ],
        rent: [
            {
                id: 3,
                name: "2BHK Flat",
                price: "₹ 20,000/mo",
                location: "Delhi",
                image:
                    "https://goldendreamproperty.com/wp-content/uploads/2024/12/Ikebana-4.webp",
            },
            {
                id: 4,
                name: "Studio Apartment",
                price: "₹ 12,000/mo",
                location: "Noida",
                image:
                    "https://adaabazaar.com/cdn/shop/articles/s7w9ptr0_65249f60-816c-4f36-aa7d-81c747217fe2.jpg?v=1743083623",
            },
        ],
        commercial: [
            {
                id: 5,
                name: "Office Space",
                price: "₹ 65 Lac",
                location: "Sector 62, Noida",
                image:
                    "https://adaabazaar.com/cdn/shop/articles/s7w9ptr0_65249f60-816c-4f36-aa7d-81c747217fe2.jpg?v=1743083623",
            },
            {
                id: 6,
                name: "Retail Shop",
                price: "₹ 45 Lac",
                location: "Connaught Place, Delhi",
                image:
                    "https://image.gopropify.com/project/Godrej%20Park%20Lane%20cover_6f3272d8-7c76-4070-9fd9-ad995eaf7850.webp",
            },
        ],
    };

    useEffect(() => {
        const type = new URLSearchParams(location.search).get("type") || "buy";
        setSelectedType(type);
    }, [location]);

    const headings = {
        buy: "Buy Properties",
        rent: "Rent Properties",
        commercial: "Commercial Properties",
    };

    return (
        <div>
            <Navbar />
            <Banner />

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">{headings[selectedType]}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties[selectedType].map((property) => (
                        <div
                            key={property.id}
                            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                            onClick={() => navigate("/view")} // ✅ navigate on click
                        >
                            <img
                                src={property.image}
                                alt={property.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{property.name}</h2>
                                <p className="text-gray-600">{property.location}</p>
                                <p className="text-blue-600 font-bold">{property.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProperties;
