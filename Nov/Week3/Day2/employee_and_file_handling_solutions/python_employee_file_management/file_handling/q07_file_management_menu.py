import os

filename = "company_profile.txt"

while True:
    print("\n===== FILE MANAGEMENT MENU =====")
    print("1. Create file")
    print("2. Write company information")
    print("3. Read file")
    print("4. Append company details")
    print("5. Rename file to business_profile.txt")
    print("6. Delete file")
    print("7. Exit")

    choice = input("Enter choice: ").strip()

    if choice == "1":
        open(filename, "a", encoding="utf-8").close()
        print("File created.")
    elif choice == "2":
        name = input("Company name: ")
        location = input("Company location: ")
        with open(filename, "w", encoding="utf-8") as file:
            file.write(f"Company: {name}\nLocation: {location}\n")
        print("Company information written.")
    elif choice == "3":
        try:
            with open(filename, "r", encoding="utf-8") as file:
                print(file.read())
        except FileNotFoundError:
            print("File does not exist.")
    elif choice == "4":
        detail = input("Enter new company detail: ")
        with open(filename, "a", encoding="utf-8") as file:
            file.write(detail + "\n")
        print("Detail appended.")
    elif choice == "5":
        new_name = "business_profile.txt"
        if os.path.exists(filename):
            if os.path.exists(new_name):
                print("business_profile.txt already exists.")
            else:
                os.rename(filename, new_name)
                filename = new_name
                print("File renamed.")
        else:
            print("File does not exist.")
    elif choice == "6":
        if os.path.exists(filename):
            os.remove(filename)
            print("File deleted.")
        else:
            print("File does not exist.")
    elif choice == "7":
        print("Goodbye.")
        break
    else:
        print("Invalid choice.")
