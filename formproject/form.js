var xhr = new XMLHttpRequest();

xhr.open('GET', 'form.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var items = JSON.parse(xhr.responseText);
        var output = '';
        for (var i in items) {

            output += '<p>' + items[i].name + " is "+ items[i].age + " years old and is "
                      + items[i].gender + ". It is " + items[i].breed + " and weighs " + items[i].weight +
                        ". Favourite food is " + items[i].food  + "." + '</p>';
            if (i == 0) {
                document.getElementById('dog1').innerHTML = output;
                output = ""
            } else if (i == 1) {
                document.getElementById('dog2').innerHTML = output;
                output = ""
            } else {
                document.getElementById('dog3').innerHTML = output;
            }
        }

    }
}
xhr.send();
