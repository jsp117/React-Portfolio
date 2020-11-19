# React-Portfolio

## Description

This is my updated portfolio built with React. To begin this project I laid out all the necessary components: a navbar and footer to be displayed on each page, and individual components for each page. I then built a React router render each component when its path is selected. After styling the components, I built in functionality to change the class of the selected navigation item to active. This was accomplished with the useState hook along with a function that sets the state of "page" when a nav item is clicked. When the base layout and the design was complete, I set up the backend of the site. After setting up the connection, I set up a route and controller to pull my repositories from GitHub, which is called when the site is first rendered through the useEffect hook. When the site is initially rendered, it issues a get request to the route "/api/repo". The server/proxy responds with an array containing all of my repositories. The actual API call is in the repos controller and issues an axios get request to the GitHub API using my username and authorization token as headers. After retrieving the repositories, I displayed them on the portfolio page using the map method to generate html. I then created a JSON file containing all of my projects and used the map method to display them on the projects page. For the contact page, I used the EmailJS API to send emails when a user fills out the contact form and clicks submit. I also created a modal that displays either a thank you message, or a message alerting the user that they haven't completed all the form fields. The modal also makes use of the useEffect and useState hooks to render properly.

![Usage](./client/public/assets/usage.gif)

## Table of Contents
* [Description](#description)
* [Deployed Link](#deployed-link)
* [Code Snippets](#code-snippets)
* [Built With](#built-with)
* [Future Development](#future-development)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgements)


## Deployed Link

* [See Live Site](https://jsp-react-portfolio.herokuapp.com)


## Code Snippets

This code snippet displays the server-side GitHub API call. It consists of an asynchronous function that performs a get request to the url provided with my username and authorization token as headers, and returns all of my repositories. 

```
 let repos = await axios({
            url: "https://api.github.com/users/jsp117/repos",
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3+json",
                Username: "jsp117",
                Authorization: `token ${token}`,
            },
        }).then(function (response) {
            // console.log("response on server: ", response.data)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
```

This code snippet display both the function hosting the axios call to the backend as well as the useEffect Hook that calls on it. The getRepos function is called upon the initial render of the site. It sets the loading state to false and sets the repos state to the array of my repositories.

```
getRepos: function(){
        return axios.get("/api/repo");
    }

useEffect(() => {
        API.getRepos()
            .then(function (response) {
                setLoading(false);
                setRepos(response.data);
            }, err => console.log(err));
    }, []);
```

This code snippet displays how I render the repositories. Using a ternary operator, the statement "Loading..." is displayed if the state "loading" is set to true, or the repositories are displayed if it is false. I used the map method to render a card for each item in the array "repos".

```
{!loading ? repos.map(repo => {
    return <div key={repo.name} className="card col-sm-3 border-bottom repos m-2">
    <h4 className="border-bottom p-3">{repo.name}</h4>
    <p>{repo.description}</p>
    <a href={repo.html_url} target="_blank" rel="noreferrer">Repository Link</a>
    </div>
}) : "Loading..."}

```

## Built with
* [React](https://reactjs.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mongoose](https://www.mongodb.com/)
* [EmailJS](https://www.emailjs.com/)
* [AnimateOnScroll](https://michalsnik.github.io/aos/)
* [Heroku](https://www.heroku.com/)
* [JavaScript](https://www.javascript.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [npm](https://www.npmjs.com/)
* [Github](https://github.com/)

## Future Development

Due to the fact that I am only displaying six projects, I moved the projects out of MongoDB into a json file. In the future, I would like to scrape all the images and the rest of the repository information not given by the GitHub API and add this into MongoDB.

## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgements

* Thank you to my teachers Jerome, Manuel, Kerwin, Mahi and Ryan
* Background image by Emily Campbell on [unsplash](https://www.unsplash.com)

