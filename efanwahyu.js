<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>SpaceX | Spacetour</title>
</head>
<body>
  <div class="container">
    <div class="frame">
      <div class="form">
        <div class="mb-1 mt text-center">
          <img 
            src="./assets/SpaceX-Logo.png"
            width="100%"
          />
        </div>
        <h3>Join Our Spacetour</h3>
        <div class="input-form">
          <div class="label-form">
            <span>Full Name</span>
          </div>
          <input class='input-text' type="text" id='name' placeholder="Full name" />
        </div>
        <div class="input-form">
          <div class="label-form">
            <span>Country</span>
          </div>
          <input class='input-text' id='country' type="text" placeholder="Country" />
        </div>
        <div class="input-form">
          <div class="label-form">
            <span>Age</span>
          </div>
          <input class='input-text' type="number" id='age' placeholder="Age" />
        </div>
        <div class="input-form">
          <div class="label-form">
            <span>Phone</span>
          </div>
          <input class='input-text' type="number" id='phone' placeholder="Phone" />
        </div>
        <div class="input-form mb-5">
          <div class="label-form">
            <span>Email</span>
          </div>
          <input class='input-text' pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" type="email" id='email' placeholder="Email" />
          <p class="blocker" id="blocker-text"></p>
        </div>
        <button class="btn">BOOK TICKET</button>
      </div>
    </div>
  </div>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <h1 class="text-center">Successfull Booked Ticket!</h1>
      <div class="text-center mb-5">
        <img 
          src="./assets/modal.png"
          width="50%"
          class="mb-2"
        />
        <h2>Enjoy your spacetour with SpaceX!</h2>
        <p class="secondary-text">Thank's for buy our ticket, your ticket will be send to your email</p>
      </div>
      <button class="close btn">DONE</button>
    </div>
  </div>
</body>
<script>
// form
const name = document.getElementById('name');
const country = document.getElementById('country');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const modal = document.getElementById("myModal");

// blocker 
const blockerText = document.getElementById('blocker-text');

// button
const button = document.querySelector('.btn');
const btnClose = document.querySelector('.close');

// submit
button.addEventListener('click', function() {
  if (name.value === '' || country.value === '' || age.value === '' || phone.value === '' || email.value === '') {
    blockerText.innerText = "Please fill the field!"
  } else if (age.value < 20) {
    blockerText.innerText = "Sorry, you are too young"
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    blockerText.innerText = "Please enter a valid email!"
  } else {
    blockerText.innerText = ""
    modal.style.display = "block";
  }
})

// close modal
btnClose.addEventListener('click', function() {
  modal.style.display = "none";
  name.value = ''
  country.value = ''
  age.value = ''
  phone.value = ''
  email.value = ''
})

// close modal from outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
</html>
