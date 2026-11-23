name = input("Student name: ")
roll = input("Roll number: ")
subjects = ["English", "Mathematics", "Science", "Computer", "Social Studies"]
marks = []

for subject in subjects:
    while True:
        try:
            mark = float(input(f"Marks in {subject} (0-100): "))
            if 0 <= mark <= 100:
                marks.append(mark)
                break
            print("Marks must be between 0 and 100.")
        except ValueError:
            print("Enter a valid number.")

total = sum(marks)
percentage = total / len(subjects)
status = "PASS" if all(mark >= 35 for mark in marks) else "FAIL"

result = (
    f"Student Name: {name}\nRoll Number: {roll}\n"
    + "".join(f"{subject}: {mark:g}\n" for subject, mark in zip(subjects, marks))
    + f"Total Marks: {total:g}/500\nPercentage: {percentage:.2f}%\nResult: {status}\n"
)

with open("exam_result.txt", "w", encoding="utf-8") as file:
    file.write(result)

with open("exam_result.txt", "r", encoding="utf-8") as file:
    print("\nExamination Result")
    print(file.read())
