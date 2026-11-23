from employee_management.employee import (
    add_employee, display_employee, display_all_employees
)
from employee_management.salary import annual_salary, calculate_bonus
from employee_management.department import (
    employees_by_department, highest_paid_employee
)


def main():
    employees = []

    while True:
        print("\n===== EMPLOYEE MANAGEMENT SYSTEM =====")
        print("1. Add Employee")
        print("2. Display Employee Details")
        print("3. Calculate Annual Salary")
        print("4. Calculate Employee Bonus")
        print("5. Search Employees by Department")
        print("6. Find Highest-Paid Employee")
        print("7. Exit")

        choice = input("Enter your choice: ").strip()

        if choice == "1":
            employees.append(add_employee())
            print("Employee added successfully.")

        elif choice == "2":
            display_all_employees(employees)

        elif choice == "3":
            if not employees:
                print("No employees available.")
                continue
            employee_id = input("Enter Employee ID: ").strip()
            employee = next((e for e in employees if e["id"] == employee_id), None)
            if employee:
                print(f"Annual Salary: ₹{annual_salary(employee):,.2f}")
            else:
                print("Employee not found.")

        elif choice == "4":
            if not employees:
                print("No employees available.")
                continue
            employee_id = input("Enter Employee ID: ").strip()
            employee = next((e for e in employees if e["id"] == employee_id), None)
            if employee:
                bonus = calculate_bonus(employee)
                print(f"Bonus: ₹{bonus:,.2f}")
            else:
                print("Employee not found.")

        elif choice == "5":
            department = input("Enter Department: ").strip()
            matches = employees_by_department(employees, department)
            if matches:
                print(f"\nEmployees in {department} Department:")
                for employee in matches:
                    print(f"{employee['name']} - ₹{employee['salary']:,.2f}")
            else:
                print("No employees found in that department.")

        elif choice == "6":
            employee = highest_paid_employee(employees)
            if employee:
                print("\nHighest Paid Employee:")
                display_employee(employee)
            else:
                print("No employees available.")

        elif choice == "7":
            print("Exiting Employee Management System.")
            break

        else:
            print("Invalid choice. Please select 1 to 7.")


if __name__ == "__main__":
    main()
