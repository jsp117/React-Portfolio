import React from "react";

function Header({page, click}) {


    return (
        <header>
            <nav className="navbar fixed-top navbar-light">
                <a className="navbar-brand" href="index.html">
                    My Portfolio
                </a>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-toggler" onClick={click} name="index" type="a" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <nav className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a onClick={click} className={page === "projects" ? "nav-link active" : "nav-link"} name="projects" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={click} className={page === "contact" ? "nav-link active" : "nav-link"} name="contact" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={click} className={page === "portfolio" ? "nav-link active" : "nav-link"} name="portfolio" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={click} className={page === "index" ? "nav-link active" : "nav-link"} name="index" href="/index">About</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </nav>
        </header>
    )

}


export default Header;