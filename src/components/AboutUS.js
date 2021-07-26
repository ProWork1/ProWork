import React from 'react'

const AboutUS = () => {
    return (
        <section id='about-page-section-3'>
            <div className='container' style={{ paddingBottom: '60px' }}>
                <div className='row'>
                    <div className='col-md-8 col-sm-8 col-xs-6'>
                        <h4>About</h4>
                    </div>
                    <div className='col-md-4 col-sm-4 col-xs-6' style={{ textAlign: 'right' }}>
                        Home<span className='sep'> / </span>
                        <span className='current'> About</span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-7 text-align'>
                        <div className='section-heading'>
                            <h2>
                                About <span>Us</span>
                            </h2>
                            <p className='subheading'>
                                Lorem ipsum send do tempor consectetur ipsum send do tempor.
                            </p>
                        </div>
                        <p>
                            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                            amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Aenean
                            commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consec tetuer adipis elit, aliquam eget nibh etlibura. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec
                            tetuer adipis elit, aliquam eget nibh etlibura.
                            <br />
                            <br /> Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor
                            sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Aenean
                            commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consec tetuer adipis elit, aliquam eget nibh etlibura.
                        </p>
                        <button type='button' className='btn btn-primary slide'>
                            Learn More <i className='fa fa-caret-right'></i>
                        </button>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-5'>
                        <img
                            height='200px'
                            width='auto'
                            src='/images/iphone62.png'
                            className='attachment-full img-responsive'
                            alt='image'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUS
