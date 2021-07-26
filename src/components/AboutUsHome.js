const AboutUsHome = () => {
    return (
        <section id='about'>
            <div className='image-holder col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left'>
                <div className='background-imgholder'>
                    <img src="/images/1.jpg" alt="about" className="img-responsive" />
                </div>
            </div>
            <div className='container-fluid'>
                <div className='col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-2 col-xs-12 text-inner '>
                    <div className='text-block'>
                        <div className='section-heading'>
                            <h1>
                                ABOUT <span>US</span>
                            </h1>
                            <p className='subheading'>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut.
                            </p>
                        </div>

                        <ul className='aboutul'>
                            <li>
                                <i className='fa fa-check' />
                                Vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum.
                            </li>
                            <li>
                                <i className='fa fa-check' />
                                legimus copiosae instructior ei ut vix denique fierentis atqui
                                mucius consequat ad pro.
                            </li>
                            <li>
                                <i className='fa fa-check' />
                                Ea saperet inimicu ut qui dolor oratio maiestatis ubique mnesarchum.
                            </li>
                            <li>
                                <i className='fa fa-check' />
                                Sanctus voluptatibus et per illum noluisse facilisis quo atqui
                                mucius ad pro.
                            </li>
                            <li>
                                <i className='fa fa-check' />
                                At illum noluisse facilisis quo te dictas epicurei suavitate qui his
                                ad.
                            </li>
                            <li>
                                <i className='fa fa-check' />
                                Tantas propriae mediocritatem id vix qui everti efficiantur an
                                ocurreret consetetur.
                            </li>
                        </ul>

                        <button type='button' className='btn btn-primary slide'>
                            Learn More <i className='fa fa-caret-right' />{' '}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUsHome
