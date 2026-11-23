def employees_by_department(employees, department):
    matches = []
    for employee in employees:
        if employee["department"].strip().lower() == department.strip().lower():
            matches.append(employee)
    return matches


def highest_paid_employee(employees):
    if not employees:
        return None

    highest = employees[0]
    for employee in employees[1:]:
        if employee["salary"] > highest["salary"]:
            highest = employee
    return highest
