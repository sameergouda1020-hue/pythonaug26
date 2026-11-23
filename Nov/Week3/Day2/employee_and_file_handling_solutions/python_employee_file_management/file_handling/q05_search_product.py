products = [
    "Laptop", "Mouse", "Keyboard", "Monitor", "Printer",
    "Laptop", "Webcam", "Speaker", "USB Drive", "Headphones"
]

with open("product_catalog.txt", "w", encoding="utf-8") as file:
    for product in products:
        file.write(product + "\n")

search_name = input("Enter product name to search: ").strip()
with open("product_catalog.txt", "r", encoding="utf-8") as file:
    count = sum(1 for line in file if line.strip().casefold() == search_name.casefold())

if count:
    print(f"{search_name} appears {count} time(s).")
else:
    print("Product not found.")
