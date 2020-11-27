const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { scene: Scene, actor: Actor } = require("../models");

const router = new Router();

// create a new scene
router.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.dataValues.id;
    const { sceneName, actors } = req.body;

    const scene = await Scene.create({
      userId,
      name: sceneName,
    });
    const sceneId = scene.dataValues.id;

    // Won't need these in the frontend I think!
    delete scene.dataValues.createdAt;
    delete scene.dataValues.updatedAt;
    delete scene.dataValues.userId;

    const { actor1, actor2 } = actors;
    const firstActor = await Actor.create({
      sceneId,
      type: actor1.type,
      name: actor1.name,
      backgroundColor: actor1.backgroundColor,
      color: actor1.color,
    });

    // Won't need these in the frontend I think!
    delete firstActor.dataValues.createdAt;
    delete firstActor.dataValues.updatedAt;
    delete firstActor.dataValues.sceneId;

    if (!actor2) {
      return res.status(200).json({
        ...scene.dataValues,
        actors: [{ ...firstActor.dataValues }],
      });
    }
    const secondActor = await Actor.create({
      sceneId,
      type: actor2.type,
      name: actor2.name,
      backgroundColor: actor2.backgroundColor,
      color: actor2.color,
    });

    // Won't need these in the frontend I think!
    delete secondActor.dataValues.createdAt;
    delete secondActor.dataValues.updatedAt;
    delete secondActor.dataValues.sceneId;

    res.status(200).json({
      ...scene.dataValues,
      actors: [{ ...firstActor.dataValues }, { ...secondActor.dataValues }],
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
