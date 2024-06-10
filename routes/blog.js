const express =require("express")

const router = express.Router()


const { dummyLink } = require("../model/dummyPage")
const {createComment} = require("../controllers/commentController")
const {createPost,getAllPost} = require("../controllers/postController")
const {createLike,dislikePost} = require("../controllers/likeController")
// router.get("/dummyRoute", dummyLink);

//router
router.post("/createComment",createComment)
router.post("/createPost",createPost)
router.get("/getAllPost",getAllPost)
router.post("/createLike",createLike)
router.post("/dislikePost",dislikePost)

module.exports = router;