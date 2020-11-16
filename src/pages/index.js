import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import "./style.css";
import axios from "axios";
import API from "../utils/api";

function Main() {
    const [page, setPage] = useState("index");


    useEffect(() => {
        var token = "toke285a65929c2ed11d5352502b9b21214c78c192c3"
        token = token.replace('toke', '');
        fetch("https://api.github.com/users/jsp117/repos", {
            method: "get",
            headers: new Headers({
                Accept: "application/vnd.github.v3+json",
                Username: "jsp117",
                Authorization: "token: 285a65929c2ed11d5352502b9b21214c78c192c3",
            })
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log("error", error);
        })
        // var repos = axios({
        //     url: "https://api.github.com/users/jsp117/repos",
        //     method: "GET",
        //     headers: {
        //     Accept: "application/vnd.github.v3+json",
        //     Username: "jsp117",
        //     Authorization: "token: 285a65929c2ed11d5352502b9b21214c78c192c3",
        // },
        // }).then(function (response) {
        //     return response.data;
        // }).catch(function (error) {
        //     console.log(error);
        // });

        // console.log("repos in main", repos)
        // const response = API();
        // console.log("response on main", response);
    }, []);

    // activity 21 section 18 shows how to change active page
    useEffect(() => {
    }, [page]);

    function handlePage(event){
        event.preventDefault();
        let value = event.target.name;
        if(value==="index"){
            setPage("index");
        }else if(value==="portfolio"){
            setPage("portfolio");
        }else if(value==="contact"){
            setPage("contact");
        }else if(value==="projects"){
            setPage("projects");
        }
    }




    return (
        <div className="container">
            <Header page={page} click={handlePage}/>
            <section id="spacing"></section>
            <Card page={page} />
            <section id="spacing"></section>
        </div>
    )
}

export default Main;