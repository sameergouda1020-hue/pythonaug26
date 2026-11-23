def add_employee():
    """Take employee details and return an employee dictionary."""
    print("\nEnter Employee Details")
    employee_id = input("Enter Employee ID: ").strip()
    name = input("Enter Employee Name: ").strip()
    department = input("Enter Department: ").strip()

    while True:
        try:
            monthly_salary = float(input("Enter Monthly Salary: ₹"))
            if monthly_salary < 0:
                print("Salary cannot be negative.")
                continue
            break
        except ValueError:
            print("Please enter a valid number.")

    return {
        "id": employee_id,
        "name": name,
        "department": department,
        "salary": monthly_salary
    }


def display_employee(employee):
    print(f"Employee ID: {employee['id']}")
    print(f"Employee Name: {employee['name']}")
    print(f"Department: {employee['department']}")
    print(f"Monthly Salary: ₹{employee['salary']:,.2f}")


def display_all_employees(employees):
    if not employees:
        print("No employees have been added.")
        return

    for employee in employees:
        print("\n-------------------------")
        display_employee(employee)
