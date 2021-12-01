const {
  User,
  Organization,
  Membership,
  Campus,
  Room,
  Turno,
} = require("./models");
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
    name: "Flex",
    credits: 100,
    location: "Belgrano",
  },
  {
    name: "Premium",
    credits: 500,
    location: "Belgrano",
  },
  {
    name: "Flex",
    credits: 100,
    location: "Recoleta",
  },
  {
    name: "Premium",
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
    name: "Sala Chiquita Belgrano",
    campus: "Belgrano",
    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
  },
  {
    name: "Sala Mediana Belgrano",
    campus: "Belgrano",
    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
  },
  {
    name: "Sala Grande Belgrano",
    campus: "Belgrano",
    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
  },
  {
    name: "Sala Chiquita Recoleta",
    campus: "Recoleta",
    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
  },
  {
    name: "Sala Mediana Recoleta",
    campus: "Recoleta",
    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
  },
  {
    name: "Sala Grande Recoleta",
    campus: "Recoleta",
    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
  },
];

const fakeTurno = [
  {
    time: "9:00-10:00",
    day: "Lunes",
  },
  {
    time: "10:00-11:00",
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

const seed = async () => {
  await db.sync()
  console.log("Seeding...");
  await User.bulkCreate(fakeUsers);
  await Campus.bulkCreate(fakeCampus);
  await Room.bulkCreate(fakeRoom);
  await Turno.bulkCreate(fakeTurno);
  await Membership.bulkCreate(fakeMemberships);
  return process.exit();
};

seed();

