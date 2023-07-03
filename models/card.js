import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manaCost: String,
  cmc: Number,
  type: String,
  oracleText: String,
  power: Number,
  toughness: Number,
  colors: String,
  keywords: String,
  setName: String, 
  rarity: String,
  smallURI: String,
  mediumURI: String,
  largeURI: String,
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
