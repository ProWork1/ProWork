import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
// import SliderItem from './SliderItem'

function Slider() {
    return (
        <div>
            <Carousel>
                {/* <SliderItem text='' /> */}
                <Carousel.Item className='item'>
                    <img
                        className='d-block w-100'
                        src='./images/banner-slide-2.jpg'
                        alt='First slide'
                    />
                    <div className='fill'></div>
                    <Carousel.Caption>
                        <div className='carousel-caption slide-up'>
                            <h1 className='banner_heading'>
                                Providing The <span>Highest </span>Lorem
                            </h1>
                            <p className='banner_txt'>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix
                                denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.
                            </p>
                            <div className='slider_btn'>
                                <button type='button' className='btn btn-default slide'>
                                    Learn More <i className='fa fa-caret-right'></i>
                                </button>
                                <button type='button' className='btn btn-primary slide'>
                                    Learn More <i className='fa fa-caret-right'></i>
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item'>
                    <img
                        className='d-block w-100'
                        src='./images/banner-slide-3.jpg'
                        alt='First slide'
                    />
                    <div className='fill'></div>
                    <Carousel.Caption>
                        <div className='carousel-caption slide-up'>
                            <h1 className='banner_heading'>
                                Providing The <span>Highest </span>Lorem
                            </h1>
                            <p className='banner_txt'>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix
                                denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.
                            </p>
                            <div className='slider_btn'>
                                <button type='button' className='btn btn-default slide'>
                                    Learn More <i className='fa fa-caret-right'></i>
                                </button>
                                <button type='button' className='btn btn-primary slide'>
                                    Learn More <i className='fa fa-caret-right'></i>
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
