import DB from "@database";
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
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
    const allEntries = await db.getAll();
    const length = allEntries.length;

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ length, data: allEntries }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ length: 0, data: [], error: "Something went wrong" })
    );
  }
};

export default allAvos;
