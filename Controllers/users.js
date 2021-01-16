const { Person } = require('../Models/Person');
const findUsers = (req, res) => {

}
const createUser = async (req, res) => {
    const user = { ...req.body};
    const newPerson = new Person(user);
    const saved = await newPerson.save();
    return res.send(saved)
}

module.exports = {
    findUsers,
    createUser
}