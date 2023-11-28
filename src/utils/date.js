/**
 * 오늘날짜 가져오기
 * @returns YYYYMMDD
 */
export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}${month}${day}`;
};
/**
 * 날짜 형식맞추기 (20231128=>2023.11.28)
 * @param {*} date
 * @returns
 */
export const formatDate = date => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  return `${year}.${month}.${day}`;
};
