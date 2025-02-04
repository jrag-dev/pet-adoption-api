import PetRepository from "../repositories/pet.repository.js";


class PetService {

  constructor() {
    this.petRepository = new PetRepository();
  }

  async createPet(petData) {
    return await this.petRepository.create(petData);
  }

  async getAllPets() {
    return await this.petRepository.findAll();
  }

  async getPetById(id) {
    return await this.petRepository.findById(id);
  }

  async updatePet(id, petData) {
    return await this.petRepository.update(id, petData);
  }

  async deletePet(id) {
    return await this.petRepository.delete(id);
  }

}


export default PetService;