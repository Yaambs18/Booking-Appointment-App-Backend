const User = require("../models/user");

exports.getBookingUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

exports.addUserBooking = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email,
  })
    .then((result) => {
        res.json(result.dataValues);
    })
    .catch((err) => console.log(err));
};

exports.deleteUserBooking = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
      .then(user => {
        return user.destroy();
      })
      .then((result) => {
        res.status(200);
      })
      .catch((err) => console.log(err));
}
