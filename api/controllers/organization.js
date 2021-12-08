const { Organization, User } = require("../models");

class OrganizationController {
  static async getAllEmpresas(req, res, next) {
    try {
      const org = await Organization.findAll({
        where: {
          type: "Empresa",
        },
      });
      res.status(200).send(org);
    } catch (err) {
      next(err);
    }
  }

  static async createEmpresa(req, res, next) {
    try {
      const { name, CUIT, social_reason, date_time_fc, date_fc, phone } =
        req.body;
      const organization = await Organization.create({
        name,
        CUIT,
        social_reason,
        date_time_fc,
        date_fc,
        phone,
        type: "Empresa",
      });
      await User.update(
        {
          organizationId: organization.id,
          role: "organizationAdmin",
          org_state: "approved",
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(201).send("Empresa creada, vos sos el admin");
    } catch (err) {
      console.log(err)
      next(err);
    }
  }
  static async createParticular(req, res, next) {
    try {
      const { name, CUIT, social_reason, date_time_fc, date_fc, phone } =
        req.body;
      const organization = await Organization.create({
        name,
        CUIT,
        social_reason,
        date_time_fc,
        date_fc,
        phone,
        type: "Particular",
      });
      await User.update({
        where: {
          id: req.user.id,
        },
        organizationId: organization.id,
        role: "organizationAdmin",
        org_state: "approved",
      });
      res.status(201).send("Particular creado");
    } catch (err) {
      next(err);
    }
  }

  static async addUserToOrganization(req, res, next) {
    try {
      const organization = await Organization.findOne({
        where: {
          name: req.params.name,
        },
      });

      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      await user.update({
        organizationId: organization.dataValues.id,
      });

      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  }

  static async confirmUser(req, res, next) {
    try {
      if (req.user.role !== "organizationAdmin") {
        return res.status(403).send("No tienes permisos para esta accion");
      }
      const organization = await Organization.findOne({
        where: {
          id: req.user.organizationId,
        },
      });
      if (organization.id !== req.user.organizationId) {
        return res.status(403).send("No tienes permisos para esta accion");
      }
      await User.update({
        where: {
          id: req.params.userId,
        },
        org_state: "approved",
      });
      res.status(201).send("Usuario Confirmado");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = OrganizationController;
