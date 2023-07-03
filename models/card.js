import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  released: Date,
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
  loyalty: Number,
  smallURI: String,
  mediumURI: String,
  largeURI: String,
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
