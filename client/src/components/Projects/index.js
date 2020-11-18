import React from "react";
import project from "../../projects.json";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
// initialize aos
AOS.init();

function Projects() {
    return (
        <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="linear">
            <div id="push"></div>
            <section className="row">
                <section className="col-lg-12">
                    <section className="card mb-3 back">
                        <header className="card-header">
                            <h2 id="test">Projects</h2>
                        </header>
                        <section className="container">
                            <div id="projects">
                                {/* display all projects */}
                                {project.map(p => {
                                    return <div key={p.id} className="project-container card text-center">
                                        <h4 className="title">{p.name}</h4>
                                        <div className="row">
                                            <div className="col-sm-3"></div><img className="col-sm-6 gifs img-fluid" src={p.image_url} alt={p.name + " gif"} />
                                        </div>
                                        <p className="description my-5">{p.description}</p>
                                        <div className="text-center">
                                            <a target="_blank" rel="noreferrer" href={p.repo_url}>Repository Link</a><br />
                                            <a target="_blank" rel="noreferrer" href={p.deployed_url}>Deployed Link</a></div>
                                    </div>
                                })}
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <div id="push"></div>
        </div >
    )
}


export default Projects;