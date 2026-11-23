# OOP
# Class and Object
# Method
# Constructor


# Example 1: Class and Object

# class Employee:          # Class (Blue print)
#     name = "Rahul"
#     emp_id = 1
#     salary = 50000
#     dept = "IT"

# emp1 = Employee()
# emp2 = Employee()

# print(emp1.name)
# print(emp1.emp_id)
# print(emp1.salary)
# print(emp1.dept)
# print("----------")
# print(emp2.name)


# Example 2: Constructor without parameters

# class Employee:
#     name = "Rahul"
#     salary = 50000

#     def __init__(self):
#         self.address = "BBSR"
#         print("Constructor 1")

# emp1 = Employee()

# print(emp1.name)
# print(emp1.address)


# Example 3: Constructor with parameters

class Employee:
    def __init__(self, name, salary, address):
        self.name = name
        self.salary = salary
        self.address = address


# Creating object
emp1 = Employee("Rahul", 50000, "Delhi")

# Accessing object properties
print(emp1.address)


# class Employee:

#     def __init__(self, name):
#         self.name = name
#         self.salary = 45000

#     def EmployeeDetails(self):
#         print("Employee Name:", self.name)
#         print("Employee Salary:", self.salary)


#class Employee:

    # def __init__(self, name, salary):
    #     self.name = name
    #     self.salary = salary

    # def EmployeeDetails(self):
    #     print("Employee Name:", self.name)
    #     print("Employee Salary:", self.salary)



# e1 = Employee("Rahul", 45000)
# e2 = Employee("Rohit", 50000)
# e3 = Employee("Raj", 35000)

# e1.EmployeeDetails()
# e2.EmployeeDetails()
# e3.EmployeeDetails()

# calculator
# class Calculator:

#     def __init__(self):
#         self.a = 20
#         self.b = 10

#     def Add(self):
#         print("Addition =", self.a + self.b)

#     def Sub(self):
#         print("Subtraction =", self.a - self.b)

#     def Mul(self):
#         print("Multiplication =", self.a * self.b)

#     def Div(self):
#         print("Division =", self.a / self.b)


# c1 = Calculator()

# c1.Add()
# c1.Sub()
# c1.Mul()
# c1.Div()

class BankPassbook:

    def __init__(self, name="Sameer", balance=45000):
        self.name = name
        self.balance = balance

    def deposit(self, amount=1000):
        self.balance += amount
        print("Deposit Amount:", amount)

    def withdraw(self, amount=500):
        if amount <= self.balance:
            self.balance -= amount
            print("Withdraw Amount:", amount)
        else:
            print("Insufficient Balance")

    def view_balance(self):
        print("Account Holder:", self.name)
        print("Available Balance:", self.balance)


# Object creation
p1 = BankPassbook()

p1.deposit()
p1.withdraw()
p1.view_balance()