const sortButton = document.getElementById('sort');
const output = document.getElementById('output');

sortButton.addEventListener('click', () => {
  const text = document.getElementById('input').value;
  const list = text.replace(/ /g, '').split(',');
  const sortedList = insertionSort(list);

  output.innerHTML = '';

  sortedList.forEach((num, index) => {
    const span = document.createElement('span');
    span.innerText = `${num} `;
    output.appendChild(span);
  });
});

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    let temp = list[i];

    while (j >= 0 && list[j] > temp) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = temp;
  }
  return list;
}
