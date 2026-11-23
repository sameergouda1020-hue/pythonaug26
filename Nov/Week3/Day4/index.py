# 1. Encapsulation – Product Management

class Product:
    def __init__(self, price):
        self.__price = price

    def update_price(self, new_price):
        if new_price > 0:
            self.__price = new_price
            print("Price updated successfully.")
        else:
            print("Invalid price.")

    def display_price(self):
        print("Product Price: ₹", self.__price)


product1 = Product(500)
product1.display_price()
product1.update_price(800)
product1.display_price()


# 2. Single Inheritance – Library

class Library:
    def library_info(self):
        print("Welcome to City Library")
        print("Library Timing: 9 AM to 6 PM")


class BookSection(Library):
    def display_books(self):
        print("Available Books:")
        print("1. Python Programming")
        print("2. Data Science")
        print("3. Computer Networks")


book_section = BookSection()
book_section.library_info()
book_section.display_books()


# 3. Multiple Inheritance – Smart Home

class Light:
    def turn_on_light(self):
        print("Light is ON")

    def turn_off_light(self):
        print("Light is OFF")


class Fan:
    def turn_on_fan(self):
        print("Fan is ON")

    def turn_off_fan(self):
        print("Fan is OFF")


class SmartHome(Light, Fan):
    def control_home(self):
        print("Smart Home System Activated")


home = SmartHome()
home.control_home()
home.turn_on_light()
home.turn_on_fan()
home.turn_off_light()
home.turn_off_fan()


# 4. Multilevel Inheritance – Education

class Education:
    def education_info(self):
        print("Education provides knowledge and skills.")


class School(Education):
    def school_info(self):
        print("School Name: ABC Public School")
        print("Classes: 1 to 12")


class OnlineSchool(School):
    def online_info(self):
        print("Online classes are available.")
        print("Students can learn from home.")


online_school = OnlineSchool()
online_school.education_info()
online_school.school_info()
online_school.online_info()


# 5. Hierarchical Inheritance – Vehicles

class Vehicle:
    def vehicle_info(self):
        print("This is a vehicle.")


class Car(Vehicle):
    def car_info(self):
        print("Car has four wheels.")


class Bus(Vehicle):
    def bus_info(self):
        print("Bus is used for public transportation.")


class Bike(Vehicle):
    def bike_info(self):
        print("Bike has two wheels.")


car = Car()
car.vehicle_info()
car.car_info()

bus = Bus()
bus.vehicle_info()
bus.bus_info()

bike = Bike()
bike.vehicle_info()
bike.bike_info()


# 6. Hybrid Inheritance – Smart Devices

class Device:
    def device_info(self):
        print("This is an electronic device.")


class Computer(Device):
    def computer_info(self):
        print("This is a computer.")


class Television(Device):
    def television_info(self):
        print("This is a television.")


class SmartDevice(Computer, Television):
    def smart_device_info(self):
        print("This is a smart device with multiple features.")


smart_device = SmartDevice()
smart_device.device_info()
smart_device.computer_info()
smart_device.television_info()
smart_device.smart_device_info()


# 7. Polymorphism – Notification System

class EmailNotification:
    def send(self):
        print("Email notification sent successfully.")


class SMSNotification:
    def send(self):
        print("SMS notification sent successfully.")


class PushNotification:
    def send(self):
        print("Push notification sent successfully.")


notifications = [
    EmailNotification(),
    SMSNotification(),
    PushNotification()
]

for notification in notifications:
    notification.send()


# 8. Abstraction – Online Booking

from abc import ABC, abstractmethod


class Booking(ABC):
    @abstractmethod
    def confirm_booking(self):
        pass


class HotelBooking(Booking):
    def confirm_booking(self):
        print("Hotel booking confirmed successfully.")


class FlightBooking(Booking):
    def confirm_booking(self):
        print("Flight booking confirmed successfully.")


hotel = HotelBooking()
hotel.confirm_booking()

flight = FlightBooking()
flight.confirm_booking()