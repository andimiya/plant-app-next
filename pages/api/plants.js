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
      let objForUpdateArrays = {};
      let objForUpdateStrings = {};
      if (req.body.imageUrl) {
        objForUpdateArrays.images = req.body.imageUrl;
      }
      if (req.body.watering) {
        objForUpdateArrays.watering = req.body.watering;
      }
      if (req.body.fertilizing) {
        objForUpdateArrays.fertilizing = req.body.fertilizing;
      }

      if (req.body.title) {
        objForUpdateStrings.title = req.body.title;
      }
      if (req.body.streetName) {
        objForUpdateStrings.streetName = req.body.streetName;
      }
      if (req.body.flowers) {
        objForUpdateStrings.flowers = req.body.flowers;
      }
      if (req.body.dateAcquired) {
        objForUpdateStrings.dateAcquired = req.body.dateAcquired;
      }
      if (req.body.sunlight) {
        objForUpdateStrings.sunlight = req.body.sunlight;
      }
      if (req.body.temp) {
        objForUpdateStrings.temp = req.body.temp;
      }
      if (req.body.humidity) {
        objForUpdateStrings.humidity = req.body.humidity;
      }

      const putArray = await db.collection(PLANT_TABLE).updateOne(
        {
          _id: new ObjectId(id),
        },
        { $push: objForUpdateArrays }
      );

      const putStrings = await db.collection(PLANT_TABLE).updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: objForUpdateStrings }
      );
      res.json({ ...putStrings, ...putArray });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
