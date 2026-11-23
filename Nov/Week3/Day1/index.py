# 1. Function to check whether a number is even or odd
def even_odd(num):
    if num % 2 == 0:
        print(num, "is Even")
    else:
        print(num, "is Odd")

even_odd(10)


# 2. Function to find the largest of three numbers
def largest(a, b, c):
    return max(a, b, c)

print("Largest number:", largest(10, 25, 15))


# 3. Function to calculate factorial
def factorial(n):
    if n < 0:
        return "Factorial is not defined for negative numbers"
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print("Factorial:", factorial(5))


# 4. Function to check whether a number is prime
def is_prime(num):
    if num <= 1:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False

    return True

print("Prime:", is_prime(7))


# 5. Function to reverse a string
def reverse_string(text):
    return text[::-1]

print("Reversed string:", reverse_string("Python"))


# 6. Function to calculate the sum of all elements in a list
def list_sum(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print("Sum of list:", list_sum([10, 20, 30, 40]))


# 7. Calculator using separate functions
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

print("Addition:", add(10, 5))
print("Subtraction:", subtract(10, 5))
print("Multiplication:", multiply(10, 5))
print("Division:", divide(10, 5))


# 8. Function using *args to calculate the sum of multiple numbers
def sum_numbers(*args):
    return sum(args)

print("Sum of multiple numbers:", sum_numbers(10, 20, 30, 40, 50))


# 9. Function using **kwargs to display student details
def student_details(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

student_details(
    name="Rahul",
    age=20,
    course="Python",
    marks=85
)


# 10. Recursive function to calculate the Fibonacci sequence
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    sequence = fibonacci(n - 1)
    if n == 2:
        sequence.append(1)
    else:
        sequence.append(sequence[-1] + sequence[-2])

    return sequence

print("Fibonacci sequence:", fibonacci(10))