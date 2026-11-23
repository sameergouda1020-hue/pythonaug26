# Question 1 – Book Details

class Book:
    def __init__(self, book_name, author_name, price):
        self.book_name = book_name
        self.author_name = author_name
        self.price = price

    def display_details(self):
        print("\nBook Details")
        print("Book Name:", self.book_name)
        print("Author Name:", self.author_name)
        print("Price: ₹", self.price)


book1 = Book("Python Programming", "John Smith", 500)
book1.display_details()


# Question 2 – Rectangle

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


rectangle1 = Rectangle(10, 5)

print("\nRectangle Details")
print("Area:", rectangle1.area())
print("Perimeter:", rectangle1.perimeter())


# Question 3 – Movie Ticket

class MovieTicket:
    def __init__(self, movie_name, ticket_price):
        self.movie_name = movie_name
        self.ticket_price = ticket_price

    def display_details(self):
        print("\nMovie Details")
        print("Movie Name:", self.movie_name)
        print("Ticket Price: ₹", self.ticket_price)

    def calculate_total(self, quantity):
        return self.ticket_price * quantity


ticket1 = MovieTicket("Avengers", 200)
ticket1.display_details()

quantity = 3
print("Number of Tickets:", quantity)
print("Total Price: ₹", ticket1.calculate_total(quantity))


# Question 4 – Electricity Bill

class ElectricityBill:
    def __init__(self, customer_name, units_consumed):
        self.customer_name = customer_name
        self.units_consumed = units_consumed

    def calculate_bill(self):
        return self.units_consumed * 5

    def display_bill(self):
        print("\nElectricity Bill")
        print("Customer Name:", self.customer_name)
        print("Units Consumed:", self.units_consumed)
        print("Rate per Unit: ₹5")
        print("Total Bill: ₹", self.calculate_bill())


customer1 = ElectricityBill("Rahul", 150)
customer1.display_bill()


# Question 5 – Shopping Cart

class ShoppingCart:
    def __init__(self, product_name, price, quantity):
        self.product_name = product_name
        self.price = price
        self.quantity = quantity

    def display_details(self):
        print("\nShopping Cart Details")
        print("Product Name:", self.product_name)
        print("Price: ₹", self.price)
        print("Quantity:", self.quantity)

    def calculate_total(self):
        return self.price * self.quantity

    def apply_discount(self):
        total = self.calculate_total()

        if total > 5000:
            discount = total * 0.10
            final_price = total - discount
        else:
            discount = 0
            final_price = total

        print("Total Price: ₹", total)
        print("Discount: ₹", discount)
        print("Final Price: ₹", final_price)


cart1 = ShoppingCart("Laptop", 60000, 1)
cart1.display_details()
cart1.apply_discount()