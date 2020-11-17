import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import "./style.css";
import axios from "axios";
import API from "../utils/api";

function Main() {
    const [page, setPage] = useState("index");


    useEffect(() => {
        axios.get("/api/get/repo", function (req, res) {
            var response = res;
            console.log("response: ", response);
          
        })


        // API.getRepos()
        //     .then(function (response) {
        //         console.log("REPOS: ", response)
        //             .catch(err => console.log(err))
        //     })


    }, []);

    useEffect(() => {
    }, [page]);

    function handlePage(event) {
        event.preventDefault();
        let value = event.target.name;
        if (value === "index") {
            setPage("index");
        } else if (value === "portfolio") {
            setPage("portfolio");
        } else if (value === "contact") {
            setPage("contact");
        } else if (value === "projects") {
            setPage("projects");
        }
    }




    return (
        <Router>
            <Header page={page} click={handlePage} />
            <Switch>
                <div className="container">
                    <section id="spacing"></section>
                    <Route exact path={["/", "/index"]} component={About}>
                        {/* <About page={page} /> */}
                    </Route>
                    <Route exact path={"/portfolio"} component={Portfolio}>
                        {/* <Portfolio page={page} /> */}
                    </Route>
                    <Route exact path={"/contact"} component={Contact}>
                        {/* <Contact page={page} /> */}
                    </Route>
                    <Route exact path={"/projects"} component={Projects}>
                        {/* <Projects page={page} /> */}
                    </Route>
                    <section id="spacing"></section>
                </div>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main;