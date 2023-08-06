export const convertStringToDate = (dateString: string): Date => {
  const dateParams = dateString.split("/").map((e) => parseInt(e));
  return new Date(dateParams[2], dateParams[1] - 1, dateParams[0]);
};
