with open("shopping_list.txt", "w", encoding="utf-8") as file:
    for i in range(5):
        file.write(input(f"Enter shopping item {i + 1}: ") + "\n")

with open("shopping_list.txt", "a", encoding="utf-8") as file:
    for i in range(3):
        file.write(input(f"Enter additional item {i + 1}: ") + "\n")

with open("shopping_list.txt", "r", encoding="utf-8") as file:
    print("\nShopping List")
    print(file.read())
