# Hall Booking API

This API manages hall/room bookings for an application.

## API Documentation

For detailed documentation of the API endpoints and how to use them, please refer to the [Hall Booking API Documentation on Postman](https://documenter.getpostman.com/view/35034228/2sA3XPDNw2).

## Endpoints

### 1. Create a Room

- **URL**: `POST /api/createRoom`
- **Description**: Creates a new room with specified details.
- **Request Body**:
  ```json
  {
    "Roomname": "Room A",
    "seats": 50,
    "amenities": "Projector, Whiteboard",
    "pricePerHour": 100
  }

Book a Room
URL: POST /api/booking
Description: Books a room for a customer for a specified date and time.
Request Body:
{
  "customerName": "John Doe",
  "date": "2024-06-20",
  "startTime": "14:00",
  "endTime": "16:00",
  "roomid": 1
}
List all Rooms with Booked Data
URL: GET /api/bookedDetails
Description: Retrieves all rooms with their booking details.

 
List all Customers with Booked Data
URL: GET /api/customerDetails
Description: Retrieves all customers with their booked room details.

Count Customer Bookings
URL: GET /api/bookingCount
Description: Counts how many times each customer has booked a room.

Technologies Used
Express
Node.js


