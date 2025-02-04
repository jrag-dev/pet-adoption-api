import express from "express";
import cors from "cors";
import "dotenv/config";

import petRoutes from "./routes/pet.routes.js";
import userRoutes from "./routes/user.routes.js";
import "./config/db.js"


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use('/api', petRoutes);
    this.app.use('/api', userRoutes);
  }
}

export default new App().app;