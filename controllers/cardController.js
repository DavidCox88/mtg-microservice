import Card from "../models/card.js";
import * as fs from 'fs';

const loadLOTRCards = async (req, res, next) => {
  try {
    const CardsLOTR = JSON.parse(fs.readFileSync('mtg-lotr-cards.json', 'utf-8'));
    const cards = await Card.create(CardsLOTR);
    return res.status(201).send(cards);
  } catch (err) {
    next(err)
  }
}

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
  const { manaCost} = req.body;
  const { cmc } = req.body;
  const { type } = req.body;
  const { oracleText } = req.body;
  const { power } = req.body;
  const {toughness } = req.body;
  const { colors } = req.body;
  const { keywords } = req.body;
  const { setName } = req.body;
  const { rarity } = req.body;
  try {
    const cards = await Card.find({'name' : new RegExp(name, 'i'),
                                   'manaCost':new RegExp(manaCost, 'i'),
                                   //'cmc': cmc,
                                   'type':new RegExp(type, 'i'),
                                   'oracleText':new RegExp(oracleText, 'i'),
                                   //'power':new RegExp(power, 'i'),
                                   //'toughness':new RegExp(toughness, 'i'),
                                   'colors':new RegExp(colors, 'i'),
                                   'keywords':new RegExp(keywords, 'i'),
                                   'setName':new RegExp(setName, 'i'),
                                   'rarity':new RegExp(rarity, 'i')
                                  });
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
  loadLOTRCards,
};
