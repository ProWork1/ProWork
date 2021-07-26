import React from 'react'
import AboutUsHome from '../components/AboutUsHome'
import Carousel from '../components/Carousel'
import Process from '../components/Process'
import Skills from '../components/Skills'
import Testimonial from '../components/Testimonial'

const HomeScreen = () => {
    return (
        <div>
            <div>
                <Carousel />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <AboutUsHome />
            </div>
            <div>
                <Process />
            </div>
            <div>
                <Testimonial />
            </div>
        </div>
    )
}

export default HomeScreen
