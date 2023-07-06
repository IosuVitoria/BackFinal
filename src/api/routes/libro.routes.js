const express = require("express");
const {
  getLibros,
  postLibros,
  putLibros,
  deleteLibros,
} = require("../controllers/libro.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const librosRouter = express.Router();

librosRouter.get("/", getLibros);
librosRouter.post("/", isAuth, upload.single("portada"), postLibros);
librosRouter.delete("/:id", isAuth, deleteLibros);
librosRouter.put("/:id", isAuth, upload.single("portada"), putLibros);

module.exports = librosRouter;
