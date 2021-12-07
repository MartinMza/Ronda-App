const { Membership, Organization } = require("../../models")

class AdminMembershipController {
    static async createMembership(req, res, next) {
        try {
          const membership = await Membership.create({
            name: req.body.name,
            credits: req.body.credits,
            location: req.body.location,
          });
          return res.status(201).send(membership);
        } catch (err) {
          next(err);
        }
      }
      static async updateMembership(req, res, next) {
        try {
          const membershipUpd = await Membership.update(req.body, {
            where: {
              id: req.params.id,
            },
            returning: true,
          });
          res.status(200).send(membershipUpd);
        } catch (err) {
          next(err);
        }
      }
    
      static async assignMembership(req, res, next) {
        try {
          const membership = await Membership.findOne({
            where: {
              name: req.params.mname,
            },
          });
          const organization = await Organization.findOne({
            where: {
              name: req.params.oname,
            },
          });

          await organization.addMembership(membership);
          await organization.update({
            avaliable_credits: organization.avaliable_credits += membership.credits
          })
        res.send({membership, organization});
        } catch (err) {
          next(err);
        }
      }
}

module.exports = AdminMembershipController



// await Organization.update(
//   { avaliable_credits: membership.credits },
//   {
//     where: {
//       name: organization.name,
//     },
//   }
// );
// await membership.addOrganizations(organization);
// res.status(201).send("membership updated successfully");