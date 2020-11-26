const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/constants");
app.set("json spaces", 2);

// const productRouter = require("./routers/productRouter");
// const orderRouter = require("./routers/orderRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");

app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/users", userRouter);
// app.use("/orders", authMiddleware, orderRouter);
// app.use("/products", productRouter);

app.get("/test", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
