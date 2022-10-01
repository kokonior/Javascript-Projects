const sortButton = document.getElementById('sort');
const output = document.getElementById('output');

sortButton.addEventListener('click', () => {
  const text = document.getElementById('input').value;
  const list = text.replace(/ /g, '').split(',');
  const sortedList = bubbleSort(list);

  output.innerHTML = '';

  sortedList.forEach((num, index) => {
    const span = document.createElement('span');
    span.innerText = `${num} `;
    output.appendChild(span);
  });
});

function swap(list, i, j) {
  var temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function bubbleSort(list) {
  let length = list.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }

  return list;
}
