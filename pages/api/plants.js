import clientPromise from "../../db/mongodb";
import { PLANT_TABLE } from "../../constants/constants";
import { ObjectId } from "mongodb";
import { formData } from "../../services/formData";

export default async function handler(req, res) {
  const { method } = req;
  const dbName = process.env.DB_NAME;
  const client = await clientPromise;
  const db = client.db(dbName);
  const { id, title } = req.query;

  switch (method) {
    case "POST":
      let objtoAdd = {
        images: [],
        watering: [],
        fertilizing: [],
      };

      objtoAdd.title = req.body.title;

      formData.fields.forEach((field) => {
        if (req.body[field.name]) {
          objtoAdd[field.name] = req.body[field.name];
        }
      });

      const post = await db.collection(PLANT_TABLE).insertOne(objtoAdd);
      if (!post) {
        res.status(500).send("Server Error - Unable to add plant");
      } else {
        res.status(200).json(post);
      }
      break;
    case "GET":
      const get = await db.collection(PLANT_TABLE).findOne({
        title,
      });
      if (!get) {
        res.status(204).send("Plant not found");
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
        res.status(500).send("Server Error - Unable to delete image");
      } else {
        res.json(deleteImage);
      }
      break;
    case "PUT":
      let objForUpdateArrays = {};
      let objForUpdateStrings = {};

      formData.fields.forEach((field) => {
        if (req.body[field.name]) {
          objForUpdateStrings[field.name] = req.body[field.name];
        }
      });

      formData.arrayFields.forEach((field) => {
        if (req.body[field]) {
          objForUpdateArrays[field] = req.body[field];
        }
      });

      if (req.body.daysBetweenWatering === -1) {
        await db.collection(PLANT_TABLE).updateOne(
          {
            _id: new ObjectId(id),
          },
          { $set: { daysBetweenWatering: undefined } }
        );
      } else {
        objForUpdateStrings.daysBetweenWatering = req.body.daysBetweenWatering;
      }

      if (req.body.daysBetweenFertilizing === -1) {
        await db.collection(PLANT_TABLE).updateOne(
          {
            _id: new ObjectId(id),
          },
          { $set: { daysBetweenFertilizing: undefined } }
        );
      } else {
        objForUpdateStrings.daysBetweenFertilizing =
          req.body.daysBetweenFertilizing;
      }
      const putArray = await db.collection(PLANT_TABLE).updateMany(
        {
          _id: new ObjectId(id),
        },
        { $push: objForUpdateArrays, $set: objForUpdateStrings }
      );
      if (!putArray) {
        res.status(500).send("Unable to update plant array details");
      }
      res.json({ ...putArray });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).send(`Method ${method} Not Allowed`);
      break;
  }
}
