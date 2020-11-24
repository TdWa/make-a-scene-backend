const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/constants");
app.set("json spaces", 2);

// const productRouter = require("./routers/productRouter");
// const userRouter = require("./routers/userRouter");
// const orderRouter = require("./routers/orderRouter");
const authRouter = require("./routers/authRouter");

app.use(cors());
app.use(express.json());
app.use("/", authRouter);
// app.use("/orders", authMiddleware, orderRouter);
// app.use("/products", productRouter);
// app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
