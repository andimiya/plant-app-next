// // @ts-nocheck
// import clientPromise from "../../lib/mongodb";
// import { ObjectId } from "mongodb";
// import { PLANT_TABLE } from "../../lib/constants";

// export default async (req, res) => {
//   const dbName = process.env.DB_NAME;
//   try {
//     const client = await clientPromise;
//     const db = client.db(dbName);
//     const { title } = req.query;

//     const post = await db.collection(PLANT_TABLE).findOne({
//       title,
//     });
//     console.log(post, "posttt");

//     res.json(post);
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// };
