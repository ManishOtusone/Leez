import React from "react";
import ExploreAndNews from "../Common/ExploreAndNews"
import Nostamp from "../../assets/Nostamp.png";
import Up from "../../assets/Up.png";
import Demolition from "../../assets/Demolition.png";
import Oberoi from "../../assets/Oberoi.png";
import PgColiving from '../../assets/Images/Coliving.png'
import { useNavigate } from "react-router-dom";

const Coliving = () => {

    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate("/all-properties?type=rent");
    };

    const articles = {
        News: [
            { title: "No stamp duty on small housing plots in Haryana", date: "Aug 28, 2025", image: Nostamp },
            { title: "UP women homebuyers get 1% stamp duty rebate", date: "Jul 28, 2025", image: Up },
            { title: "Beginner’s guide to buying your first home", date: "Jul 5, 2025", image: Demolition },
            { title: "Checklist before finalizing a property", date: "Jun 25, 2025", image: Oberoi },
        ],
        "Tax & Legal": [
            { title: "GST rules updated for property buyers", date: "Aug 15, 2025", image: Nostamp },
            { title: "New TDS regulations on property sales", date: "Aug 10, 2025", image: Up },
        ],
        Guides: [
            { title: "Beginner’s guide to buying your first home", date: "Jul 5, 2025", image: Demolition },
            { title: "Checklist before finalizing a property", date: "Jun 25, 2025", image: Oberoi },
        ],
        Investment: [
            { title: "Top 5 cities for real estate investment in 2025", date: "Aug 1, 2025", image: Up },
            { title: "How to analyze ROI on rental properties", date: "Jul 15, 2025", image: Nostamp },
        ],
    };

    return (
        <ExploreAndNews
            exploreImage={PgColiving}
            exploreSubtitle="RENT A PG/ CO-LIVING"
            exploreTitle="Paying Guest or Co-living options"
            exploreText="Explore shared and private rooms in all top cities of india"
            buttonText="Explore PG/ Co-living"
            articleSectionTitle="Best articles on PG/Co-living"
            articleSectionDesc="Read from Beginners check-list to Pro Tips"
            articles={articles}
            onButtonClick={handleBuyClick}
        />
    );
};

export default Coliving;
