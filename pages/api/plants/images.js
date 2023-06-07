import clientPromise from "../../../lib/mongodb";
import { PLANT_TABLE } from "../../../lib/constants";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { method } = req;
  const dbName = process.env.DB_NAME;
  const client = await clientPromise;
  const db = client.db(dbName);
  const { id, imageUrl } = req.query;

  switch (method) {
    case "PUT":
      try {
        db.collection(PLANT_TABLE).bulkWrite([
          {
            updateOne: {
              filter: { _id: new ObjectId(id) },
              update: { $pull: { images: imageUrl } },
            },
          },
          {
            updateOne: {
              filter: { _id: new ObjectId(id) },
              update: {
                $push: {
                  images: {
                    $each: [imageUrl],
                    $position: 0,
                  },
                },
              },
            },
          },
        ]);
      } catch (error) {
        print(error);
        res.json({ success: false });
      }
      res.json({ success: true });
      break;
    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).send(`Method ${method} Not Allowed`);
      break;
  }
}
