import moment from "moment";

export const formatDate = (timestamp: string, short = false) => {
  if (short) {
    return moment(timestamp).format("MMM Do, ha");
  }
  return moment(timestamp).format("MMMM Do YYYY, h:mm a");
};
