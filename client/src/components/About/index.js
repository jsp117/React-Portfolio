import React from "react";
import "./style.css"
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../profile.jpeg';

AOS.init();

function About() {

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
            <section className="row">
                <section className="background"></section>
                <section className="col-lg-12">
                    <section className="card mb-3 back">
                        <header className="card-header">
                            <h2>About Me</h2>
                        </header>
                        <div className="container pl-5 pr-5">
                            <section className="row">
                                <article className="card-body">
                                    <img className="pl-3 img-fluid d-block float-left mb-3 col picture"
                                        // src="https://media-exp1.licdn.com/dms/image/C4E03AQEa1XPMTj3BqQ/profile-displayphoto-shrink_200_200/0/1518801026907?e=1621468800&v=beta&t=D64o529EfuC0Cj8WmAXHpnY6lNFcH8WAd0ebcQ_S3DI"
                                        src={img}
                                        style={{borderRadius: "25%"}}
                                        alt="Jon SanPedro Picture"></img><p className="card-text text-wrap pt-4 col"> Hello! I'm Jonathan
                                        SanPedro
                                        and I am currently working at SignalFire as a Web Developer. I graduated from Rutgers
                                        University
                                        in
                                        2014 with a
                                        bachelors in Information Technology and Informatics. Last year in September, I enrolled in the UC Berkeley Coding Bootcamp and earned my certificate in the full stack program. In the month after, I got an internship with SignalFire where I continue to work today!</p>
                                </article>
                            </section>
                        </div>
                        <div className="container mt-5 pbottom">
                            <section className="row">

                                <div className="col">
                                    <p className="card-text">Current City: San Francisco, California </p>
                                    <p className="card-text">Resume: </p>
                                    <ul>
                                        <a href="https://docs.google.com/document/d/1_TAbb2VMnB3buK-PAWFTQWWOwkbU7HlzU09rbcLFzic/edit?usp=sharing"
                                            target="_blank" rel="noreferrer">Link</a><br /> <br />
                                    </ul>
                                    <p className="card-text">Skills: </p>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>MySQL</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>REST APIs</li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <p className="card-text">Contact Information: </p>
                                    <ul>
                                        <li>Phone: (609)468-2447</li>
                                        <li>
                                            <div>Email: <a href="mailto:jonsp14@gmail.com" name="email"
                                                id="email">jonsp14@gmail.com</a></div>
                                        </li><br />
                                        <a href="https://www.linkedin.com/in/jonathan-s-6ab32283/"
                                            target="_blank" rel="noreferrer"><img id="linkedin" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"></img></a>
                                        <a href="https://github.com/jsp117" target="_blank" rel="noreferrer">
                                            <img src="https://img.icons8.com/metro/26/000000/github.png" alt="github logo" />
                                        </a>
                                    </ul>
                                </div>

                            </section>
                        </div>
                    </section>
                </section>
            </section >
            <div id="push"></div>
        </div >
    )
}


export default About;