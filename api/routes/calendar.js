const router = require('express').Router();
const GoogleCalendarAPI = require('../services/calendar');

router.post('/set', GoogleCalendarAPI.setEvent);

module.exports = router;