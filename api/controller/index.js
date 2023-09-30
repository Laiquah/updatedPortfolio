const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const { education, experience, hardskills, projects, softskills, testimonials } = require("../model");

// education routes
routes.get("/education", (req, res) => {
    education.fetchEducation(req, res)
});
routes.get("/education/:eduID", (req, res) => {
    education.fetchEducation(req, res)
});
routes.post("/education", bodyParser.json(), (req, res) => {
    education.addEducation(req, res)
});

// experience routes
routes.get("/experience", (req, res) => {
    experience.fetchExperience(req, res)
});
routes.get("/experience/:expID", (req, res) => {
    experience.fetchExperience(req, res)
});
routes.post("/experience", bodyParser.json(), (req, res) => {
    experience.addExperience(req, res)
});

// hardskills routes
routes.get("/hardskills", (req, res) => {
    hardskills.fetchHardskills(req, res)
});
routes.get("/hardskills/:harID", (req, res) => {
    hardskills.fetchHardskills(req, res)
});
routes.post("/hardskills", bodyParser.json(), (req, res) => {
    hardskills.addHardskills(req, res)
});

// projects routes
routes.get("/projects", (req, res) => {
    projects.fetchProjects(req, res)
});
routes.get("/projects/:projID", (req, res) => {
    projects.fetchProjects(req, res)
});
routes.post("/projects", bodyParser.json(), (req, res) => {
    projects.addProjects(req, res)
});

// softskills routes
routes.get("/softskills", (req, res) => {
    softskills.fetchSoftskills(req, res)
});
routes.get("/softskills/:sofID", (req, res) => {
    softskills.fetchSoftskills(req, res)
});
routes.post("/softskills", bodyParser.json(), (req, res) => {
    softskills.addSoftskills(req, res)
});

// testimonials routes
routes.get("/testimonials", (req, res) => {
    testimonials.fetchTestimonials(req, res)
});
routes.get("/testimonials/:testID", (req, res) => {
    testimonials.fetchTestimonials(req, res)
});
routes.post("/testimonials", bodyParser.json(), (req, res) => {
    testimonials.addTestimonials(req, res)
});

module.exports = {
    express,
    routes
}