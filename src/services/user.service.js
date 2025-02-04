import UserRepository from '../repositories/user.repository.js';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    return await this.userRepository.create(userData);
  }

  async getUserByEmail(email) {
    return await this.userRepository.findByEmail(email);
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }
}

export default UserService;