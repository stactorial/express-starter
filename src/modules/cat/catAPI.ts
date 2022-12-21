import express from "express";
import controllers from "./catControllers";

const router = express.Router();

router.get("/", controllers.getCats);

export default router;
