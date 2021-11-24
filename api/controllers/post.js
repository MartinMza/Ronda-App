const {Post} = require('../models');

class PostController{
    //find one using sequelize
    static async getAllByCampus(req, res){
        try{
            const posts = await Post.findAll({
                where: {
                    campus: req.params.campus
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
            const content = req.body.content;
            const post = await Post.create({
                content,
                userId: req.user.id,
            });
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    }

    //----------------------------UPDATE---------------------------------

    static async update(req, res){
        try{
            const post = await Post.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    }

    //----------------------------DELETE---------------------------------

    static async delete(req, res){
        try{
            const post = await Post.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send(post);
        }catch(err){
            res.status(500).send(err);
        }
    } 
}

module.exports = PostController;