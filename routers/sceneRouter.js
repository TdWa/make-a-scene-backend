const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const {
  scene: Scene,
  actor: Actor,
  phrase: Phrase,
  comment: Comment,
} = require("../models");
const { Op } = require("sequelize");

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

// update a scene:
router.patch("/", authMiddleware, async (req, res) => {
  try {
    const { sceneId, sceneName, sceneDescription, script, actorIds } = req.body;

    // UPDATE THE SCENE
    const sceneToUpdate = await Scene.findByPk(sceneId);
    if (!sceneToUpdate) {
      return res.status(404).json({ message: "Scene not found" });
    }
    const updatedScene = await sceneToUpdate.update({
      name: sceneName,
      description: sceneDescription,
    });
    delete updatedScene.dataValues.createdAt;
    delete updatedScene.dataValues.updatedAt;
    delete updatedScene.dataValues.userId;

    // REMOVE PHRASES FROM THIS SCENE'S ACTORS IF THEY ARE NOT IN THE SCRIPT
    const phraseIdsToKeep = script.map((phrase) => phrase.id);

    await Phrase.destroy({
      where: {
        actorId: { [Op.in]: actorIds },
        id: { [Op.notIn]: phraseIdsToKeep },
      },
    });

    // UPDATE OR CREATE PHRASES IN THE SCRIPT
    const newScript = [];
    for (let i = 0; i < script.length; i++) {
      const phrase = script[i];
      phraseInDB = await Phrase.findByPk(phrase.id);
      if (phraseInDB) {
        const updatedPhrase = await phraseInDB.update({
          index: phrase.index,
          text: phrase.text,
        });
        delete updatedPhrase.dataValues.createdAt;
        delete updatedPhrase.dataValues.updatedAt;
        newScript.push(updatedPhrase.dataValues);
      } else {
        const newPhrase = await Phrase.create({
          actorId: phrase.actorId,
          index: phrase.index,
          text: phrase.text,
        });
        delete newPhrase.dataValues.createdAt;
        delete newPhrase.dataValues.updatedAt;
        newScript.push(newPhrase.dataValues);
      }
    }

    res.status(200).json({ scene: updatedScene.dataValues, script: newScript });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

// delete a scene:
router.delete("/", authMiddleware, async (req, res) => {
  try {
    const { sceneId } = req.body;

    await Comment.destroy({
      where: {
        sceneId: sceneId,
      },
    });

    const sceneActors = await Actor.findAll({
      where: {
        sceneId: sceneId,
      },
      attributes: ["id"],
      raw: true,
    });

    for (let i = 0; i < sceneActors.length; i++) {
      await Phrase.destroy({
        where: {
          actorId: sceneActors[i].id,
        },
      });
    }

    await Actor.destroy({
      where: {
        sceneId: sceneId,
      },
    });

    await Scene.destroy({
      where: {
        id: sceneId,
      },
    });

    res.status(200).json(sceneId);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
