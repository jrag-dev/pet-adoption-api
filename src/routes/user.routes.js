import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();
const userController = new UserController();

router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/find/:email', (req, res) => userController.getUserByEmail(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));

export default router;