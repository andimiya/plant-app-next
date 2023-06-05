import moment from "moment";

export const formatDate = (unix: number, short = false) => {
  if (short) {
    return moment.unix(unix).format("MMM Do, ha");
  }
  return moment.unix(unix).format("MMMM Do YYYY, h:mm a");
};
