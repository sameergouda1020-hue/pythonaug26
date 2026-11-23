with open("employee_records.txt", "w", encoding="utf-8") as file:
    for i in range(5):
        print(f"\nEmployee {i + 1}")
        emp_id = input("Employee ID: ")
        name = input("Name: ")
        department = input("Department: ")
        salary = input("Monthly salary: ")
        file.write(f"ID: {emp_id}, Name: {name}, Department: {department}, "
                   f"Monthly Salary: {salary}\n")

with open("employee_records.txt", "r", encoding="utf-8") as file:
    print("\nEmployee Records")
    print(file.read())
