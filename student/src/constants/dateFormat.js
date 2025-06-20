import dayjs from "dayjs";

export const DATE_FORMAT = {
  GET_KEY: (date) => dayjs(date).format("YYYY-MM-DD"),
  
};
