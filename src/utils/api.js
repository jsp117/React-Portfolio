import axios from "axios";

var token = "toke285a65929c2ed11d5352502b9b21214c78c192c3"
token = token.replace('toke', '');

export default {
    query: () => {
        return axios({
            url: "https://api.github.com/users/jsp117/repos",
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3+json",
                Username: "jsp117",
                Authorization: `token ${token}`,
            },
        }).then(function (response) {
            console.log("response", response.data);
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
}

