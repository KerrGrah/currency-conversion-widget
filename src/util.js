export const numberWithCommas = x => {
  console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const validate = val => {
  let result = "";
  for (const letter of val) {
    if (+letter || letter === "0") result += String(letter);
  }
  return Number(result);
};
