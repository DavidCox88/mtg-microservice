import express from "express";
import cardController from "../controllers/cardController.js";

const Router = express.Router();

Router.route("/cards")
  .get(cardController.getAllCards)
  .post(cardController.createCard);

Router.route("/cards/:id")
  .get(cardController.getCard)
  .put(cardController.updateCard)
  .delete(cardController.deleteCard);

Router.route("/card/search")
  .get(cardController.searchCard)


export default Router;
