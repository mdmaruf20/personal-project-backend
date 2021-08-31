const People = require('./People');

const addPeopleController = (req, res) => {
    let { username, password } = req.body;

    let people = new People({
        username,
        password
    });

    people.save()
        .then(response => {
            res.status(200).json({
                message: 'success'
            })
        })
        .catch(err => console.log(err))
}

module.exports = addPeopleController;