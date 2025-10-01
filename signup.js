const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search');

form.addEventListener('submit', getUserInfo(submitEvent));

// This function only runs when the form is submitted
function getUserInfo(event){
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  
  if (!name || name.length < 2) {
    errorMessage.textContent = "The name should have more characters";
    return;
  }
  
  if (!email.includes("@")) {
    errorMessage.textContent = "This is not email";
    return;
  }
  
  if (!age || age < 1 || age > 120) {
    errorMessage.textContent = "The age must be between 1-120";
    return;
  }
  
  // Ak je všetko OK, pridaj používateľa
  errorMessage.textContent = "";
  users.push({name, email, age});
}

searchInput.addEventListener('input', function() {

});


function renderUsers(filteredUsers = users) {

}

function validateForm(name, email, age) {
  //

}

function clearForm() {

}

function editUser(index) {

}
