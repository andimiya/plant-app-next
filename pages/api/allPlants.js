import clientPromise from "../../db/mongodb";
import { PLANT_TABLE } from "../../constants/constants";

export default async function handler(req, res) {
  const { method } = req;
  const dbName = process.env.DB_NAME;
  const client = await clientPromise;
  const db = client.db(dbName);

  switch (method) {
    case "GET":
      const getAll = await db.collection(PLANT_TABLE).find().toArray();
      if (!getAll) {
        res.status("500").send("Server Error - Unable to get plants");
      } else {
        res.json(getAll);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
