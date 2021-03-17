import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
// initialize aos
AOS.init();



function Portfolio({ repos, loading }) {
    return (
        <div data-aos="fade-left" data-aos-duration="700" data-aos-easing="linear">
            <div className="push"></div>
            <section className="row">
                <section className="col-lg-12">
                    <section className="card mb-3 back portfolioHolder">
                        <header className="card-header">
                            <h2 id="test">Portfolio</h2>
                        </header>
                        <div className="container text-center test">
                            <section className="container-fluid portfolioContent row d-flex">
                                {/* display all repositories */}
                                {!loading ? repos.map(repo => {
                                    return <div key={repo.name} className="card col-sm-3 border-bottom repos m-2">
                                        <h4 className="border-bottom p-3">{repo.name}</h4>
                                        <p>{repo.description}</p>
                                        <a href={repo.html_url} target="_blank" rel="noreferrer">Repository Link</a>
                                        {repo.homepage ? <a href={repo.homepage} target="_blank" rel="noreferrer">Deployed Link</a> : ""}
                                    </div>
                                }) : "Loading..."}
                            </section>
                        </div>
                    </section>
                </section>
            </section>
            <div className="push"></div>
        </div>
    )
}

export default Portfolio;