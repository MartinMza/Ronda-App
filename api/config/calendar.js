const {google} = require('googleapis');
const {OAuth2} = google.auth
const oAuth2Client = new OAuth2(process.env.GOOGLE_CALENDAR_CLIENT_ID, process.env.GOOGLE_CALENDAR_CLIENT_SECRET)

oAuth2Client.setCredentials({refresh_token:process.env.GOOGLE_CALENDAR_REFRESH_TOKEN})

const calendar= google.calendar({version:"v3", auth: oAuth2Client})

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDate() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
    summary: "Meet with andy and julio",
    location: "Adress 1234",
    description: "Tomar falopa del culo de un enano peludo.",
    start: {
        dateTime: eventStartTime,
        timeZone: "America/Buenos_Aires"
    },
    end: {
        dateTime: eventEndTime,
        timeZone: "America/Buenos_Aires"
    },
    colorId: 1,
}

calendar.freebusy.query({
    resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: "America/Buenos_Aires",
        items: [{ id: "primary" }],
    }
}, (err,res)=> {
    if(err) return console.error("Free Busy query error", err)

    const eventsArr = res.data.calendars.primary.busy
    if(eventsArr.length === 0) return calendar.events.insert({calendarId: "primary", resource: event }, err=>{
        if (err) return console.error("Calendar event creation error:", err)

        return console.log("calendar event created")
    })
    return console.log("Sorry i'm busy")
})
