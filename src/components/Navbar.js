import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    let location = useLocation()

    return (
        <div>
            <section id='top-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-sm-7 col-xs-7 top-header-links'>
                            <ul className='contact_links'>
                                <li>
                                    <i className='fa fa-envelope'></i>
                                    <Link to='/'>sales@aspiresoftware.in</Link>
                                </li>
                                <li>
                                    <i className='fa fa-phone'></i>
                                    <Link to='/'>+91 848 594 5080</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-5 col-sm-5 col-xs-5 social'>
                            <ul className='social_links'>
                                <li>
                                    <Link to='/'>
                                        <i className='fa fa-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className='fa fa-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className='fa fa-linkedin'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className='fa fa-pinterest'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className='fa fa-skype'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <nav className='navbar navbar-inverse'>
                    <div className='container'>
                        <div className='row'>
                            <div className='navbar-header'>
                                <button
                                    type='button'
                                    className='navbar-toggle collapsed'
                                    data-toggle='collapse'
                                    data-target='#navbar'
                                    aria-expanded='false'
                                    aria-controls='navbar'
                                >
                                    <span className='sr-only'>Toggle navigation</span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                </button>
                                <Link className='navbar-brand' to='/'>
                                    <h1>Aspire</h1>
                                    <span>Software Solutions</span>
                                </Link>
                            </div>
                            <div id='navbar' className='collapse navbar-collapse navbar-right'>
                                <ul className='nav navbar-nav'>
                                    <li className={location.pathname === '/' ? 'active' : 'none'}>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li
                                        className={
                                            location.pathname === '/aboutus' ? 'active' : 'none'
                                        }
                                    >
                                        <Link to='/aboutus'>About</Link>
                                    </li>
                                    <li
                                        className={
                                            location.pathname === '/portfolio' ? 'active' : 'none'
                                        }
                                    >
                                        <Link to='/portfolio'>Portfolio</Link>
                                    </li>
                                    {/* <li>
                                        <Link to='faq.html'>FAQ</Link>
                                    </li> */}
                                    <li
                                        className={
                                            location.pathname === '/contact' ? 'active' : 'none'
                                        }
                                    >
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                    <li
                                        className={
                                            location.pathname === '/signin' ? 'active' : 'none'
                                        }
                                    >
                                        <Link to='/signin'>Sign In</Link>
                                    </li>
                                    <li
                                        className={
                                            location.pathname === '/signup' ? 'active' : 'none'
                                        }
                                    >
                                        <Link to='/signup'>Sign Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
