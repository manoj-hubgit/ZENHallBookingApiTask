import express from "express";
import { createBooking, createRoom, customerBooked, customerBookedCount, displayRooms, roomsWithBookedData } from "../Controllers/RoomController.js";

const router=express.Router();

router.post('/createRoom',createRoom)
router.get('/allrooms',displayRooms)
router.post('/booking',createBooking)
router.get('/bookedDetails',roomsWithBookedData)
router.get('/customerDetails',customerBooked)
router.get('/bookingCount',customerBookedCount)


export default router;