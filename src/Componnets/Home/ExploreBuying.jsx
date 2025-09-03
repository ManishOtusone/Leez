import React from "react";
import ExploreAndNews from "../Common/ExploreAndNews"
import BuyHouse from "../../assets/Images/Buying.png";
import { useNavigate } from "react-router-dom";

const ExploreBuying = () => {

    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate("/all-properties?type=buy");
    };


    return (
        <ExploreAndNews
            heading="ALL PROPERTY NEEDS - ONE PORTAL"
            subHeading="Find Better Places to Live, Work and Wonder..."
            exploreImage={BuyHouse}
            exploreSubtitle="BUY A HOME"
            exploreTitle="Find, Buy & Own Your Dream Home"
            exploreText="Explore from Apartments, land, builder floors, villas and more"
            buttonText="Explore Buying"
            onButtonClick={handleBuyClick}


        />
    );
};

export default ExploreBuying;
