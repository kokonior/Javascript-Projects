const sortButton = document.getElementById('sort');
const output = document.getElementById('output');

sortButton.addEventListener('click', () => {
  const text = document.getElementById('input').value;
  const list = text.replace(/ /g, '').split(',');
  const sortedList = quickSort(list);

  output.innerHTML = '';

  sortedList.forEach((num, index) => {
    const span = document.createElement('span');
    span.innerText = `${num} `;
    output.appendChild(span);
  });
});

function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[list.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < list.length - 1; i++) {
    list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
