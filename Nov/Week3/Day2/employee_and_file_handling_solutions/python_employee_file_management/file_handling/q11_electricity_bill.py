units = []

with open("electricity_units.txt", "w", encoding="utf-8") as file:
    for household in range(1, 11):
        while True:
            try:
                consumption = float(input(f"Enter units for household {household}: "))
                if consumption < 0:
                    print("Units cannot be negative.")
                    continue
                units.append(consumption)
                file.write(f"{consumption}\n")
                break
            except ValueError:
                print("Enter a valid number.")

with open("electricity_units.txt", "r", encoding="utf-8") as file:
    saved_units = [float(line.strip()) for line in file if line.strip()]

print("Total units:", sum(saved_units))
print("Highest consumption:", max(saved_units))
print("Lowest consumption:", min(saved_units))
print("Average consumption:", sum(saved_units) / len(saved_units))
