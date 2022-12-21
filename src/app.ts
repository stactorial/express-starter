import express from "express";
import catRouter from "modules/cat/catAPI";

const app = express();

app.use(express.json());

const v1Router = express.Router();
v1Router.use("/cat", catRouter);

app.use("/v1", v1Router);

export default app;
