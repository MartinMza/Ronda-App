const { Organization } = require("../../models")

class AdminOrganizationController {
    static async updateOrganization(req, res, next) {
        try {            
            const result = await Organization.update(req.body, {
                where: {
                    id: req.params.orgId,
                }
            })
            res.status(200).json({
                message: "Update organization success",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AdminOrganizationController