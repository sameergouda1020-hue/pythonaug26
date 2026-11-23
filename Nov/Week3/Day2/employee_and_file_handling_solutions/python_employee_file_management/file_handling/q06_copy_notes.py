notes = """Python Notes
1. Python is a high-level programming language.
2. Variables store data.
3. Functions help reuse code.
4. Lists are ordered and mutable.
"""

with open("python_notes.txt", "w", encoding="utf-8") as file:
    file.write(notes)

with open("python_notes.txt", "r", encoding="utf-8") as source:
    content = source.read()

with open("backup_notes.txt", "w", encoding="utf-8") as backup:
    backup.write(content)

print("Notes copied successfully to backup_notes.txt")
