import moment from "moment";

export const formatDate = (timestamp: string, short = false) => {
  if (short) {
    return moment(timestamp).format("MMM Do, ha");
  }
  return moment(timestamp).format("MMMM Do YYYY, h:mm a");
};

export const sortByTimestamp = (arrayOfTimestamps?: string[]): string[] => {
  if (!arrayOfTimestamps || arrayOfTimestamps.length === 0) {
    return [];
  } else {
    return arrayOfTimestamps.sort((a, b) => {
      return moment(b).diff(moment(a));
    });
  }
};
