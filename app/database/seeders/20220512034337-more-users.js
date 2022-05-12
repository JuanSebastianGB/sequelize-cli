'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
      { name: faker.name.findName(), age: 18 },
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
