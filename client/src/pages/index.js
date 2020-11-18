import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import "./style.css";
import API from "../utils/api";

function Main() {
    const [page, setPage] = useState("index");
    const [repos, setRepos] = useState([]);
    // const [project, setProject] = useState(projectHolder);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        API.getRepos()
            .then(function (response) {
                setLoading(false);
                // console.log("repos: ", response.data)
                setRepos(response.data);

            }, err => console.log(err));

    }, []);

    useEffect(() => {
    }, [page]);

    function handlePage(event) {
        event.preventDefault();
        // console.log("target", event);
        let value = event.target.innerText;
        if (value === "About") {
            setPage("about");
        } else if (value === "Portfolio") {
            setPage("portfolio");
        } else if (value === "Contact") {
            setPage("contact");
        } else if (value === "Projects") {
            setPage("projects");
        }
    }




    return (
        <Router>
            <Header page={page} click={handlePage} />
            <div className="container">
                <section id="spacing"></section>
                <Switch>
                    <Route exact path={["/", "/about"]} component={About}>
                    </Route>
                    <Route exact path={"/portfolio"} >
                        <Portfolio repos={repos} loading={loading} />
                    </Route>
                    <Route exact path={"/contact"} component={Contact}>
                    </Route>
                    <Route exact path={"/projects"} component={Projects}>
                    </Route>
                </Switch>
                <section id="spacing"></section>
            </div>
            <Footer />
        </Router>
    )
}

export default Main;