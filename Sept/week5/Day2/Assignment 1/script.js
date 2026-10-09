let form = document.querySelector("#registerForm");

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Registration Successful");

        });