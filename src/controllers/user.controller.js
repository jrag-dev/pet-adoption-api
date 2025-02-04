import UserService from '../services/user.service.js';

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserByEmail(req, res) {
    try {
      const user = await this.userService.getUserByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    console.log({ id: req.params })
    try {
      const user = await this.userService.getUserById(req.params.id);
      console.log({ id: req.params.id, user })
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;