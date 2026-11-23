

# 1. Print 10 numbers using for loop
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for i in numbers:
    print(i)


# 2. Print even and odd numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in numbers:
    if i % 2 == 0:
        print("Even:", i)
    else:
        print("Odd:", i)


# 3. Find largest and smallest numbers
numbers = [45, 12, 78, 34, 90, 23]

largest = numbers[0]
smallest = numbers[0]

for i in numbers:
    if i > largest:
        largest = i
    if i < smallest:
        smallest = i

print("Largest:", largest)
print("Smallest:", smallest)


# 4. Count occurrences of a number
numbers = [10, 20, 10, 30, 10, 40, 20]

target = 10
count = 0

for i in numbers:
    if i == target:
        count += 1

print("Count:", count)


# 5. Sum without using sum()
def calculate_sum(numbers):
    total = 0
    for i in numbers:
        total += i
    return total

print("Sum:", calculate_sum([10, 20, 30, 40, 50]))


# 6. Second largest without sort() or max()
numbers = [10, 50, 30, 90, 70]

largest = None
second = None

for i in numbers:
    if largest is None or i > largest:
        second = largest
        largest = i
    elif i != largest and (second is None or i > second):
        second = i

print("Second largest:", second)


# 7. Remove duplicates without set()
numbers = [10, 20, 10, 30, 20, 40, 50]

unique = []

for i in numbers:
    if i not in unique:
        unique.append(i)

print("Unique:", unique)


# 8. Separate positive, negative and zero
numbers = [10, -5, 0, 20, -10, 0, 30, -2]

positive = []
negative = []
zero = []

for i in numbers:
    if i > 0:
        positive.append(i)
    elif i < 0:
        negative.append(i)
    else:
        zero.append(i)

print("Positive:", positive)
print("Negative:", negative)
print("Zero:", zero)


# 9. Common elements between two lists
list1 = [10, 20, 30, 40, 50]
list2 = [30, 40, 50, 60, 70]

common = []

for i in list1:
    if i in list2 and i not in common:
        common.append(i)

print("Common:", common)


# 10. Check palindrome list
def check_palindrome(numbers):
    reverse = []

    for i in range(len(numbers) - 1, -1, -1):
        reverse.append(numbers[i])

    if numbers == reverse:
        print("Palindrome")
    else:
        print("Not Palindrome")

check_palindrome([1, 2, 3, 2, 1])




# 1. Print tuple elements
numbers = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

for i in numbers:
    print(i)


# 2. Print elements with index
numbers = (10, 20, 30, 40, 50)

for index, value in enumerate(numbers):
    print(index, value)


# 3. Find largest and smallest
numbers = (45, 12, 78, 34, 90, 23)

largest = numbers[0]
smallest = numbers[0]

for i in numbers:
    if i > largest:
        largest = i
    if i < smallest:
        smallest = i

print("Largest:", largest)
print("Smallest:", smallest)


# 4. Count occurrences using count()
numbers = (10, 20, 10, 30, 10, 40, 20)

print("Count:", numbers.count(10))


# 5. Sum without sum()
numbers = (10, 20, 30, 40, 50)

total = 0

for i in numbers:
    total += i

print("Sum:", total)


# 6. Second largest without sort() or max()
numbers = (10, 50, 30, 90, 70)

largest = None
second = None

for i in numbers:
    if largest is None or i > largest:
        second = largest
        largest = i
    elif i != largest and (second is None or i > second):
        second = i

print("Second largest:", second)


# 7. Find duplicate elements
numbers = (10, 20, 10, 30, 20, 40, 50, 30)

duplicates = []

for i in numbers:
    if numbers.count(i) > 1 and i not in duplicates:
        duplicates.append(i)

print("Duplicates:", duplicates)


# 8. Check palindrome without slicing
numbers = (1, 2, 3, 2, 1)

is_palindrome = True

for i in range(len(numbers) // 2):
    if numbers[i] != numbers[len(numbers) - 1 - i]:
        is_palindrome = False
        break

if is_palindrome:
    print("Palindrome")
else:
    print("Not Palindrome")


# 9. Common elements between two tuples
t1 = (10, 20, 30, 40, 50)
t2 = (30, 40, 50, 60, 70)

common = []

for i in t1:
    for j in t2:
        if i == j and i not in common:
            common.append(i)

print("Common:", common)


# 10. Separate even and odd numbers
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

even = []
odd = []

for i in numbers:
    if i % 2 == 0:
        even.append(i)
    else:
        odd.append(i)

print("Even:", even)
print("Odd:", odd)




# 1. Print set elements
numbers = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}

