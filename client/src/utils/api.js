import axios from "axios";


export default {
    getProjects: function(){
        return axios.get("/api/projects");
    },
    newMessage: function(){
        return axios.post("/api/messages");
    },
    getRepos: function(){
        return axios.get("/api/repo");
    }
};


