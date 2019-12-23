import UserModel from "../models/user.js";

export const loginUser = (req, res) => {
  if (!req.body.email) {
    return res.status(400).send({
      success: "false",
      message: "email is required"
    });
  } else if (!req.body.password) {
    return res.status(400).send({
      success: "false",
      message: "password is required"
    });
  }
  UserModel
    .findOne({email: req.body.email, password: req.body.password})
    .exec((err, user) => {
      if (err) {
        res.status(404).send({
          success: "false",
          message: "no user found"
        });
      }

      res.status(200).send({
        success: "true",
        message: "user login success",
        user
      })
    });
};

export const registerUser = (req, res) => {
  if (!req.body.email) {
    return res.status(400).send({
      success: "false",
      message: "email is required"
    });
  } else if (!req.body.password) {
    return res.status(400).send({
      success: "false",
      message: "password is required"
    });
  } else if (!req.body.firstName) {
    return res.status(400).send({
      success: "false",
      message: "first name is required"
    });
    } else if (!req.body.lastName) {
    return res.status(400).send({
      success: "false",
      message: "last name is required"
    });
  }
  const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    orders: []
  });

  user.save()
    .then(
    result=> {
      console.log(result);
      return res.status(201).send({
        success: "true",
        message: "user registration successful",
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(400).send({
        success: 'false',
        message: "cant save this user"
      })
    })
};
