'use strict';
const faker = require('faker');

exports.http = (request, response) => {
  const s = faker.lorem.words();
  response.status(200).send(s);
};
