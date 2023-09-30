const { Education } = require('./Education')
const { Experience } = require('./Experience')
const { Hardskills } = require('./HardSkills')
const { Projects } = require('./Projects')
const { Softskills } = require('./SoftSkills')
const { Testimonials } = require('./Testimonials')

module.exports = {
    education : new Education(),
    experience : new Experience(),
    hardskills : new Hardskills(),
    projects : new Projects(),
    softskills : new Softskills(),
    testimonials : new Testimonials()
}