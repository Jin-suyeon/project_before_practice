const { Users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const userInfo = await Users.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });

  if (!userInfo) {
    res.status(400).json({ data: null, message: "not ok" });
  }

  const payload = {
    id: userInfo.id,
    userId: userInfo.userId,
    email: userInfo.email,
    createdAt: userInfo.createdAt,
    updatedAt: userInfo.updatedAt,
  };

  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: "24h",
  });

  res
    .status(200)
    .cookie("refreshToken", refreshToken)
    .json({
      data: { accessToken: accessToken, userInfo: payload },
      message: "ok",
    });
};
