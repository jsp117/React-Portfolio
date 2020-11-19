import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import all components
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
// stylesheet and api
import "./style.css";
import API from "../utils/api";

function Main() {
    // initialize useStates
    const [page, setPage] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    // on initial render get all repositories
    useEffect(() => {
        API.getRepos()
            .then(function (response) {
                setLoading(false);
                // console.log("repos: ", response.data)
                setRepos(response.data);
            }, err => console.log(err));

    }, []);

   

    // set page on nav click
    function handlePage(target) {
        if (target === "about") {
            setPage("about");
        } else if (target === "portfolio") {
            setPage("portfolio");
        } else if (target === "contact") {
            setPage("contact");
        } else if (target === "projects") {
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
                    <Route component={About}>
                    </Route>
                </Switch>
                <section id="spacing"></section>
            </div>
            <Footer />
        </Router>
    )
}

export default Main;