for i in numbers:
    print(i)


# 2. Find union
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

print("Union:", set1.union(set2))


# 3. Find intersection
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

print("Intersection:", set1.intersection(set2))


# 4. Find difference
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

print("Difference:", set1.difference(set2))


# 5. Find largest and smallest
numbers = {45, 12, 78, 34, 90, 23}

largest = None
smallest = None

for i in numbers:
    if largest is None or i > largest:
        largest = i
    if smallest is None or i < smallest:
        smallest = i

print("Largest:", largest)
print("Smallest:", smallest)


# 6. Common elements without intersection()
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

common = set()

for i in set1:
    if i in set2:
        common.add(i)

print("Common:", common)


# 7. Union without union()
set1 = {10, 20, 30}
set2 = {30, 40, 50}

result = set1.copy()

for i in set2:
    result.add(i)

print("Union:", result)


# 8. Check equality without ==
set1 = {10, 20, 30, 40}
set2 = {40, 30, 20, 10}

if len(set1) == len(set2) and set1.issubset(set2):
    print("Both sets are equal")
else:
    print("Sets are not equal")


# 9. Elements present in exactly one of three sets
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set3 = {4, 5, 6, 7}

result = set()

for i in set1 | set2 | set3:
    count = 0

    if i in set1:
        count += 1
    if i in set2:
        count += 1
    if i in set3:
        count += 1

    if count == 1:
        result.add(i)

print("Result:", result)


# 10. Common characters between two strings
str1 = "python"
str2 = "programming"

set1 = set(str1)
set2 = set(str2)

common = set1.intersection(set2)

print("Common characters:", common)



# 1. Create dictionary of 5 students
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 90,
    "Neha": 65,
    "Rohit": 40
}

for key, value in students.items():
    print(key, ":", value)


# 2. Add city key
student = {
    "name": "Rahul",
    "age": 21,
    "marks": 85
}

student["city"] = "Bhubaneswar"

print(student)


# 3. Update marks
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 90
}

students["Amit"] = 95

print(students)


# 4. Total marks without sum()
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 90,
    "Neha": 65
}

total = 0

for marks in students.values():
    total += marks

print("Total marks:", total)


# 5. Count passed and failed students
students = {
    "Rahul": 85,
    "Amit": 30,
    "Priya": 90,
    "Neha": 25,
    "Rohit": 40
}

passed = 0
failed = 0

for marks in students.values():
    if marks >= 40:
        passed += 1
    else:
        failed += 1

print("Passed:", passed)
print("Failed:", failed)


# 6. Find highest and lowest marks
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 90,
    "Neha": 65
}

highest = None
lowest = None

topper = ""
lowest_student = ""

for name, marks in students.items():
    if highest is None or marks > highest:
        highest = marks
        topper = name

    if lowest is None or marks < lowest:
        lowest = marks
        lowest_student = name

print("Highest:", topper, highest)
print("Lowest:", lowest_student, lowest)


# 7. Find second-highest marks
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 95,
    "Neha": 65,
    "Rohit": 90
}

highest = None
second = None

for marks in students.values():
    if highest is None or marks > highest:
        second = highest
        highest = marks
    elif marks != highest and (second is None or marks > second):
        second = marks

print("Second highest:", second)


# 8. Students scoring more than 75
students = {
    "Rahul": 85,
    "Amit": 70,
    "Priya": 90,
    "Neha": 65,
    "Rohit": 80
}

result = {}

for name, marks in students.items():
    if marks > 75:
        result[name] = marks

print("Result:", result)


# 9. Character frequency
string = "programming"

frequency = {}

for i in string:
    if i in frequency:
        frequency[i] += 1
    else:
        frequency[i] = 1

print("Frequency:", frequency)


# 10. Merge dictionaries without update()
dict1 = {
    "a": 10,
    "b": 20,
    "c": 30
}

dict2 = {
    "d": 40,
    "e": 50,
    "f": 60
}

result = {}

for key, value in dict1.items():
    result[key] = value

for key, value in dict2.items():
    result[key] = value

print("Merged dictionary:", result)
