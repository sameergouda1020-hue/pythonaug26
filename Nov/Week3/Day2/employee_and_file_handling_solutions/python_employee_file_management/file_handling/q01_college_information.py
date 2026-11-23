with open("college_info.txt", "w", encoding="utf-8") as file:
    college = input("College name: ")
    location = input("Location: ")
    year = input("Establishment year: ")
    departments = input("Number of departments: ")
    file.write(f"College Name: {college}\nLocation: {location}\n"
               f"Establishment Year: {year}\nNumber of Departments: {departments}\n")

with open("college_info.txt", "r", encoding="utf-8") as file:
    print("\nCollege Information")
    print(file.read())
