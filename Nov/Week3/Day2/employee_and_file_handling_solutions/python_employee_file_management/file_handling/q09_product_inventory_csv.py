import csv

products = [
    ["P101", "Laptop", "Electronics", 55000, 8],
    ["P102", "Mouse", "Accessories", 500, 30],
    ["P103", "Keyboard", "Accessories", 1200, 20],
    ["P104", "Chair", "Furniture", 4500, 12],
    ["P105", "Notebook", "Stationery", 80, 100],
]

with open("inventory.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["Product ID", "Product Name", "Category", "Price", "Quantity"])
    writer.writerows(products)

with open("inventory.csv", "r", newline="", encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        print(" | ".join(row))
