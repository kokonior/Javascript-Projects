function assignSantas(array) {
  var matches = [];

  if(!array || !array.length) {
    return null;
  }

  var santas = array.slice();
  shuffle(santas);

  for(var i=0; i<santas.length; i++) {
    var santa = santas[i],
        recipient;

    // Assign santa to the person next to them to avoid assigning to self and avoid duplicate recipients
    if(i !== santas.length-1) {
      recipient = santas[i+1];
    } else {
      recipient = santas[0];      
    }

    matches.push({ "santa": santa, "recipient": recipient });
  }

  return matches;
};

function shuffle(array) {
  var n = array.length, 
      i, 
      j;

  while(n) {
    i = Math.floor(Math.random() * n--);

    j = array[n];
    array[n] = array[i];
    array[i] = j;
  } 
}

function displayNames(array) {
  var list = document.getElementById('santa-list');
  var input = document.getElementById('santa-input');
  input.value = '';
  list.innerHTML = '';

  for(var i=0; i<array.length; i++) {
    var pairing   = array[i],
        santa     = pairing.santa,
        recipient = pairing.recipient,
        dt        = document.createElement('dt'),
        dd        = document.createElement('dd');

      dt.innerHTML += pairing.santa;
      dd.innerHTML += 'buys a gift for <strong>' + pairing.recipient + '</strong>';
      list.appendChild(dt);
      list.appendChild(dd);
  }
}

function parseNames(value) {
  var names = [];
  var vals = value.split('\n');

  for (var i=0; i<vals.length; i++) {
    var name = vals[i].trim();
    if (name === '') continue;
    names.push(name);
  }
  return names;
}

if (typeof(document) !== 'undefined') {
  var button  = document.getElementById('santa-submit');

  button.addEventListener('click', function(e){
    e.preventDefault();
    var input = document.getElementById('santa-input');
    var errorDiv = document.getElementById('error');
    var names = parseNames(input.value);

    if(names.length < 2) {
      input.classList.add('is-error');
      errorDiv.innerHTML = 'Please enter at least 2 names';
      errorDiv.classList.add('is-active');
    } else {
      input.classList.remove('is-error');
      errorDiv.classList.remove('is-active');
      var matches = assignSantas(names);
      displayNames(matches);
    }
  });
}

if (typeof(module) !== 'undefined') {
  module.exports.assignSantas = assignSantas;
  module.exports.parseNames = parseNames;
}
