import React from "react";
import "./style.css";
function Portfolio({ repos }) {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="3000">
            <section class="row">
                <section class="col-lg-12">
                    <section class="card mb-3 back portfolioHolder">
                        <header class="card-header">
                            <h2 id="test">Portfolio</h2>
                        </header>
                        <div className="container text-center test">
                            <section class="container-fluid portfolioContent row d-flex">
                                {repos.map(repo => {
                                    return <div className="card col-sm-3 border-bottom repos m-2">
                                        <h4 className="border-bottom p-3">{repo.name}</h4>
                                        <p>{repo.description}</p>
                                        <a href={repo.html_url} target="_blank">Repository Link</a>
                                    </div>
                                })}
                                <ul id="portfolioContent"></ul>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}


export default Portfolio;