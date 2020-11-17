const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    repo_url: { type: String, required: true },
    deployed_url: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;