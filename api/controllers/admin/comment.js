const {User} = require("../../models")

class AdminCommentController {
    static async deleteComment(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.userId,
                },
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = AdminCommentController;