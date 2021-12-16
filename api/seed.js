const { User, Membership, Campus, Room, Turno, Organization } = require("./models");
const db = require("./config/db");

const fakeUsers = [
  {
    name: "SuperAdmin",
    email: "superadmin@gmail.com",
    password: "123456",
    role: "superadmin",
    phone: 1144495880,
    confirmed: true,
    org_state: "approved"
  
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
    org_state: "approved"
  },{
    name: "Martin",
    email: "martin@gmail.com",
    password: "123456",
    role: "user",
    phone: 1133395880,
    confirmed: true,
  },{
    name: "Kath",
    email: "kath@gmail.com",
    password: "123456",
    role: "user",
    phone: 1144495880,
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
 
    name: "Sala Chiquita Belgrano",

    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
    campusId: 1,
  },
  {
  
    name: "Sala Mediana Belgrano",

    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
    campusId: 1,
  },
  {
   
    name: "Sala Grande Belgrano",

    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
    campusId: 1,
  },
  {
  
    name: "Sala Chiquita Recoleta",

    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
    campusId: 2
  },
  {
   
    name: "Sala Mediana Recoleta",

    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
    campusId: 2,
  },
  {
    
    name: "Sala Grande Recoleta",

    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
    campusId: 2,
  },
];



fakeOrganization = [{
  name: "TestUno",
  CUIT: "12345678910",
  date_time_fc: "10/10/2020",
  social_reason: "Monotributista",
  day_fc:"10/10/2021",
  phone: "123456789",
  type:"Empresa"
},
{
  name: "TestDos",
  CUIT: "12345678911",
  date_time_fc: "10/10/2020",
  social_reason: "Monotributista",
  day_fc:"10/10/2021",
  phone: "123456789",
  type:"Empresa"
},
{
  name: "TestTres",
  CUIT: "12345678912",
  date_time_fc: "10/10/2020",
  social_reason: "Monotributista",
  day_fc:"10/10/2021",
  phone: "123456789",
  type:"Empresa"
},
{
  name: "TestCuatro",
  CUIT: "12345678913",
  date_time_fc: "10/10/2020",
  social_reason: "Monotributista",
  day_fc:"10/10/2021",
  phone: "123456789",
  type:"Empresa"
},{
  name: "TestUno",
  CUIT: "12345678914",
  date_time_fc: "10/10/2020",
  social_reason: "Monotributista",
  day_fc:"10/10/2021",
  phone: "123456789",
  type:"Empresa"
}]

//make a fakeTurnoARR for every room

const seed = async () => {
  try {
   

    console.log("Seeding...");
    await User.bulkCreate(fakeUsers);
    await Campus.bulkCreate(fakeCampus);
    await Room.bulkCreate(fakeRoom);
    await Membership.bulkCreate(fakeMemberships);
    await Organization.bulkCreate(fakeOrganization);
    return process.exit();
  } catch (error) {
    console.log(error);
    return process.exit();
  }
};

seed();
