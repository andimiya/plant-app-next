import { sortByTimestamp } from "@/utils/utils";
import moment, { Moment } from "moment";

export const AWSConfig = () => {
  var AWS = require("aws-sdk");

  AWS.config = new AWS.Config();
  AWS.config.accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  AWS.config.secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
  AWS.config.region = process.env.NEXT_PUBLIC_AWS_REGION;
  return AWS;
};

interface INeedsWaterOrFertilizerParams {
  daysUntilNeed: number | undefined;
  lastWateredOrFertilized: string | undefined; // moment timestamp 2023-06-07T04:23:46.376Z
}
export const needsWaterOrFertilizer = ({
  daysUntilNeed,
  lastWateredOrFertilized,
}: INeedsWaterOrFertilizerParams): boolean => {
  if (!daysUntilNeed || !lastWateredOrFertilized) {
    return false;
  }

  const nextWaterDate = moment(lastWateredOrFertilized).add(
    daysUntilNeed,
    "days"
  );
  const now = moment();
  if (nextWaterDate > now) {
    return false;
  } else {
    return true;
  }
};

interface INextWaterDate {
  daysUntilNeed: number | undefined;
  waterOrFertilizeArray: string[] | undefined; // moment timestamp 2023-06-07T04:23:46.376Z
}
export const nextWaterOrFertiizeDate = ({
  daysUntilNeed,
  waterOrFertilizeArray,
}: INextWaterDate): string | null => {
  if (!daysUntilNeed || !waterOrFertilizeArray?.length) {
    return null;
  }

  const lastWateredOrFertilized = sortByTimestamp(waterOrFertilizeArray)[0];

  const nextWaterDate = moment(lastWateredOrFertilized).add(
    daysUntilNeed,
    "days"
  );
  return moment(nextWaterDate).format("MMM Do");
};
