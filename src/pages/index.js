import React, { useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";
import API from "../utils/api";

function Main() {



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





    return (
        <div className="container">
            <Header />
            <section id="spacing"></section>
            <Card />
        </div>
    )
}

export default Main;