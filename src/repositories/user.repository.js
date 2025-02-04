import User from '../models/user.model.js';

class UserRepository {
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(id) {
    console.log("aqui")
    return await User.findOne({ _id: id });
  }
}

export default UserRepository;