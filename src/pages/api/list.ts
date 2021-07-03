import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Erro: Método não permitido!" });
  }

  const parsedData = JSON.parse(req.body);

  const createList = await prisma.list.create({
    data: {
      name: parsedData.name,
    },
  });

  res.json(createList);
};
