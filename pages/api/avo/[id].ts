import DB from "@database";
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from "next";

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const db = new DB();
    const avoId = req.query.id as string;

    const avo = await db.getById(avoId);

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(avo);
  } catch (e) {
    console.error(e);
    res.status(404).end();
  }
};

export default AvoDetail;
