import mongoose from "mongoose";


class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('Database connection successful.')
    })
    .catch((err) => {
      console.error('Database connection error: ', err);
    })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export default Database.getInstance();