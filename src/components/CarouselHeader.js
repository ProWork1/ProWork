import React from 'react'

const CarouselHeader = () => {
    return (
        <div>
            <div className='carousel-inner' style={{ backgroundImage: 'url("/images/banner-slide-1.jpg")' }}>
                <div className='item active'>
                    <div className='fill' />
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
                </div>

                {/* <div className='item'>
                    <div className='fill'></div>
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
                </div> */}
            </div>
        </div>
    )
}

export default CarouselHeader
