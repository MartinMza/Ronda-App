const { User, Membership, Campus, Room, Turno } = require("./models");
const db = require("./config/db");

const fakeUsers = [
  {
    name: "SuperAdmin",
    email: "superadmin@gmail.com",
    password: "123456",
    role: "superadmin",
    phone: 1144495880,
    confirmed: true,
  },
  {
    name: "Andy",
    email: "andy@gmail.com",
    password: "123456",
    role: "user",
    phone: 1149295880,
    confirmed: true,
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    phone: 1148595880,
    confirmed: true,
  },
];
const fakeMemberships = [
  {
    name: "FlexB",
    credits: 100,
    location: "Belgrano",
  },
  {
    name: "PremiumB",
    credits: 500,
    location: "Belgrano",
  },
  {
    name: "FlexR",
    credits: 100,
    location: "Recoleta",
  },
  {
    name: "PremiumR",
    credits: 500,
    location: "Recoleta",
  },
];

const fakeCampus = [
  {
    name: "Belgrano",
    description: "sede de Belgrano facherita viva peron",
    photo: " no hay foto",
  },
  {
    name: "Recoleta",
    description: "sede de Recoleta re careta",
    photo: " no hay foto",
  },
];

const fakeRoom = [
  {
    id: 1,
    name: "Sala Chiquita Belgrano",

    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
    campusId: 1,
  },
  {
    id: 2,
    name: "Sala Mediana Belgrano",

    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
    campusId: 1,
  },
  {
    id: 3,
    name: "Sala Grande Belgrano",

    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
    campusId: 1,
  },
  {
    id: 4,
    name: "Sala Chiquita Recoleta",

    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
    campusId: 2,reservations
  },
  {
    id: 5,
    name: "Sala Mediana Recoleta",

    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
    campusId: 2,
  },
  {
    id: 6,
    name: "Sala Grande Recoleta",

    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
    campusId: 2,
  },
];

const fakeTurno = [
  //------------------------------------------------------SALA 1
  {
    time: "9:00-10:00",
    day: "Lunes",
  },
  {
    time: "14:00-15:00",
    day: "Lunes",
  },
  {
    time: "18:00-19:00",
    day: "Lunes",
  },
  {
    time: "9:00-10:00",
    day: "Martes",
  },
  {
    time: "14:00-15:00",
    day: "Martes",
  },
  {
    time: "18:00-19:00",
    day: "Martes",
  },
  {
    time: "9:00-10:00",
    day: "Miercoles",
  },
  {
    time: "14:00-15:00",
    day: "Miercoles",
  },
  {
    time: "18:00-19:00",
    day: "Miercoles",
  },
  {
    time: "9:00-10:00",
    day: "Jueves",
  },
  {
    time: "14:00-15:00",
    day: "Jueves",
  },
  {
    time: "18:00-19:00",
    day: "Jueves",
  },
  {
    time: "9:00-10:00",
    day: "Viernes",
  },
  {
    time: "14:00-15:00",
    day: "Viernes",
  },
  {
    time: "18:00-19:00",
    day: "Viernes",
  },
];

//make a fakeTurnoARR for every room

const seed = async () => {
  try {
    const lastArr = [];
    fakeRoom.forEach((room) => {
      fakeTurno.map((turn) => {
        return lastArr.push({ ...turn, roomId: room.id });
      });
    });

    console.log("Seeding...");
    await User.bulkCreate(fakeUsers);
    await Campus.bulkCreate(fakeCampus);
    await Room.bulkCreate(fakeRoom);
    await Turno.bulkCreate(lastArr);
    await Membership.bulkCreate(fakeMemberships);
    return process.exit();
  } catch (error) {
    console.log(error);
    return process.exit();
  }
};

seed();
