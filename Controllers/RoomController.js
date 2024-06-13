let rooms = [];
let booking = [];

export const createRoom = (req, res) => {
    const { Roomname, seats, amenities, pricePerHour } = req.body;
    const newRoom = {
        roomid: rooms.length + 1,
        Roomname: Roomname,
        seats: seats,
        amenities: amenities,
        pricePerHour: pricePerHour,
        bookings: []
    };
    rooms.push(newRoom);
    res.status(200).send("New room added successfully");
};

export const displayRooms = (req, res) => {
    res.status(200).send(rooms);
};

export const createBooking = (req, res) => {
    const { customerName, date, startTime, endTime, roomid } = req.body;

    const room = rooms.find(ele => ele.roomid == roomid);
    if (!room) {
        return res.status(400).send("Room not found");
    }
    const Booking = room.bookings.some(ele => ele.date === date && ((startTime >= ele.startTime && startTime < ele.endTime) || (endTime > ele.startTime && endTime <= ele.endTime)));
    if (Booking) {
        return res.status(400).json("Room is already booked");
    }
    const newBooking = {
        bookingId: booking.length + 1,
        customerName: customerName,
        date: date,
        startTime: startTime,
        endTime: endTime,
        roomid: roomid
    };
    booking.push(newBooking);
    room.bookings.push(newBooking);
    res.status(200).send("Room booked successfully");
};


export const roomsWithBookedData = (req, res) => {
    const data = rooms.map(room => ({
        Roomname: room.Roomname,
        bookings: room.bookings.length > 0 ? room.bookings.map(booking => ({
            bookedStatus: "Booked",
            customerName: booking.customerName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        })) : [{ bookedStatus: "Available" }]
    }));
    res.status(200).send(data);
};

export const customerBooked = (req, res) => {
    const customerBookedDetails = booking.map(book => {
        const room = rooms.find(room => room.roomid === book.roomid);
        return {
            customerName: book.customerName,
            roomName: room ? room.Roomname : "Unknown Room",
            date: book.date,
            startTime: book.startTime,
            endTime: book.endTime
        };
    });
    res.status(200).send(customerBookedDetails);
};

export const customerBookedCount = (req, res) => {
    const bookingCounts = booking.reduce((acc, book) => {
        if (!acc[book.customerName]) {
            acc[book.customerName] = 0;
        }
        acc[book.customerName] += 1;
        return acc;
    }, {});

    res.status(200).send(bookingCounts);
};
