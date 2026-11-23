def annual_salary(employee):
    return employee["salary"] * 12


def calculate_bonus(employee):
    monthly_salary = employee["salary"]

    if monthly_salary < 15000:
        percentage = 5
    elif monthly_salary <= 30000:
        percentage = 10
    else:
        percentage = 15

    return monthly_salary * percentage / 100
