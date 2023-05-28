import moment from "moment";

export const formatDate = (unix: number, short = false) => {
  if (short) {
    return moment(unix).format("MMM Do, ha");
  }
  return moment(unix).format("MMMM Do YYYY, h:mm a");
};
