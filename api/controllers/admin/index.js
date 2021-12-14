const adminUserController = require('./user');
const adminMembershipController = require('./membership');
const adminReservationController = require('./reservation');
const adminRoomController = require('./room');
const adminCommentController = require('./comment');
const adminPostController = require('./post');
const superAdminController = require('./superAdmin');
const adminOrganizationController = require('./organization');

module.exports = {
    adminUserController,
    adminMembershipController,
    adminReservationController,
    adminRoomController,
    adminCommentController,
    adminPostController,
    adminOrganizationController,
    superAdminController
}