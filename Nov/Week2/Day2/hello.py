
# Practice Questions Operators

# 1. Write a program to add two numbers.
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum = num1 + num2
print("Sum =", sum)


# 2. Write a program to calculate the remainder of two numbers.
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
if num2 != 0:
    remainder = num1 % num2
    print("Remainder =", remainder)
else:
    print("Cannot divide by zero")


# 3. Write a program to calculate the square of a number.
num = int(input("Enter a number: "))
square = num ** 2
print("Square =", square)


# 4. Write a program to compare two numbers.
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
if a > b:
    print("First number is greater")
elif a < b:
    print("Second number is greater")
else:
    print("Both numbers are equal")


# 5. Write a program to check whether a number is between 10 and 50 using logical operators.
num = int(input("Enter a number: "))
if num >= 10 and num <= 50:
    print("Number is between 10 and 50")
else:
    print("Number is not between 10 and 50")


#  Practice Questions Conditional Statements

# 1. Write a program to check whether a number is positive or negative.
num = int(input("Enter a number: "))
if num > 0:
    print("Positive number")
elif num < 0:
    print("Negative number")
else:
    print("Zero")


# 2. Write a program to check whether a number is even or odd.
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")


# 3. Write a program to check voting eligibility.
age = int(input("Enter your age: "))
if age >= 18:
    print("Eligible for voting")
else:
    print("Not eligible for voting")


# 4. Write a program to find the largest of two numbers.
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
if a > b:
    print("Largest number =", a)
elif b > a:
    print("Largest number =", b)
else:
    print("Both numbers are equal")


# 5. Write a program to calculate grades based on marks.
marks = int(input("Enter your marks: "))
if marks < 0 or marks > 100:
    print("Invalid marks")
elif marks >= 90:
    print("Grade A")
elif marks >= 80:
    print("Grade B")
elif marks >= 70:
    print("Grade C")
elif marks >= 60:
    print("Grade D")
else:
    print("Grade F")


# 6. Write a program to check whether a number is positive, negative, or zero.
num = int(input("Enter a number: "))
if num > 0:
    print("Positive number")
elif num < 0:
    print("Negative number")
else:
    print("Zero")


# 7. Write a program to create a simple calculator using if-elif-else.
a = float(input("Enter first number: "))
op = input("Enter operator (+, -, *, /): ")
b = float(input("Enter second number: "))

if op == "+":
    print("Result =", a + b)
elif op == "-":
    print("Result =", a - b)
elif op == "*":
    print("Result =", a * b)
elif op == "/":
    if b != 0:
        print("Result =", a / b)
    else:
        print("Cannot divide by zero")
else:
    print("Invalid operator")


# Practice Questions Loops

# 1. Print numbers from 1 to 10 using a for loop.
for i in range(1, 11):
    print(i)


# 2. Print numbers from 10 to 1 using a while loop.
i = 10
while i >= 1:
    print(i)
    i = i - 1


# 3. Print even numbers from 2 to 20.
for i in range(2, 21, 2):
    print(i)


# 4. Print odd numbers from 1 to 20.
for i in range(1, 21, 2):
    print(i)


# 5. Print the multiplication table of any number.
num = int(input("Enter a number: "))
for i in range(1, 11):
    print(num, "x", i, "=", num * i)


# 6. Print numbers from 5 to 25 with a step of 5.
for i in range(5, 26, 5):
    print(i)


# 7. Print numbers in reverse order from 5 to 1.
for i in range(5, 0, -1):
    print(i)


# 8. Calculate the sum of numbers from 1 to 10.
total = 0
for i in range(1, 11):
    total = total + i
print("Sum =", total)


# 9.
for i in range(1, 6):
    print(i)


# 10.
for i in range(1, 6):
    print("*" * i)