import express from "express";
import PetController from "../controllers/pet.controller.js";


const router = express.Router();
const petController = new PetController();

router.post('/pets', (req, res) => petController.createPet(req, res));
router.get('/pets', (req, res) => petController.getAllPets(req, res));
router.get('/pets/:id', (req, res) => petController.getPetById(req, res));
router.put('/pets/:id', (req, res) => petController.updatePet(req, res));
router.delete('/pets/:id', (req, res) => petController.deletePet(req, res));

export default router;