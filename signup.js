const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search');

form.addEventListener('submit', getUserInfo);

// This function only runs when the form is submitted
function getUserInfo(event){
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  
  if (!name || name.length < 2) {
    alert("The name should have more characters");
    return;
  }
  
  if (!email.includes("@")) {
    alert("This is not email");
    return;
  }
  
  if (!age || age < 1 || age > 120) {
    alert("The age must be between 1-120");
    return;
  }
  
  
  const user = createUser(name, email, age);
  
  alert("User successfully registered!");
  users.push(user);
  renderUsers(); 
  clearForm();
}

searchInput.addEventListener('input', function() {
  
});

function createUser(name, email, age) {
  return {
    name: name,
    email: email,
    age: age
  };
}

function renderUsers(filteredUsers = users) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  filteredUsers.forEach((user, index) => {
    const userDiv = document.createElement('div');
    userDiv.style.border = '1px solid #ccc';
    userDiv.style.padding = '10px';
    userDiv.style.margin = '5px 0';
    userDiv.style.borderRadius = '5px';
    
    userDiv.innerHTML = `
      <strong>Name:</strong> ${user.name}<br>
      <strong>Email:</strong> ${user.email}<br>
      <strong>Age:</strong> ${user.age}<br>
    `;
    
    userList.appendChild(userDiv);
  });
}

function validateForm(name, email, age) {
  

}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

function editUser(index) {

}
