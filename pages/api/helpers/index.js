export const AWSConfig = () => {
  var AWS = require("aws-sdk");

  AWS.config = new AWS.Config();
  AWS.config.accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  AWS.config.secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
  AWS.config.region = process.env.NEXT_PUBLIC_AWS_REGION;
  console.log(process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY, "secret key");
  return AWS;
};
