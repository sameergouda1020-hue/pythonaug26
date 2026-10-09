let btn = document.querySelector("button");

btn.style.background = "red";
btn.style.border = "none";

btn.addEventListener("click", (e) => {
  console.log("btn clicked");
  e.stopPropagation();
});

let parentDiv = document.querySelector(".parent");

parentDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("parent div called");
});

let registerForm = document.querySelector(".register");
let inputs = document.querySelectorAll(".register>input");
// console.log(inputs[0])

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inputs[0].value;
  let age = inputs[1].value;
  let phone = inputs[2].value;
  let email = inputs[3].value;
  let password = inputs[4].value;

  if (!name || !age || !phone || !email || !password) {
    alert("Kindly fill all the field");
    return;
  }

  let existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

  let newUserList = [...existingUsers, { name, age, phone, email, password }];
  localStorage.setItem("usersData", JSON.stringify(newUserList));

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
  inputs[4].value = "";
  alert("success register");
});

let loginForm = document.querySelector(".login");
let loginInputs = document.querySelectorAll(".login>input");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // steps
  // to get the data from the input field
  // validate each field
  // check the existing user is there or not by using the email
  // then check the user by password

  //   to get the input value from the form
  let email = loginInputs[0].value;
  let password = loginInputs[1].value;

  //   validate the email , passsword send by user
  if (!email || !password) {
    alert("kindly fill the filed");
  }

  //   get the  existing users from the local storage
  let existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

  // check the user exist or not by checking their email
  let existingUser = existingUsers.find((v) => v.email == email);

  //   console.log(existingUser);

  //   existing user present or not (by check their email)
  if (!existingUser) {
    alert("user not exist");
  } else {
    // after checking the email then check the password
    if (existingUser.password == password) {
      alert("login success");

      loginInputs[0].value = "";
      loginInputs[1].value = "";
    } else {
      alert("Invalid password");
    }
  }
});
