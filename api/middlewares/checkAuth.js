const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.status(401).json({
        status: 401,
        error: 'You are not authorized to perform this action',
        });
    }
}

module.exports = checkAuth;