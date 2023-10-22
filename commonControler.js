const User = require("../model/userModel");
const Post = require("../model/postModel");
const Comment = require("../model/commentModel");
const comController = {
  user: async (req, res) => {
    var myData = new User(req.body);
    let userCreated = await myData.save();
    res.send(userCreated);
  },
  post: async (req, res) => {
    var myData = new Post(req.body);
    let postCreated = await myData.save();
    res.send(postCreated);
  },
  comment: async (req, res) => {
    var myData = new Comment(req.body);
    let commentdata = await myData.save();
    res.send(commentdata);
  },
  getData: async (req, res) => {
    const userId = req.body.userId;
    let result = await Comment.findById(userId)
      .populate("author")
      .populate("post")
      // .populate({
      //   path: "comments",
      //   populate: {
      //     path: "author",
      //   },
      // });
    res.send(result);
  },
};
module.exports = comController;
