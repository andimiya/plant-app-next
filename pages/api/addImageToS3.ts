import { AWSConfig } from "./helpers";

export default async function imageUpload(base64: string) {
  const AWS = AWSConfig();
  const s3 = new AWS.S3();

  // Ensure that you POST a base64 data to your server.
  // Let's assume the variable "base64" is one.
  // @ts-ignore: TODO
  const base64Data = new Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  // Getting the file type, ie: jpeg, png or gif
  const type = base64.split(";")[0].split("/")[1];

  // Generally we'd have an userId associated with the image
  // For this example, we'll simulate one
  const randomId = self.crypto.randomUUID();

  // With this setup, each time your user uploads an image, will be overwritten.
  // To prevent this, use a different Key each time.
  // This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.

  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET || "",
    Key: `${randomId}.${type}`, // type is not required
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64", // required
    ContentType: `image/${type}`, // required. Notice the back ticks
  };

  // The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database
  // see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
  let location = "";
  let key = "";
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    const { Location, Key } = await s3.upload(params).promise();
    location = Location;
    key = Key;
  } catch (error) {
    console.log(error, "Error uploading to S3");
  }

  console.log(location, key);
  return location;
}
