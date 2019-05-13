module.exports = {
  add,
};

function add(args) {
  const numbers = Array.isArray(args) ? args : [...arguments];

  return numbers.reduce((accumulator, element) => {
    return accumulator + element;
    // 0 + 1 -> accu
    // 1 + 2 -> accu
    // 3 + 3 -> result
  }, 0);
}
