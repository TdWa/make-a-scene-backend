const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");
const { user: User, scene: Scene, actor: Actor } = require("../models");
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .json({ message: "Please provide an email, password and a name" });
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    console.log("newUser.id", newUser.id);
    console.log("newUser.dataValues.id", newUser.dataValues.id);

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ message: "There is an existing account with this email" });
    }

    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Scene,
          attributes: ["id", "name"],
          include: [
            {
              model: Actor,
              attributes: ["id", "type", "name", "backgroundColor", "color"],
            },
          ],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!user) {
      return res.status(404).json({
        message: "User with that email not found",
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).json({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).json({ ...req.user.dataValues });
});

module.exports = router;
