const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/constants");
app.set("json spaces", 2);

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const sceneRouter = require("./routers/sceneRouter");
const commentRouter = require("./routers/commentRouter");

app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/users", userRouter);
app.use("/scenes", sceneRouter);
app.use("/comments", commentRouter);

app.get("/test", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
