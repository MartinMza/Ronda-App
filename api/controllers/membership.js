const { Membership, Organization } = require("../models")

class MembershipController {
    static async getMembership(req, res){
        try {
            const organizationMembership = await Organization.findOne({
                where: {
                    id: req.user.organizationId
                },
                include: [{model: Membership}]
            })
            return res.send(organizationMembership.memberships[0]);            
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = MembershipController;
