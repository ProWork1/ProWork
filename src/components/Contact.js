const Contact = () => {
    return (
        <section id='contact-page'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <h2>
                        Drop your <span>Message</span>
                    </h2>
                    <p className='subheading'>
                        Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix
                        denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea
                        utamur impetus fuisset nam nostrud euismod volumus ne mei.
                    </p>
                </div>
                <div className='row contact-wrap'>
                    <div className='status alert alert-success' style={{ display: 'none' }} />
                    <form
                        id='main-contact-form'
                        className='contact-form'
                        name='contact-form'
                        method='post'
                        action=''
                    >
                        <div className='col-sm-5 col-sm-offset-1'>
                            <div className='form-group'>
                                <label>Name *</label>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control'
                                    required='required'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Email *</label>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control'
                                    required='required'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input type='number' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Company Name</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label>Subject *</label>
                                <input
                                    type='text'
                                    name='subject'
                                    className='form-control'
                                    required='required'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Message *</label>
                                <textarea
                                    name='message'
                                    id='message'
                                    required='required'
                                    className='form-control'
                                    rows='8'
                                />
                            </div>
                            <div className='form-group'>
                                <button
                                    type='submit'
                                    name='submit'
                                    className='btn btn-default submit-button'
                                >
                                    Submit Message <i className='fa fa-caret-right' />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
