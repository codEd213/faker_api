const faker = require("faker");

const express = require("express");
const app = express();
const port = 8000;

const newUser = () => ({
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  _id: faker.datatype.uuid(),
});

const newCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  const fakeUser = newUser();
  res.json(fakeUser);
});

app.get("/api/companies/new", (req, res) => {
  const fakeCompany = newCompany();
  res.json(fakeCompany);
});

app.get("/api/user/company", (req, res) => {
  const fakeCompany = newCompany();
  const fakeUser = newUser();
  const responseObject = {
    user: fakeUser,
    company: fakeCompany,
  };
  res.json(responseObject);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
