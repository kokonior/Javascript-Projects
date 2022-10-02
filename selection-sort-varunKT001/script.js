const sortButton = document.getElementById('sort');
const output = document.getElementById('output');

sortButton.addEventListener('click', () => {
  const text = document.getElementById('input').value;
  const list = text.replace(/ /g, '').split(',');
  const sortedList = selectionSort(list);

  output.innerHTML = '';

  sortedList.forEach((num, index) => {
    const span = document.createElement('span');
    span.innerText = `${num} `;
    output.appendChild(span);
  });
});

function selectionSort(list) {
  for (let i = 0; i < list.length; i += 1) {
    index = i;
    min = list[i];

    for (let j = i + 1; j < list.length; j += 1) {
      if (min > list[j]) {
        min = list[j];
        index = j;
      }
    }

    temp = list[i];
    list[i] = min;
    list[index] = temp;
  }

  return list;
}
