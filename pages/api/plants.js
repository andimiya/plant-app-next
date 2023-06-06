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
      let objtoAdd = {};

      objtoAdd.title = req.body.title;

      if (req.body.streetName) {
        objtoAdd.streetName = req.body.streetName;
      }
      if (req.body.flowers) {
        objtoAdd.flowers = req.body.flowers;
      }
      if (req.body.dateAcquired) {
        objtoAdd.dateAcquired = req.body.dateAcquired;
      }
      if (req.body.sunlight) {
        objtoAdd.sunlight = req.body.sunlight;
      }
      if (req.body.temp) {
        objtoAdd.temp = req.body.temp;
      }
      if (req.body.humidity) {
        objtoAdd.humidity = req.body.humidity;
      }
      if (req.body.soilMix) {
        objtoAdd.soilMix = req.body.soilMix;
      }
      if (req.body.wateringConditions) {
        objtoAdd.wateringConditions = req.body.wateringConditions;
      }
      if (req.body.fertilizerPlan) {
        objtoAdd.fertilizerPlan = req.body.fertilizerPlan;
      }
      if (req.body.plantingTime) {
        objtoAdd.plantingTime = req.body.plantingTime;
      }
      if (req.body.pruning) {
        objtoAdd.pruning = req.body.pruning;
      }
      if (req.body.harvestTime) {
        objtoAdd.harvestTime = req.body.harvestTime;
      }
      if (req.body.propogation) {
        objtoAdd.propogation = req.body.propogation;
      }
      if (req.body.pestsDiseases) {
        objtoAdd.pestsDiseases = req.body.pestsDiseases;
      }
      if (req.body.notes) {
        objtoAdd.notes = req.body.notes;
      }

      const post = await db.collection(PLANT_TABLE).insertOne(objtoAdd);
      if (!post) {
        res.status(500).send("Server Error");
      } else {
        res.status(200).json(post);
      }
      break;
    case "GET":
      const get = await db.collection(PLANT_TABLE).findOne({
        title,
      });
      if (!get) {
        res.status(500).send("Server Error");
      } else {
        res.json(get);
      }
      break;
    case "DELETE":
      const { imageUrl } = req.query;
      const deleteImage = await db.collection(PLANT_TABLE).updateOne(
        { _id: new ObjectId(id) },
        {
          $pull: {
            images: imageUrl,
          },
        }
      );
      if (!deleteImage) {
        res.status(500).send("Server Error");
      } else {
        res.json(deleteImage);
      }
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
      if (req.body.soilMix) {
        objForUpdateStrings.soilMix = req.body.soilMix;
      }
      if (req.body.wateringConditions) {
        objForUpdateStrings.wateringConditions = req.body.wateringConditions;
      }
      if (req.body.fertilizerPlan) {
        objForUpdateStrings.fertilizerPlan = req.body.fertilizerPlan;
      }
      if (req.body.plantingTime) {
        objForUpdateStrings.plantingTime = req.body.plantingTime;
      }
      if (req.body.pruning) {
        objForUpdateStrings.pruning = req.body.pruning;
      }
      if (req.body.harvestTime) {
        objForUpdateStrings.harvestTime = req.body.harvestTime;
      }
      if (req.body.propogation) {
        objForUpdateStrings.propogation = req.body.propogation;
      }
      if (req.body.pestsDiseases) {
        objForUpdateStrings.pestsDiseases = req.body.pestsDiseases;
      }
      if (req.body.notes) {
        objForUpdateStrings.notes = req.body.notes;
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
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).send(`Method ${method} Not Allowed`);
      break;
  }
}
