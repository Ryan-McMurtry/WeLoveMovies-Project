if (process.env.USER) require("dotenv").config();
const express = require("express");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const moviesRouter = require("./tables/movies/movies.router")
const reviewsRouter = require("./tables/reviews/reviews.router")
const theaterRouter = require("./tables/theaters/theaters.router")
const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);

app.use("/reviews", reviewsRouter);

app.use("/theaters", theaterRouter)

app.use(notFound);

app.use(errorHandler);

module.exports = app;
