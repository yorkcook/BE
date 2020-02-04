const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const UserRouter = require("../users&auth/usersRouter");
const AuthRouter = require("../users&auth/authRouter");
const InvRouter = require("../inventory/inventoryRouter");
const KitRouter = require("../kitchens/kitchensRouter");
const UnitRouter = require("../units/unitsRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", UserRouter);
server.use("/api/auth", AuthRouter);
server.use("/api/inventory", InvRouter);
server.use("/api/kitchens", KitRouter);
server.use("/api/units", UnitRouter);

server.get("/", (req, res) => {
  res.send("Server Running");
});

module.exports = server;
