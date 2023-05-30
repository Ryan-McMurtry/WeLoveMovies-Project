const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

// router.route("/movies?is_showing=true").get(controller.isShowing).all(methodNotAllowed);

router.route("/")
.get(controller.list)
.all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router
.route("/:movieId/reviews")
.get(controller.listReviews)
.all(methodNotAllowed);

router
.route("/:movieId/theaters")
.get(controller.listTheaters)
.all(methodNotAllowed)

module.exports = router;
