
const sortByDate = (arrOfMessages) => {
  return arrOfMessages.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
};

export const updateModelsTheFirstDayOfTheMonth = async (Organization, Membership) => {
  const date = new Date();
  if (date.getDate() !== 1) {
    return;
  } else {
    const orgs = await Organization.findAll();
    const ORG = orgs.filter((org) => {
      return org.membershipId;
    });
    ORG.map(async (org) => {
      const membership = await Membership.findOne({
        where: {
          id: org.membershipId,
        },
      });
      await Organization.update(
        { avaliable_credits: membership.credits },
        {
          where: {
            name: org.name,
          },
        }
      );
    });
  }
};



const rooms = [
  {
    id: 1,
    name: "Sala Chiquita Belgrano",
    campus: "Belgrano",
    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
  },
  {
    id: 2,
    name: "Sala Mediana Belgrano",
    campus: "Belgrano",
    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
  },
  {
    id: 3,
    name: "Sala Grande Belgrano",
    campus: "Belgrano",
    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
  },
  {
    id: 4,
    name: "Sala Chiquita Recoleta",
    campus: "Recoleta",
    capacity: 4,
    description: "sala de reuniones para pequeños grupos",
    photo: " no hay foto",
    credit_value: 10,
  },
  {
    id: 5,
    name: "Sala Mediana Recoleta",
    campus: "Recoleta",
    capacity: 8,
    description: "sala de reuniones para grupos medianos",
    photo: " no hay foto",
    credit_value: 50,
  },
  {
    id: 6,
    name: "Sala Grande Recoleta",
    campus: "Recoleta",
    capacity: 12,
    description: "sala de reuniones para grandes grupos",
    photo: " no hay foto",
    credit_value: 75,
  },
];

const turn = [
  //------------------------------------------------------SALA 2
  {
    time: "9:00-10:00",
    day: "Lunes",
    roomId: 1
  },
  {
    time: "14:00-15:00",
    day: "Lunes",
    roomId: 1
  },
  {
    time: "18:00-19:00",
    day: "Lunes",
    roomId: 1
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
]


//for each room, make a new array of turns wit the room id
const lastArr = [] 
rooms.forEach(room => {
  turn.map(turn => {
    return lastArr.push({ ...turn, roomId: room.id }) 
  })
})