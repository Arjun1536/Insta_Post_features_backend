const Like = require("../model/likeModel")
const Post = require("../model/postModel")

exports.createLike = async (req,res)=>{
    try{
        const {post,user} = req.body
        const like = new Like({post,user})

        const savedLike = await like.save()

        //update with post model in like array

        const updateLike = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        res.json({
            post:updateLike
        })

    }
    catch(err){
        return res.status(500).json({
            err:"The error in comment "}
        )
    }
}


exports.dislikePost = async(req,res)=>{
    try{
        const {post,like} = req.body

    //find post and ID and delete the id
    const deleteID = await Like.findByIdAndDelete({post:post,_id:like})
    // Update post collection
    const updateDislike = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteID._id}},{new:true})

    res.json({post:updateDislike, 
        message:"succefully deleted like"
    })
    }
    catch(err){
        return res.status(500).json({
            err:"The error in dislike "}
        )

    }
}
