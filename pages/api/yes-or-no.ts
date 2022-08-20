import { NextApiResponse, NextApiRequest } from "next";
import NextCors from "nextjs-cors";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  // Generally, you would not want this in your apps.
  // See more in 'cors.js'
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const answer = Math.round(Math.random()) ? "yes" : "no";

  res.status(200).json({
    data: answer,
    error: null,
  });
};

export default allAvos;
