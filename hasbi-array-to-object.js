const data = [
  { id: 1, name: "john" },
  { id: 2, name: "doe" },
];

(() => {
  console.log(
    data.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {})
  );
})();
