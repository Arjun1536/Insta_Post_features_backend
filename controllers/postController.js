const Post = require("../model/postModel")
exports.createPost = async(req,res)=>{
    try{
         const {title,body} = req.body
         const post = new Post({
            title,body
         })

         const savedPost = await post.save();

         res.json({
            post:savedPost,
         })


    }
    catch(err){
        return res.status(500).json({
            err:"error in post"
        })
        
    }

}

//Get all Post details using get functon

exports.getAllPost = async (req,res)=>{

    try{
    const posts = await Post.find().populate("likes").populate("comments").exec()
    res.json({
        posts
    })
}
catch(err){
    return res.status(500).json({
        err:"error in post"
    })
    
}

}