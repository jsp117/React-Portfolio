import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import "./style.css";
import axios from "axios";
import API from "../utils/api";

function Main() {
    const [page, setPage] = useState("index");


    useEffect(() => {
        var token = "toke91c0d6a2bcb84fd0f2db445a94f7eb4b12f35dfb"
        token = token.replace('toke', '');
        var obj = {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3+json",
                Username: "jsp117",
                Authorization: "token: " + token,
            }
        }
        fetch("https://cors-anywhere.herokuapp.com/https://api.github.com/users/jsp117/repos", obj
            // method: "GET",
            // headers: new Headers({
            //     Accept: "application/vnd.github.v3+json",
            //     Username: "jsp117",
            //     Authorization: "token: " + token,
            // })
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log("error", error);
        })
        // var repo = test();
        // function test() {
        //     axios({
        //         url: "https://cors-anywhere.herokuapp.com/https://api.github.com/users/jsp117/repos",
        //         method: "GET",
        //         headers: {
        //             Accept: "application/vnd.github.v3+json",
        //             Username: "jsp117",
        //             Authorization: "token:" + token,
        //         },
        //     }).then(function (response) {
        //         return response.data;
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // }
        // console.log("repos in main", repo);
        // const response = API();
        // console.log("response on main", response);
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
        <div className="container">
            <Header page={page} click={handlePage} />
            <section id="spacing"></section>
            <Card page={page} />
            <section id="spacing"></section>
        </div>
    )
}

export default Main;