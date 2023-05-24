import clientPromise from "../../lib/mongodb";
import { PLANT_TABLE } from "../../lib/constants";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { method } = req;
  const dbName = process.env.DB_NAME;
  const client = await clientPromise;
  const db = client.db(dbName);
  const { id, title } = req.query;

  switch (method) {
    case "POST":
      const { content } = req.body;
      const post = await db.collection(PLANT_TABLE).insertOne({
        title: req.body.title,
        content,
      });
      res.status(200).json(post);
      break;
    case "GET":
      const get = await db.collection(PLANT_TABLE).findOne({
        title,
      });
      res.json(get);
      break;
    case "PUT":
      var objForUpdate = {};
      if (req.body.imageUrl) {
        objForUpdate.images = req.body.imageUrl;
      }
      if (req.body.watering) {
        objForUpdate.watering = req.body.watering;
      }
      if (req.body.fertilizing) {
        objForUpdate.fertilizing = req.body.fertilizing;
      }
      const put = await db.collection(PLANT_TABLE).updateOne(
        {
          _id: new ObjectId(id),
        },
        { $push: objForUpdate }
      );
      res.json(put);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
