import { Link } from "react-router-dom"

const SignIn = () => {
    return (
        <section id='login-reg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 forms-right-icons'>
                        <div className='section-heading'>
                            <h2>
                                Sign In With <span>Us</span>
                            </h2>
                            <p className='subheading'>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum.
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col-xs-2 icon'>
                                <i className='fa fa-bullhorn' />
                            </div>
                            <div className='col-xs-10 datablock'>
                                <h4>Powerful Features</h4>
                                <p>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum.
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-2 icon'>
                                <i className='far fa-life-ring' />
                            </div>
                            <div className='col-xs-10 datablock'>
                                <h4>Customer Support</h4>
                                <p>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='form-box'>
                            <div className='form-top'>
                                <div className='form-top-left'>
                                    <h3>Login to our site</h3>
                                    <p>Enter username and password to log on:</p>
                                </div>
                                <div className='form-top-right'>
                                    <i className='fa fa-key'></i>
                                </div>
                            </div>
                            <div className='form-bottom'>
                                <form role='form' action='' className='login-form'>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-user' />
                                        </span>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Username'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-unlock' />
                                        </span>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Password'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <button type='submit' className='btn'>
                                        Sign in!
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='social-login'>
                            <h3>...or login with:</h3>
                            <div className='social-login-buttons'>
                                <Link className='btn btn-link-1 btn-link-1-facebook' to='/'>
                                    <i className='fa fa-facebook' /> Facebook
                                </Link>
                                <Link className='btn btn-link-1 btn-link-1-twitter' to='/'>
                                    <i className='fa fa-twitter' /> Twitter
                                </Link>
                                <Link className='btn btn-link-1 btn-link-1-google-plus' to='/'>
                                    <i className='fa fa-google-plus' /> Google Plus
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignIn
