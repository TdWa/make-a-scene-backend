const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/constants");
app.set("json spaces", 2);

// const productRouter = require("./routers/productRouter");
// const userRouter = require("./routers/userRouter");
// const orderRouter = require("./routers/orderRouter");
// const loginRouter = require("./routers/loginRouter");
// const authMiddleware = require("./auth/middleware");
// const meRouter = require("./routers/meRouter");

app.use(cors());
app.use(express.json());
// app.use("/login", loginRouter);
// app.use("/me", authMiddleware, meRouter);
// app.use("/orders", authMiddleware, orderRouter);
// app.use("/products", productRouter);
// app.use("/users", userRouter);

app.get("/", async (req, res, next) => {
  res.json("hello world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// test development branch
// test login-system branch
