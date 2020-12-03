const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  user: User,
  scene: Scene,
  actor: Actor,
  phrase: Phrase,
} = require("../models");

const router = new Router();

// get a user as an author
router.get("/:id", async (req, res) => {
  try {
    const authorId = Number(req.params.id);

    const user = await User.findByPk(authorId, {
      include: [
        {
          model: Scene,
          attributes: ["id", "name", "description"],
          include: [
            {
              model: Actor,
              attributes: ["id", "type", "name", "backgroundColor", "color"],
              include: [
                {
                  model: Phrase,
                  attributes: ["id", "actorId", "index", "text"],
                },
              ],
            },
          ],
        },
      ],
      attributes: { exclude: ["email", "password", "createdAt", "updatedAt"] },
    });

    if (!user) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

// update about text of user
router.patch("/", authMiddleware, async (req, res) => {
  try {
    const newAbout = req.body.about;
    const updatedUser = await req.user.update({
      about: newAbout,
    });
    res.status(200).json(updatedUser.dataValues.about);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
