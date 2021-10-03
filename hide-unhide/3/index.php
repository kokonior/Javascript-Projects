<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        function convert(degree) {
            if (degree == "C") {
                F = document.getElementById("c").value * 9 / 5 + 32;
                document.getElementById("f").value = Math.round(F);
            } else {
                C = (document.getElementById("f").value - 32) * 5 / 9;
                document.getElementById("c").value = Math.round(C);
            }
        }
    </script>
</head>
<body>
    <p>Masukkan angka pada masukan berikut:</p>
    <input id="c" onkeyup="convert('C')"> derajat Celcius <br> equals<br>
    <input id="f" onkeyup="convert('F')"> derajat Fahrenheit
</body>
</html>
