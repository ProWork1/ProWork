import { Link } from 'react-router-dom'

const Process = () => {
    return (
        <section id='process'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <div className='col-md-12 col-xs-12'>
                        <h1>
                            What <span>We Do</span>
                        </h1>
                        <p className='subheading'>
                            Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix
                            denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea
                            utamur impetus fuisset nam nostrud euismod volumus ne mei.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-sm-6 block process-block'>
                        <div className='process-icon-holder'>
                            <div className='process-border'>
                                <span className='process-icon'>
                                    <Link to='/'>
                                        <i className='far fa-lightbulb feature_icon' />
                                    </Link>
                                </span>
                            </div>
                            <div className='clearfix' />
                        </div>
                        <div className='process-text-block'>
                            <h4>
                                <Link to='/'>Idea</Link>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 block process-block'>
                        <div className='process-icon-holder'>
                            <div className='process-border'>
                                <span className='process-icon'>
                                    <Link to='/'>
                                        <i className='fas fa-cloud-download-alt feature_icon' />
                                    </Link>
                                </span>
                            </div>
                            <div className='clearfix' />
                        </div>
                        <div className='process-text-block'>
                            <h4>
                                <Link to='/'>Concept</Link>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 block process-block'>
                        <div className='process-icon-holder'>
                            <div className='process-border'>
                                <span className='process-icon'>
                                    <Link to='/'>
                                        <i className='fa fa-magic feature_icon' />
                                    </Link>
                                </span>
                            </div>
                            <div className='clearfix' />
                        </div>
                        <div className='process-text-block'>
                            <h4>
                                <Link to='/'>Design</Link>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 block process-block lastchild'>
                        <div className='process-icon-holder'>
                            <div className='process-border'>
                                <span className='process-icon'>
                                    <Link to='/'>
                                        <i className='fa fa-cog feature_icon' />
                                    </Link>
                                </span>
                            </div>
                            <div className='clearfix' />
                        </div>
                        <div className='process-text-block'>
                            <h4>
                                <Link to='/'>Develop</Link>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Process
