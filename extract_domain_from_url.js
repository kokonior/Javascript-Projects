// Extract domain from URL list
// https://abay.kustirama.id/domain-extractor
function getDomain(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) return match[2];
}

function extract() {
  let listbaru = "";
  var list = document.getElementById('list').value.split('\n');
  for(var i = 0;i < list.length;i++){
        listbaru += getDomain(list[i]) + "\n"
    console.log(getDomain(list[i]))
  }
  document.getElementById('result').value = listbaru;
}
