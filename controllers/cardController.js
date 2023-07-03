import Card from "../models/card.js";

const getAllCards = async (_req, res, next) => {
  try {
    const cards = await Card.find();
    return res.status(200).json(cards);
  } catch (err) {
    next(err);
  }
};

const createCard = async (req, res, next) => {
  try {
    const newCard = await Card.create(req.body);
    return res.status(201).send(newCard);
  } catch (err) {
    next(err);
  }
};

const getCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);
    return res.status(200).send(card);
  } catch (err) {
    next(err);
  }
};

const updateCard = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const card = await Card.findById(id);
    card.set(body);
    const savedCard = await card.save();
    return res.status(200).json(savedCard);
  } catch (err) {
    next(err);
  }
};

const deleteCard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const card = await Card.findByIdAndDelete(id);
    return res.status(200).send(card);
  } catch (err) {
    next(err);
  }
};

const searchCard = async (req, res, next) => {
  const { name } = req.body;
  try {
    const cards = await Card.find({'name' : new RegExp(name, 'i')});
    return res.status(200).json(cards);
  } catch (err) {
    next(err);
  }
};

export default {
  getAllCards,
  createCard,
  getCard,
  updateCard,
  deleteCard,
  searchCard,
};
