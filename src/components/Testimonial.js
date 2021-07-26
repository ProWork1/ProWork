const Testimonial = () => {
    return (
        <section id='testimonial' style={{ backgroundImage: 'url(/images/bg2.jpg)', backgroundSize: 'cover' }}>
            <div className='container'>
                <div className='section-heading text-center'>
                    <div className='col-md-12 col-xs-12'>
                        <h1>
                            What Our <span>Client Says</span>
                        </h1>
                        <p className='subheading'>
                            Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix
                            denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea
                            utamur impetus fuisset nam nostrud euismod volumus ne mei.
                        </p>
                    </div>
                </div>

                <div className='row'>
                    {[...new Array(3)].map(() => (
                        <div className='col-md-4 col-sm-12 block '>
                            <div className='testimonial_box'>
                                <p>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum ea utamur impetus fuisset.{' '}
                                </p>
                            </div>
                            <div className='arrow-down' />
                            <div className='testimonial_user'>
                                <div className='user-image'>
                                    <img
                                        src='/images/user1.png'
                                        alt='user'
                                        className='img-responsive'
                                    />
                                </div>
                                <div className='user-info'>
                                    <h5>Lorem Ipsum</h5>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonial
