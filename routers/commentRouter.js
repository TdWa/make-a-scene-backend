const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { comment: Comment, user: User } = require("../models");

const router = new Router();

// delete a comment
router.delete("/", authMiddleware, async (req, res) => {
  try {
    const { commentId } = req.body;

    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }
    await comment.destroy();

    res
      .status(200)
      .json({ id: commentId, sceneId: comment.dataValues.sceneId });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

// create a new comment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { sceneId, userId, text } = req.body;

    const user = await User.findByPk(userId, {
      attributes: ["name"],
    });
    if (!user) {
      return res.status(404).json({
        message: `User with userId ${userId} not found`,
      });
    }

    const comment = await Comment.create({
      sceneId,
      userId,
      text,
    });
    delete comment.dataValues.updatedAt;

    res
      .status(200)
      .json({ ...comment.dataValues, userName: user.dataValues.name });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
