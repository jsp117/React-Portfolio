import React from "react";

function Header() {


    return (
        <header>
            <nav className="navbar fixed-top navbar-light">
                <a className="navbar-brand" href="index.html">
                    My Portfolio
                </a>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-toggler" type="a" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <nav className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </nav>
        </header>
    )

}


export default Header;