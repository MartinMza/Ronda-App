const {Post, User} = require('../models');

class PostController{
    //find one using sequelize
    static async getAllByCampus(req, res){
        try{
            const posts = await Post.findAll({
                where: {
                    campusId: req.params.campusId
                }
            });
            res.send(posts);
        }catch(err){
            res.status(500).send(err);
        }
    }
    /* static async getAll(req, res){   TESTING PURPOSES
        try{
            const posts = await Post.findAll();
            res.send(posts);
        }catch(err){
            res.status(500).send(err);
        } 
    } */
    static async getByUser(req, res){
        try{
            const posts = await Post.findAll({
                where: {
                    userId: req.params.userId
                },
                include: {
                    model: User
                }
            });
            res.send(posts);
        }catch(err){
            res.status(500).send(err);
        }
    }
    static async getOneById(req, res){
        try{
            const post = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    }

    //----------------------------CREATE---------------------------------

    static async create(req, res){
        try{
            const post = await Post.create({
                content: req.body.content,
                userId: req.user.id,
                campusId: req.user.campusId,
            });
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    }
    //----------------------------UPDATE---------------------------------

    static async update(req, res){
        try{
            const post = await Post.findOne({where: {
                id: req.params.id
            }})
            if (req.user.id !== post.userId && req.user.role !== "admin") {
                return res.status(403).json({
                  message: "You are not authorized to update this post",
                });
              }
            return res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    }

    //----------------------------DELETE---------------------------------

    static async delete(req, res){
        try{
            const post = await Post.findOne({where: {
                id: req.params.id
            }});
            if (req.user.id !== post.userId && req.user.role !== "admin") {
                return res.status(403).json({
                  message: "You are not authorized to delete this post",
                });
              }
            await post.destroy();
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    } 
}

module.exports = PostController;