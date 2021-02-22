const express = require("express");
const faker = require("faker");
const cors = require("cors");
const { fake } = require("faker");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const users = [
	{
		id: 1,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 2,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 3,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 4,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 5,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 6,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 7,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 8,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 9,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
	{
		id: 10,
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		country: faker.address.country(),
	},
];

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	return res.status(201).send("home page");
});

app.get("/users", (req, res) => {
	return res.json(users);
});

app.listen(PORT, () =>
	console.log(`server is up and running on port- ${PORT}`),
);
