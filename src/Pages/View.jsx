import React from 'react'
import Banner from '../Componnets/View/Banner'
import Navbar from '../Componnets/Common/Navbar'
import PropertyDetails from '../Componnets/View/PropertyDetails'
import Overview from '../Componnets/View/Overview'
import Facilities from '../Componnets/View/Facilities'
import Address from '../Componnets/View/Address'
import NearByAndPrice from '../Componnets/View/NearbyProperties'
import Footer from '../Componnets/Common/Footer'

const View = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <PropertyDetails />
            <Overview />
            <Facilities />
            <Address/>
            <NearByAndPrice/>
            <Footer/>
        </div>
    )
}

export default View