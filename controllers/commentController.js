const Post = require("../model/postModel")
const Comment = require("../model/commentModel")


exports.createComment = async(req,res)=>{
    try{
        //fetch data from req body
        const {post,user,body} = req.body

        //create comment object
        const comment = new Comment({post,user,body})
        
        //save data in DataBase
        const saveComment = await comment.save()

        //Find ID in post and update the new comment in comment array
        const updatePost = await Post.findByIdAndUpdate(post, {$push:{comments:saveComment._id}} ,{new:true})
        .populate("comments")
        .exec()

        res.json({
            post:updatePost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"The error in comment "}
        )

    }
}
