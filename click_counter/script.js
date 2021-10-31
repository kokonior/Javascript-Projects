window.onload = function () {
    let clickSection = document.getElementById("click");
    clickSection.onclick = addClick;
  
    let resetButton = document.getElementById("reset");
    resetButton.onclick = resetCounter;
  };
  
  var counterValue = 0;
  
  addClick = function () {
    updateDisplay(++counterValue);
  };
  
  function resetCounter() {
    counterValue = 0;
    updateDisplay(counterValue);
  }
  
  function updateDisplay(val) {
    document.getElementById("counter").innerHTML = val;
  }  