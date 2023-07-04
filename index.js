import express from "express";
import router from "./config/router.js";
import db from "./db/helpers.js";
import { PORT } from "./config/environment.js";

const app = express();

//app.use(express.json());
app.use(express.json({limit: '80mb', extended: true}));
app.use(router);


async function startServer() {
  try {
    await db.connect();
    console.log("Mongoose is connected to the database");
    app.listen(PORT, function () {
      console.log("App is listening on port " + PORT);
    });
  } catch (err) {
    console.log("Something when wrong connecting to the database");
  }
}

startServer();
