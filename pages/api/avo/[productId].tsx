import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();

  const productId = request.query.productId; //get query parameters thanks to Next
  const entry = await db.getById(productId as string);

  //   response.statusCode = 200; // all ok
  //   response.setHeader("Content-type", "application/json");
  //   response.end(JSON.stringify({ data: entry }));

  response.status(200).json(entry);
};

export default allAvos;
