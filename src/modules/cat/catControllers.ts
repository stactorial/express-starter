import { RequestHandler } from "express";
import { TypedRequest } from "types/express";

const getCats: RequestHandler = async (
  req: TypedRequest<{ thing: string }>,
  res
) => {
  res.status(200).send("this is a cat");
};

export default {
  getCats,
};
