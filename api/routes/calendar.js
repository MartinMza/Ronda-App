const router = require('express').Router();
const GoogleCalendarAPI = require('../services/calendar');

router.post('/set', GoogleCalendarAPI.setEvent);

router.get('/get/:calendarId', GoogleCalendarAPI.getEvents);
router.get('/getcalendar', GoogleCalendarAPI.getCalendars)
router.get('/getone/:eventId/:calendarId', GoogleCalendarAPI.getSingleEvent);

router.delete('/delete/:eventId/:location', GoogleCalendarAPI.deleteEvent);

module.exports = router;