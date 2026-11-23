paragraph = input("Enter a paragraph about technology: ")

with open("article.txt", "w", encoding="utf-8") as file:
    file.write(paragraph + "\n")

with open("article.txt", "r", encoding="utf-8") as file:
    content = file.read()

print("Article:")
print(content)
print("Total characters:", len(content))
print("Total words:", len(content.split()))
print("Total lines:", len(content.splitlines()))
