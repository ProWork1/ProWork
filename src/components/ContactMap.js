const ContactMap = () => {
    return (
        <section id="contact">
            <div className="overlay">
                <div className="gmap-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="gmap">
                                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=JoomShaper,+Dhaka,+Dhaka+Division,+Bangladesh&amp;aq=0&amp;oq=joomshaper&amp;sll=37.0625,-95.677068&amp;sspn=42.766543,80.332031&amp;ie=UTF8&amp;hq=JoomShaper,&amp;hnear=Dhaka,+Dhaka+Division,+Bangladesh&amp;ll=23.73854,90.385504&amp;spn=0.001515,0.002452&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=1073661719450182870&amp;output=embed" />
                                </div>
                            </div>
                            <div className="col-sm-7 map-content">
                                <ul className="row">
                                    <li className="col-sm-6">
                                        <address>
                                            <h5>Head Office</h5>
                                            <p>Aspire Software Solutions <br />
                                                202, Parishram Complex,<br />
                                                Mithakhali Six Roads,<br />
                                                Navrangpura, Ahmedabad,<br />
                                                Gujarat, India. </p>
                                            <p>Phone:+91 848 594 5080 <br />
                                                Email Address:sales@aspiresoftware.in</p>
                                        </address>

                                    </li>
                                    <li className="col-sm-6">
                                        <address>
                                            <h5>Zone#2 Office</h5>
                                            <p>Aspire Software Solutions <br />
                                                202, Parishram Complex,<br />
                                                Mithakhali Six Roads,<br />
                                                Navrangpura, Ahmedabad,<br />
                                                Gujarat, India. </p>
                                            <p>Phone:+91 848 594 5080 <br />
                                                Email Address:sales@aspiresoftware.in</p>
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactMap