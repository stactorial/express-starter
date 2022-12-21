import prisma from "db/client";

const getCats = async () => {
  return await prisma.cat.findMany();
};

export default { getCats };
