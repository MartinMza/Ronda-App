const router = require('express').Router();
const GoogleCalendarAPI = require('../services/calendar');

router.post('/set', GoogleCalendarAPI.setEvent);

router.get('/get', GoogleCalendarAPI.getEvents);
router.get('/getcalendar', GoogleCalendarAPI.getCalendars)

router.get('/getone/:eventId', GoogleCalendarAPI.getSingleEvent);

router.delete('/delete/:eventId', GoogleCalendarAPI.deleteEvent);
module.exports = router;