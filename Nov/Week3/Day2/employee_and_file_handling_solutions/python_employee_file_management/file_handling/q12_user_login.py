# Classroom exercise only: this stores passwords as plain text.
# Never store real passwords this way in an actual application.

username = input("Create username: ")
email = input("Enter email: ")
password = input("Create password: ")

with open("account_details.txt", "w", encoding="utf-8") as file:
    file.write(f"{username}\n{email}\n{password}\n")

print("\nLogin")
entered_username = input("Username: ")
entered_email = input("Email: ")
entered_password = input("Password: ")

with open("account_details.txt", "r", encoding="utf-8") as file:
    saved_username, saved_email, saved_password = [line.rstrip("\n") for line in file]

if (entered_username == saved_username
        and entered_email == saved_email
        and entered_password == saved_password):
    print("Login Successful")
else:
    print("Invalid Credentials")
