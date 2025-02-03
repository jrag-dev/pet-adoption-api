import express from "express";
import cors from "cors";



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
    this.app.get("/", (req, res) => {
      res.status(200).json({ message: "Pets Adoption"});
    })
  }
}

export default new App().app;