import React, { useState, useEffect } from "react";
import PlayStore from "../../assets/Android.png";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerSections = [
        {
            title: "LEEZ",
            links: [
                "Mobile Apps",
                "Our Services",
                "Price Trends",
                "Post your Property",
                "Real Estate Investments",
                "Builders in India",
                "Area Converter",
                "Articles",
                "Rent Receipt",
                "Customer Service",
                "Sitemap",
            ],
        },
        {
            title: "Company",
            links: [
                "About us",
                "Contact us",
                "Careers with us",
                "Terms & Conditions",
                "Request Info",
                "Feedback",
                "Report a problem",
                "Testimonials",
                "Privacy Policy",
                "Summons/Notices",
                "Grievances",
                "Safety Guide",
            ],
        },
        {
            title: "Our Partners",
            links: [
                "Naukri.com - Jobs in India",
                "Naukrigulf.com - Jobs in Middle East",
                "Jeevansathi.com - Matrimonials",
                "Brijj.com - Professional Networking",
                "Shiksha.com - Education Career Info",
                "Policybazaar.com - Insurance India",
                "PaisaBazaar.com",
                "AmbitionBox.com",
                "FirstNaukri.com - Campus Hiring",
                "Jobhai.com – Find Jobs Near You",
                "Techminis.com - Tech news on the go",
            ],
        },
    ];

    return (
        <footer className="bg-[#041533] text-white py-12 px-6 mt-20 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {footerSections.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                        <ul className="space-y-2 text-sm">
                            {section.links.map((link, i) => (
                                <li
                                    key={i}
                                    className="hover:text-gray-300 transition-colors cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                    <p className="text-sm">Toll Free - 1800 41 99099</p>
                    <p className="text-sm">9:30 AM to 6:30 PM (Mon-Sun)</p>
                    <p className="text-sm mt-2">
                        Email -{" "}
                        <span className="text-blue-300 hover:underline cursor-pointer">
                            feedback@99acres.com
                        </span>
                    </p>

                    <h4 className="font-bold text-lg mt-6 mb-2">Connect with us</h4>

                    <h4 className="font-bold text-lg mt-6 mb-2">Download the App</h4>
                    <div className="flex gap-3">
                        <img
                            src={PlayStore}
                            alt="Google Play"
                            className="h-10 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-400 text-xs leading-5 max-w-4xl mx-auto">
                All rights reserved - Leez (India) Ltd.
            </div>

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                >
                    <FaArrowUp size={18} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
