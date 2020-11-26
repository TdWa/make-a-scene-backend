const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

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
