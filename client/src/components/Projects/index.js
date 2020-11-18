import React from "react";
import project from "../../projects.json";

function Projects() {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="3000">
            <section className="row">
                <section className="col-lg-12">
                    <section className="card mb-3 back">
                        <header className="card-header">
                            <h2 id="test">Projects</h2>
                        </header>
                        <section className="container">
                            <div id="projects">
                                {project.map(p => {
                                    return <div>
                                        <h4 className="card-header title">{p.name}</h4>
                                        <div className="row">
                                            <div className="col-sm-3"></div><img className="col-sm-6 gifs img-fluid" src={p.image_url} alt={p.name + " gif"} />
                                        </div>
                                        <p className="description my-5">{p.description}</p>
                                        <div className="text-center">
                                            <a target="_blank" href={p.repo_url}>Repository Link</a>
                                            <a target="_blank" href={p.deployed_url}>Deployed Link</a></div>
                                    </div>
                                })}
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </div >
    )
}


export default Projects;