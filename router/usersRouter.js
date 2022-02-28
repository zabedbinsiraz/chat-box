// external imports
const express = require("express");

// internal imports
const { getUsers, addUser } = require("../controller/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const router = express.Router();

// users page
router.get("/", getUsers);

// get user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

module.exports = router;
