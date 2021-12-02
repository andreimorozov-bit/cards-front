import moment from "moment";

export const formatDate = (value: string): string => {
  return moment(String(value)).format("DD.MM.YYYY");
};
