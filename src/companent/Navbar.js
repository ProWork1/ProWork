import React from 'react'

export default function Navbar() {
    return (
        <div>
                <section id="top-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-7 col-xs-7 top-header-links">
                    <ul class="contact_links">
                        <li><i class="fa fa-envelope"></i><a href="/">sales@aspiresoftware.in</a></li>
                        <li><i class="fa fa-phone"></i><a href="/">+91 848 594 5080</a></li>
                    </ul>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-5 social">
                    <ul class="social_links">
                        <li><a href="/"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="/"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>

    <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
                        <a class="navbar-brand" href="/">
                            <h1>Aspire</h1><span>Software Solutions</span></a>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="features.html">Features</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="login.html">Sign In</a></li>
                            <li><a href="registration.html">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        </div>
    )
}