import PetService from "../services/pet.service.js"



class PetController {

  constructor() {
    this.petService = new PetService();
  }

  async createPet(req, res) {
    try {
      const pet = await this.petService.createPet(req.body);
      res.status(201).json(pet);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllPets(req, res) {
    console.log("pets")
    try {
      const pets = await this.petService.getAllPets();
      res.status(200).json(pets);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getPetById(req, res) {
    const { id } = req.params;
    try {
      const pet = await this.petService.getPetById(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      res.status(200).json(pet)
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updatePet(req, res) {
    const { id } = req.params;
    try {
      const pet = await this.petService.updatePet(id, req.body);
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      res.status(200).json(pet)
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deletePet(req, res) {
    const { id } = req.params;
    try {
      const pet = await this.petService.deletePet(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      res.status(207).json({ message: "Pet deleted"})
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default PetController;