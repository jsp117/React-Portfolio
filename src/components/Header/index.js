import React from "react";

function Header() {


    return (
        <header>
            <nav class="navbar fixed-top navbar-light">
                <a class="navbar-brand" href="index.html">
                    My Portfolio
                </a>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <nav class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </nav>
        </header>
    )

}


export default Header;