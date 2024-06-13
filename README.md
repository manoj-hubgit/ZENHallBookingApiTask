Hall Booking API
This API manages hall/room bookings for an application.

API Documentation
For detailed documentation of the API endpoints and how to use them, please refer to the Hall Booking API Documentation on Postman.

Endpoints
1. Create a Room
URL: POST /api/createRoom
Description: Creates a new room with specified details.
Request Body:
json
Copy code
{
  "Roomname": "Room A",
  "seats": 50,
  "amenities": "Projector, Whiteboard",
  "pricePerHour": 100
}
Response: Status 200 OK
2. Book a Room
URL: POST /api/booking
Description: Books a room for a customer for a specified date and time.
Request Body:
json
Copy code
{
  "customerName": "John Doe",
  "date": "2024-06-20",
  "startTime": "14:00",
  "endTime": "16:00",
  "roomid": 1
}
Response: Status 200 OK
3. List all Rooms with Booked Data
URL: GET /api/bookedDetails
Description: Retrieves all rooms with their booking details.
Response:
json
Copy code
[
  {
    "Roomname": "Room A",
    "bookings": [
      {
        "bookedStatus": "Booked",
        "customerName": "John Doe",
        "date": "2024-06-20",
        "startTime": "14:00",
        "endTime": "16:00"
      }
    ]
  }
]
4. List all Customers with Booked Data
URL: GET /api/customerDetails
Description: Retrieves all customers with their booked room details.
Response:
json
Copy code
[
  {
    "customerName": "John Doe",
    "roomName": "Room A",
    "date": "2024-06-20",
    "startTime": "14:00",
    "endTime": "16:00"
  }
]
5. Count Customer Bookings
URL: GET /api/bookingCount
Description: Counts how many times each customer has booked a room.
Response:
json
Copy code
{
  "John Doe": 1
}
Technologies Used
Express
Node.js
