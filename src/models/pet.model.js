import mongoose from "mongoose";
import { PET_TYPES } from "../config/pet.types.js";


const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      enum: PET_TYPES
    },
    age: {
      type: Number,
      required: true,
      min: [0, "La edad no puede ser negativa"],
      max: [30, "La edad no parece ser correcta"],
    },
    description: {
      type: String,
      required: false,
      trim: true
    },
    adopted: {
      type: Boolean,
      default: false,
    }
  }, {
    timestamps: true
  }
)

export default mongoose.model("pets", petSchema);