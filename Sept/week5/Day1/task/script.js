let registerForm = document.querySelector(".register");

let inputs = document.querySelectorAll(".register>input");

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

    let existingUser = existingUsers.find((v) => v.email == email);

    if (existingUser) {
        alert("User already exist");
        return;
    }

    let newUserList = [
        ...existingUsers,
        { name, age, phone, email, password }
    ];

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

    let email = loginInputs[0].value;
    let password = loginInputs[1].value;

    if (!email || !password) {
        alert("kindly fill the field");
        return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];

    let existingUser = existingUsers.find((v) => v.email == email);

    if (!existingUser) {
        alert("user not exist");
    } 
    else {

        if (existingUser.password == password) {

            alert("login success");

            loginInputs[0].value = "";
            loginInputs[1].value = "";

        } 
        else {

            alert("Invalid password");

        }

    }

});