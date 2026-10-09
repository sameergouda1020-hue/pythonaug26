let form = document.querySelector("#loginForm");

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;

            let savedEmail = localStorage.getItem("email");
            let savedPassword = localStorage.getItem("password");

            if (email === savedEmail && password === savedPassword) {

                alert("Login Successful");

            } else {

                alert("Invalid Email or Password");

            }

        });
