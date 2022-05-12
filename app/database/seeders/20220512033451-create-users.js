'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const users = [
      { name: "Juan Sebastian Gonzalez", age: 31 },
      { name: "Aura Maria Garcia", age: 31 },
      { name: "Julio Carrillo", age: 31 },
      { name: "Yuly Alexandra Roa", age: 33 }
    ];
    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
