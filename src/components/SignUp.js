const SignUp = () => {
    return (
        <section id='login-reg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 forms-right-icons'>
                        <div className='section-heading'>
                            <h2>
                                Sign Up With <span>Us</span>
                            </h2>
                            <p className='subheading'>
                                Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut
                                vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                mnesarchum ea utamur impetus fuisset nam nostrud euismod volumus ne
                                mei.
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col-xs-2 icon'>
                                <i className='fa fa-laptop' />
                            </div>
                            <div className='col-xs-10 datablock'>
                                <h4>100% Responsive</h4>
                                <p>
                                    Lorem ipsum dolor sit amet sit legimus copiosae instructior ei
                                    ut vix denique fierentis ea saperet inimicu ut qui dolor oratio
                                    mnesarchum.
                                </p>
                            </div>
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
                                    <h3>Sign up now</h3>
                                    <p>Fill in the form below to get instant access</p>
                                </div>
                                <div className='form-top-right'>
                                    <i className='fa fa-pencil' />
                                </div>
                            </div>
                            <div className='form-bottom'>
                                <form action='' className='login-form'>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-user' />
                                        </span>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='First Name'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-user' />
                                        </span>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Last Name'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-envelope' />
                                        </span>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Email'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <div className='input-group form-group'>
                                        <span className='input-group-addon' id='basic-addon1'>
                                            <i className='fa fa-phone' />
                                        </span>
                                        <input
                                            type='tel'
                                            className='form-control'
                                            placeholder='Phone No.'
                                            aria-describedby='basic-addon1'
                                        />
                                    </div>
                                    <div className='input-group form-group'>
                                        <textarea
                                            rows='4'
                                            cols='70'
                                            className='form-control'
                                            placeholder='Message'
                                        ></textarea>
                                    </div>
                                    <button type='submit' className='btn'>
                                        Sign me up!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUp
