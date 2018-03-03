export const validate = val => {
  if (!val) return "";
  const regex = /^\d*(((\.|,)\d{0,2})?)$/;
  return regex.test(val) && val;
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
