import json

patient = {
    "patient_id": 1001,
    "name": "Aarav Sharma",
    "age": 35,
    "disease": "Fever",
    "doctor_name": "Dr. Mehta"
}

with open("patient_info.json", "w", encoding="utf-8") as file:
    json.dump(patient, file, indent=4)

with open("patient_info.json", "r", encoding="utf-8") as file:
    patient_data = json.load(file)

print("Patient Information")
for key, value in patient_data.items():
    print(f"{key.replace('_', ' ').title()}: {value}")
