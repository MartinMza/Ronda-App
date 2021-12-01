
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
