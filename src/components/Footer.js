import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section id='footer'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-3 col-sm-3 col-xs-12 block'>
                            <div class='footer-block'>
                                <h4>Address</h4>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum.
                                </p>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-3 col-xs-12 block'>
                            <div class='footer-block'>
                                <h4>Useful Links</h4>
                                <hr />
                                <ul class='footer-links'>
                                    <li>
                                        <Link to='/aboutus'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/portfolio'>Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/signin'>Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to='/signup'>Sign Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-3 col-xs-12 block'>
                            <div class='footer-block'>
                                <h4>Community</h4>
                                <hr />
                                <ul class='footer-links'>
                                    <li>
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Forum</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Free Goods</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-3 col-xs-12 <block></block>'>
                            <div class='footer-block'>
                                <h4>Recent Posts</h4>
                                <hr />
                                <ul class='footer-links'>
                                    <li>
                                        <Link to='/' class='post'>
                                            Lorem ipsum dolor sit amet
                                        </Link>
                                        <p class='post-date'>May 25, 2017</p>
                                    </li>
                                    <li>
                                        <Link to='/' class='post'>
                                            Lorem ipsum dolor sit amet
                                        </Link>
                                        <p class='post-date'>May 25, 2017</p>
                                    </li>
                                    <li>
                                        <Link to='/' class='post'>
                                            Lorem ipsum dolor sit amet
                                        </Link>
                                        <p class='post-date'>May 25, 2017</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='bottom-footer'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-6 col-sm-6 col-xs-12 btm-footer-links'>
                            <Link to='/'>Privacy Policy</Link>
                            <Link to='/'>Terms of Use</Link>
                        </div>
                        <div class='col-md-6 col-sm-6 col-xs-12 copyright'>
                            Developed by <Link to='/'>Aspire Software Solutions</Link> designed by{' '}
                            <Link to='/'>Designing Team</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
