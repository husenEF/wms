"use strict";
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
// const hashedPassword = bcrypt.hashSync(password, salt);
const genPas = (text) => bcrypt.hashSync(text, salt);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        full_name: "John Doe",
        username: "johndoe",
        password: genPas("passjhon"),
        salt: salt,
        email: "johndoe@gmail.com",
        phone_number: "087879431",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: "Sam Doe",
        username: "samdoe",
        password: genPas("passsam"),
        salt: salt,
        email: "samdoe@gmail.com",
        phone_number: "087879489",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: "Jhonny Doe",
        username: "jhonnydoe",
        password: genPas("passjhonny"),
        salt: salt,
        email: "jhonnydoe@gmail.com",
        phone_number: "087879441",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
