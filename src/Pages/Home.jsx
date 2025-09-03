import React from 'react'
import Navbar from '../Componnets/Common/Navbar'
import Banner from '../Componnets/Home/Banner'
import ExplorerCards from '../Componnets/Home/ExplorerCards'
import ExploreBuying from '../Componnets/Home/ExploreBuying'
import NewlyLaunched from '../Componnets/Home/NewlyLaunched'
import HandpickedProject from '../Componnets/Home/HandpickedProject'
import UpcomingProjects from '../Componnets/Home/UpcomingProjects'
import ExploreRenting from '../Componnets/Home/ExploreRenting'
import SellAndRent from '../Componnets/Home/SellAndRent'
import Service from '../Componnets/Home/Service'
import Coliving from '../Componnets/Home/Coliving'
import ExploreCity from '../Componnets/Home/ExploreCity'
import CommercialSpaces from '../Componnets/Home/CommercialSpaces'
import WhyChoose from '../Componnets/Home/WhyChoose'
import Testimonials from '../Componnets/Home/Testimonials'
import DownloadBanner from '../Componnets/Home/DownloadBanner'
import QuickLinks from '../Componnets/Home/QuickLinks'
import Footer from '../Componnets/Common/Footer'
import FeaturedProperty from '../Componnets/Home/FeaturedProperty'
import NearbyAgents from '../Componnets/Home/NearBYAgents'
import NearbyProperties from '../Componnets/Home/NearByProperties'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ExplorerCards />
            <ExploreBuying />
            <FeaturedProperty/>
            <NewlyLaunched />
            <HandpickedProject />
            <UpcomingProjects />
            <ExploreRenting />
            <NearbyAgents/>
            <SellAndRent />
            <NearbyProperties/>
            {/* <Service /> */}
            <Coliving />
            <ExploreCity />
            <CommercialSpaces />
            <WhyChoose />
            <Testimonials />
            <DownloadBanner/>
            <QuickLinks/>
            <Footer/>

        </div>
    )
}

export default Home