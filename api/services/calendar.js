const { Room, Organization, Reservation }= require("../models");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CALENDAR_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

class GoogleCalendarAPI {
  static async getCalendars(req, res) {
    try {
      const calendars = await calendar.calendarList.list();
      res.status(200).json({ calendars: calendars.data.items });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
  static async getSingleEvent(req, res) {
    try {
      const event = await calendar.events.get({
        calendarId: req.params.calendarId,
        eventId: req.params.eventId,
      });
      res.status(200).json({ event: event.data });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  static async setEvent(req, res) {
    try {
      const uniqueId = (length = 16) => {
        return parseInt(
          Math.ceil(Math.random() * Date.now())
            .toPrecision(length)
            .toString(36)
        );
      };
      const calendarIdDetector = () => {
        switch (req.body.location) {
          case "Sala Grande Belgrano":
            return "dpgat7mp9g3iqb1vl33044q1t8@group.calendar.google.com";
            break;
          case "Sala Mediana Belgrano":
            return "mefoahcm5d4o2vug0mcb8chppo@group.calendar.google.com";
            break;
          case "Sala Chiquita Belgrano":
            return "clcgphnh6pd1r06kcd3gnvpr4g@group.calendar.google.com";
            break;
          case "Sala Grande Recoleta":
            return "bd853a232n0euu5l5do7ecdng0@group.calendar.google.com";
            break;
          case "Sala Mediana Recoleta":
            return "6f5j31cnmj87kgp77lcb84h020@group.calendar.google.com";
            break;
          case "Sala Chiquita Recoleta":
            return "l5u9tg3427n15evsojvetlcb0k@group.calendar.google.com";
            break;
          default:
            return "BAD LOCATION";
        }
      };
      const calendarId = calendarIdDetector();

      const start = new Date(
        req.body.syear,
        req.body.smonth,
        req.body.sday,
        req.body.shours,
        req.body.sminutes
      );
      const end = new Date(
        req.body.eyear,
        req.body.emonth,
        req.body.eday,
        req.body.ehours,
        req.body.eminutes
      );
      const rest = end - start;
      const horas = rest / 3600000;

      const event = {
        summary: "Reserva de sala",
        location: req.body.location,
        description: `Reserva de sala`,
        start: {
          dateTime: start,
          timeZone: "America/Buenos_Aires",
        },
        end: {
          dateTime: end,
          timeZone: "America/Buenos_Aires",
        },
        colorId: 1,
        id: uniqueId(),
      };

      const room = await Room.findOne({
        where: {
          name: req.body.location,
        },
      });

      const organization = await Organization.findOne({
        where: {
          id: req.user.organizationId,
        },
      });

      const events = await calendar.freebusy.query(
        {
          resource: {
            timeMin: start,
            timeMax: end,
            timeZone: "America/Buenos_Aires",
            items: [{ id: calendarId }],
          },
        },
        (err, response) => {
          if (err)
            return res
              .status(500)
              .json({ message: "Free Busy query error", err });

          const eventsArr = response.data.calendars[calendarId].busy;

          if (eventsArr.length === 0) {
            if (organization.avaliable_credits >= room.credit_value) {
              calendar.events.insert({ calendarId, resource: event }, (err) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ message: "Calendar event creation error", err });
                }

                organization.update({
                  avaliable_credits:
                    organization.avaliable_credits - room.credit_value * horas,
                });
                

                Reservation.create({
                    eventId:event.id,
                    calendarId:calendarId,
                    location:req.body.location,
                    
                })
                return res.status(200).send(event);
              });
            } else {
              return res.status(500).json({ message: "No tenes credito." });
            }
          } else {
            return res.status(500).json({ message: "sorry im busy" });
          }
        }
      );
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  static async getEvents(req, res) {
    try {
      const start = new Date(
        req.body.syear,
        req.body.smonth,
        req.body.sday,
        req.body.shours,
        req.body.sminutes
      );
      const end = new Date(
        req.body.eyear,
        req.body.emonth,
        req.body.eday,
        req.body.ehours,
        req.body.eminutes
      );
      const events = await calendar.events.list({
        calendarId: "primary",
        timeMin: start,
        timeMax: end,
        timeZone: "America/Buenos_Aires",
        singleEvents: true,
        orderBy: "startTime",
      });
      res.status(200).json({ events: events.data.items });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const calendarIdDetector = () => {
        switch (req.body.location) {
          case "Sala Grande Belgrano":
            return "dpgat7mp9g3iqb1vl33044q1t8@group.calendar.google.com";
            break;
          case "Sala Mediana Belgrano":
            return "mefoahcm5d4o2vug0mcb8chppo@group.calendar.google.com";
            break;
          case "Sala Chiquita Belgrano":
            return "clcgphnh6pd1r06kcd3gnvpr4g@group.calendar.google.com";
            break;
          case "Sala Grande Recoleta":
            return "bd853a232n0euu5l5do7ecdng0@group.calendar.google.com";
            break;
          case "Sala Mediana Recoleta":
            return "6f5j31cnmj87kgp77lcb84h020@group.calendar.google.com";
            break;
          case "Sala Chiquita Recoleta":
            return "l5u9tg3427n15evsojvetlcb0k@group.calendar.google.com";
            break;
          default:
            return "BAD LOCATION";
        }
      };
      const calendarId = calendarIdDetector();

      const evento = await calendar.events.get({
        calendarId: calendarId,
        eventId: req.params.eventId,
      });

      const room = await Room.findOne({
        where: {
          name: req.body.location,
        },
      });
      const organization = await Organization.findOne({
        where: {
          id: req.user.organizationId,
        },
      });
      const end = parseInt(evento.data.end.dateTime.slice(11, 13));
      const start = parseInt(evento.data.start.dateTime.slice(11, 13));
      const horas = end - start;

      await organization.update({
        avaliable_credits:
          organization.avaliable_credits + room.credit_value * horas,
      });

      const event = await calendar.events.delete({
        calendarId: calendarId,
        eventId: req.params.eventId,
      });
      res.status(200).json({ event });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}

module.exports = GoogleCalendarAPI;
