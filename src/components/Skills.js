import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <section id='features'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-xs-12 block'>
                        <div className='col-md-2 col-xs-2'>
                            <i className='fa fa-laptop feature_icon' />
                        </div>
                        <div className='col-md-10 col-xs-10'>
                            <h4>100% Responsive</h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum.
                            </p>
                            <Link to='/' className='readmore'>
                                Read More <i className='fa fa-caret-right' />
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 col-xs-12 block'>
                        <div className='col-md-2 col-xs-2'>
                            <i className='fa fa-bullhorn feature_icon' />
                        </div>
                        <div className='col-md-10 col-xs-10'>
                            <h4>Powerful Features</h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum.
                            </p>
                            <Link to='/' className='readmore'>
                                Read More <i className='fa fa-caret-right' />
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 col-xs-12 block'>
                        <div className='col-md-2 col-xs-2'>
                            <i className='far fa-life-ring feature_icon' />
                        </div>
                        <div className='col-md-10 col-xs-10'>
                            <h4>Customer Support</h4>
                            <p>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum.
                            </p>
                            <Link to='/' className='readmore'>
                                Read More <i className='fa fa-caret-right' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
