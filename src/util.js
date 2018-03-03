export const validate = val => {
  if (!val) return "";
  const regex = /^\d*(((\.|,)\d{0,2})?)$/;
  return regex.test(val) && val;
};
