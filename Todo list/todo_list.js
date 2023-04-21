const myList = document.querySelector('.myList');
const input = document.getElementById('title');

function createListElement() {
  const inputText = input.value.trim();

  if (!inputText) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputText;

  const span = document.createElement('span');
  span.textContent = 'Remove';
  span.className = 'close';

  li.appendChild(span);
  myList.appendChild(li);

  li.addEventListener('click', function() {
    li.classList.toggle('checked');
  });

  span.addEventListener('click', function() {
    li.remove();
  });

  input.value = '';
}

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    createListElement();
  }
});
