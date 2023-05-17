import clientPromise from "../../lib/mongodb";
import { PLANT_TABLE } from "../../lib/constants";

export default async function handler(req, res) {
  const { method } = req;
  const dbName = process.env.DB_NAME;
  const client = await clientPromise;
  const db = client.db(dbName);

  switch (method) {
    case "GET":
      const getAll = await db.collection(PLANT_TABLE).find().toArray();
      res.json(getAll);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
