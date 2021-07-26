import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <section id='portfolio'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-heading text-center'>
                            <div className='col-md-12 col-xs-12'>
                                <h1>
                                    Our <span>Latest Work</span>
                                </h1>
                                <p className='subheading'>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum ea utamur impetus fuisset nam nostrud euismod volumus
                                    ne mei.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {[...new Array(3)].map(() => (
                            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item'>
                                <div className='portfolio-one'>
                                    <div className='portfolio-head'>
                                        <div className='portfolio-img'>
                                            <img alt='' src='../images/portfolio-1.jpg' />
                                        </div>
                                        <div className='portfolio-hover'>
                                            <a className='portfolio-link' href='#'>
                                                <i className='fa fa-link'></i>
                                            </a>
                                            <a className='portfolio-zoom' href='#'>
                                                <i className='fa fa-search'></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='portfolio-content'>
                                        <h5 className='title'>Lorem Ipsum</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet sit legimus copiosae
                                            instructior ei ut vix denique fierentis ea saperet
                                            inimicu ut qui dolor oratio mnesarchum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <nav aria-label='Page navigation example'>
                                <ul className='pagination pagination-lg justify-content-end'>
                                    <li className='page-item'>
                                        <a className='page-link' href='#' tabindex='-1'>
                                            Previous
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            1
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            2
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            3
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
