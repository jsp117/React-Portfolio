const mongoose = require("mongoose");
const db = require("../models/projects");

// This file empties the projects collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jspreact"
);

const projectSeed = [
  {
    name: 'Playr',
      description: 'Music Player Utilizing OpenWhyd, MusixMatch, and SoundCloud APIs. Playr generates random playlists based off user input and offers a simpler way to listen to music.',
      repo_url: 'https://github.com/jsp117/Playr',
      deployed_url: "https://jsp117.github.io/Playr/",
      image_url: "https://github.com/jsp117/Playr/raw/script/assets/playr1.gif"
  },
  {
    name: 'OneUpDB',
    description: 'OneUpDB is a social media site for gamers. Select your favorite games, add friends, and recommend games to eachother. Search over 250000 games and view ratings and other information.',
    repo_url: 'https://github.com/jsp117/Videogame-Database',
    deployed_url: "https://oneupdb.herokuapp.com/",
    image_url: "https://github.com/jsp117/Videogame-Database/raw/main/public/assets/oneupdb.gif"
  }
];

db.project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
