import moment from "moment";

export const formatDate = (unix: number) => {
  return moment(unix).format("MMMM Do YYYY, h:mm a");
};
