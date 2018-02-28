const moment = require("moment");

const sortProduct = input => {
  return input
    .filter(value => moment(value.dateAdded).year() >= 2000)
    .sort((a, b) => a.dateAdded - b.dateAdded)
    .map(value => ({
      name: value.name,
      quantity: value.quantity,
      year: moment(value.dateAdded).year(),
      monthOfYear: moment(value.dateAdded).month() + 1
    }))
    .reduce((acc, value) => {
      if (!acc[value.name]) {
        acc[value.name] = [];
      }
      acc[value.name].push(value);
      return acc;
    }, {});
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
