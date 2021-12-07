const {google} = require('googleapis');
const {OAuth2} = google.auth
const oAuth2Client = new OAuth2(process.env.GOOGLE_CALENDAR_CLIENT_ID, process.env.GOOGLE_CALENDAR_CLIENT_SECRET)

oAuth2Client.setCredentials({refresh_token:process.env.GOOGLE_CALENDAR_REFRESH_TOKEN})

const calendar= google.calendar({version:"v3", auth: oAuth2Client})

// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDate() + 2)

// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDate() + 4)

// const event = {
//     summary: "Reserva",
//     location: "Adress 1234",
//     description: "Tomar falopa del culo de un enano peludo.",
//     start: {
//         dateTime: eventStartTime,
//         timeZone: "America/Buenos_Aires"
//     },
//     end: {
//         dateTime: eventEndTime,
//         timeZone: "America/Buenos_Aires"
//     },
//     colorId: 1,
// }

// calendar.freebusy.query({
//     resource: {
//         timeMin: eventStartTime,
//         timeMax: eventEndTime,
//         timeZone: "America/Buenos_Aires",
//         items: [{ id: "primary" }],
//     }
// }, (err,res)=> {
//     if(err) return console.error("Free Busy query error", err)

//     const eventsArr = res.data.calendars.primary.busy
//     if(eventsArr.length === 0) return calendar.events.insert({calendarId: "primary", resource: event }, err=>{
//         if (err) return console.error("Calendar event creation error:", err)

//         return console.log("calendar event created")
//     })
//     return console.log("Sorry I'm busy")
// })

//date from new Date(year, monthIndex, day, hours, minutes)

class GoogleCalendarAPI{
    static async setEvent(req, res){
        try{
            const start = new Date(req.body.syear ,req.body.smonth, req.body.sday, req.body.shours, req.body.sminutes)
            const end = new Date(req.body.eyear ,req.body.emonth, req.body.eday, req.body.ehours, req.body.eminutes)
            const event = {
                summary: "Reserva de sala",
                location: req.body.location,
                description: `Reserva de sala`,
                start: {
                    dateTime: start,
                    timeZone: "America/Buenos_Aires"
                },
                end: {
                    dateTime: end,
                    timeZone: "America/Buenos_Aires"
                },
                colorId: 1
            }

            const events = await calendar.freebusy.query({
                resource: {
                    timeMin: start,
                    timeMax: end,
                    timeZone: "America/Buenos_Aires",
                    items: [{ id: "primary" }],
                }
            }, (err,response)=> {
                if(err) return res.status(500).json({message: "Free Busy query error", err})

                const eventsArr = response.data.calendars.primary.busy

                if(eventsArr.length === 0) return calendar.events.insert({calendarId: "primary", resource: event }, err=>{
                    if (err) return res.status(500).json({message: "Calendar event creation error", err})
                    return res.status(200).json({message: "Calendar event created"})
                })
                
                return res.status(500).json({message: "Sorry I'm busy"})
            })
            // const {data} = await calendar.events.insert({calendarId: "primary", resource: event })
            // res.status(200).json({data})

            // calendar.freebusy.query({
            //     resource: {
            //         timeMin: start,
            //         timeMax: end,
            //         timeZone: "America/Buenos_Aires",
            //         items: [{ id: "primary" }],
            //     }
            // }, (err,res)=> {
            //     if(err) return console.error("Free Busy query error", err)
            
            //     const eventsArr = res.data.calendars.primary.busy
            //     if(eventsArr.length === 0) return calendar.events.insert({calendarId: "primary", resource: event }, err=>{
            //         if (err) return console.error("Calendar event creation error:", err)
            
            //         return res.send("created")
            //     })
            //     return res.sendStatus(403)
            // })
        }catch(err){
            res.status(500).json({err})
        }
    }
}

module.exports = GoogleCalendarAPI