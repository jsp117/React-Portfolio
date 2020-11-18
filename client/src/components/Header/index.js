import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header({ page, click }) {


    return (
        <header>
            <nav className="navbar fixed-top navbar-light">
                <h4 onClick={click} name="about" value="about" className="nav-item">
                    {/* <a onClick={click} className={page === "index" ? "nav-link active" : "nav-link"} name="index" href="/index">About</a> */}
                    <Link className="text-light" to={"/about"}>My Portfolio</Link>

                </h4>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-toggler" type="a" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <nav className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 color">
                            <li onClick={click} name="projects" className="nav-item">
                                {/* <a onClick={click} className={page === "projects" ? "nav-link active" : "nav-link"} name="projects" href="/projects">Projects</a> */}
                                <Link className={page === "projects" ? "nav-link active" : "nav-link"} to={"/projects"}>Projects</Link>
                            </li>
                            <li onClick={click} name="contact" className="nav-item">
                                {/* <a onClick={click} className={page === "contact" ? "nav-link active" : "nav-link"} name="contact" href="/contact">Contact</a> */}
                                <Link className={page === "contact" ? "nav-link active" : "nav-link"} to={"/contact"}>Contact</Link>

                            </li>
                            <li onClick={click} name="portfolio" value="portfolio" className="nav-item">
                                {/* <a onClick={click} className={page === "portfolio" ? "nav-link active" : "nav-link"} name="portfolio" href="/portfolio">Portfolio</a> */}
                                <Link className={page === "portfolio" ? "nav-link active" : "nav-link"} to={"/portfolio"}>Portfolio</Link>
                            </li>
                            <li onClick={click} name="about" value="about" className="nav-item">
                                {/* <a onClick={click} className={page === "index" ? "nav-link active" : "nav-link"} name="index" href="/index">About</a> */}
                                <Link className={page === "about" ? "nav-link active" : "nav-link"} to={"/about"}>About</Link>

                            </li>
                        </ul>
                    </nav>
                </nav>
            </nav>
        </header>
    )

}


export default Header;