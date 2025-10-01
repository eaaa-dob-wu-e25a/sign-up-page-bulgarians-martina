// Store all users in an array (Task 3)
const users = [];
let editingIndex = undefined; // Track which user is being edited

// Select form elements (Task 1)
const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search');
const userList = document.getElementById('user-list');

// Task 1: Form submit event listener
form.addEventListener('submit', getUserInfo);

// This function runs when the form is submitted
function getUserInfo(event){
  event.preventDefault(); // Prevent page reload
  
  // Select input fields and get their values (Task 1)
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const age = parseInt(ageInput.value);
  
  // Task 1: Check if all fields are filled
  if (!name || !email || !ageInput.value) {
    errorMessage.textContent = "Please fill in all fields!";
    errorMessage.style.color = "red";
    return;
  }
  
  // Task 2: Validate the form
  if (!validateForm(name, email, age)) {
    return; // Stop if validation fails
  }
  
  // Task 3: Create user object
  const user = {
    name: name,
    email: email,
    age: age
  };
  
  console.log("User object:", user); // Task 3: Log to console
  
  // Task 5: Check if we're editing or adding new user
  if (editingIndex !== undefined) {
    // Update existing user
    users[editingIndex] = user;
    editingIndex = undefined;
    errorMessage.textContent = "User updated successfully!";
    errorMessage.style.color = "green";
  } else {
    // Task 3: Add new user to array
    users.push(user);
    errorMessage.textContent = "User added successfully!";
    errorMessage.style.color = "green";
  }
  
  // Task 4: Display users
  renderUsers();
  
  // Task 7: Clear the form
  clearForm();
}

// Task 2: Validate input
function validateForm(name, email, age) {
  errorMessage.textContent = ""; // Clear previous errors
  
  // Check age is between 1 and 120
  if (age < 1 || age > 120) {
    alert("Age must be between 1 and 120!");
    errorMessage.textContent = "Age must be between 1 and 120!";
    errorMessage.style.color = "red";
    return false;
  }
  
  // Check email contains @ and .
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address!");
    errorMessage.textContent = "Email must contain @ and .";
    errorMessage.style.color = "red";
    return false;
  }
  
  return true; // All validation passed
}

// Task 4: Display all users
function renderUsers(filteredUsers = users) {
  userList.innerHTML = ""; // Clear current list
  
  // Loop through users and create HTML for each
  filteredUsers.forEach((user, index) => {
    // Create container for user
    const userDiv = document.createElement("div");
    userDiv.className = "user-item";
    userDiv.style.padding = "10px";
    userDiv.style.borderBottom = "1px solid #ccc";
    userDiv.style.marginBottom = "10px";
    
    // User info
    const userInfo = document.createElement("span");
    userInfo.textContent = `${user.name} - ${user.email} (Age: ${user.age})`;
    userDiv.appendChild(userInfo);
    
    // Task 5: Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";
    editBtn.style.padding = "5px 10px";
    editBtn.addEventListener("click", () => editUser(index));
    userDiv.appendChild(editBtn);
    
    // Task 5: Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.padding = "5px 10px";
    removeBtn.style.backgroundColor = "#f44336";
    removeBtn.style.color = "white";
    removeBtn.addEventListener("click", () => removeUser(index));
    userDiv.appendChild(removeBtn);
    
    userList.appendChild(userDiv);
  });
}

// Task 5: Edit user
function editUser(index) {
  const user = users[index];
  
  // Pre-fill form with user data
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("age").value = user.age;
  
  // Set editing mode
  editingIndex = index;
  
  errorMessage.textContent = "Editing user...";
  errorMessage.style.color = "blue";
}

// Task 5: Remove user
function removeUser(index) {
  const user = users[index];
  
  // Confirm before removing
  if (confirm(`Are you sure you want to remove ${user.name}?`)) {
    users.splice(index, 1);
    renderUsers();
    errorMessage.textContent = "User removed successfully!";
    errorMessage.style.color = "green";
  }
}

// Task 7: Clear form
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

// Task 6: Search functionality
searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase().trim();
  
  // Filter users by name or email
  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchText) || 
           user.email.toLowerCase().includes(searchText);
  });
  
  // Display filtered users
  renderUsers(filteredUsers);
});
