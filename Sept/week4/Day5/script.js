let form = document.getElementById("studentForm");

let nameInput = document.getElementById("name");

nameInput.addEventListener("input", function() {
    console.log("User is typing");
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (name == "" || email == "" || phone == "" ||
        dob == "" || address == "" || gender == null) {

        alert("Please fill all fields.");
        return;
    }

    let student = {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        gender: gender.value,
        address: address
    };

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );

    alert("Registration Successful!");

    form.reset();
});

document.getElementById("viewButton").addEventListener(
    "click",
    function() {

        let data = localStorage.getItem("student");

        if (data == null) {
            document.getElementById("details").innerHTML =
                "No student data found.";
            return;
        }

        let student = JSON.parse(data);

        document.getElementById("details").innerHTML =
            "<b>Name:</b> " + student.name + "<br>" +
            "<b>Email:</b> " + student.email + "<br>" +
            "<b>Phone:</b> " + student.phone + "<br>" +
            "<b>Date of Birth:</b> " + student.dob + "<br>" +
            "<b>Gender:</b> " + student.gender + "<br>" +
            "<b>Address:</b> " + student.address;
    }
);