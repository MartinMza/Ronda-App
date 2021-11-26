const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).json({
      status: 401,
      error: "You are not authorized to perform this action",
    });
  }
};
const checkAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).send({
      status: 403,
      error: "You are not an admin",
    });
  }
};
const checkSuperAdmin = (req, res, next) => {
  if (req.user.role === "superAdmin") {
    next();
  } else {
    return res.status(403).send({
      status: 403,
      error: "You are not a SuperAdmin",
    });
  }
};

module.exports = { checkAuth, checkAdmin, checkSuperAdmin };
