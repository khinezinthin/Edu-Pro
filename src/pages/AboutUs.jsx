import React from 'react'
import Knowledge from "../components/AboutUsPagesComponent/Knowledge"
import WhatweOffer from "../components/AboutUsPagesComponent/WhatweOffer"
import FreeWorkShop from "../components/AboutUsPagesComponent/FreeWorkShop"
import Learners from '../components/AboutUsPagesComponent/Learners'
import Skilled from "../components/AboutUsPagesComponent/Skilled"
import Feedback from "../components/AboutUsPagesComponent/Feedback"
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <>
        <section>
            <Navbar value={2}/>
        </section>
        <section>
            <Banner title1={"About Us"}/>
        </section>
        <section>
            <Knowledge/>
        </section>

        <section>
            <WhatweOffer/>
        </section>

        <section>
            <FreeWorkShop/>
        </section>

        <section>
            <Learners/>
        </section>

        <section>
            <Skilled/>
        </section>

        <section>
            <Feedback/>
        </section>
        <section>
            <Footer/>
        </section>
    </>
  )
}

export default AboutUs