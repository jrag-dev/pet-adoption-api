import Pet from "../models/pet.model.js";


class PetRepository {
  
  async create(petData) {
    const pet = new Pet(petData);
    return await pet.save();
  }

  async findAll() {
    return await Pet.find();
  }

  async findById(id) {
    return await Pet.findById(id);
  }

  async update(id, petData) {
    return await Pet.findOneAndUpdate({ _id: id }, petData, { new: true });
  }
  
  async delete(id) {
    return await Pet.findOneAndDelete({ _id: id });
  }

}

export default PetRepository;