import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({
      success: false,
      message: "Please Login First",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = tokenDecode.id;

    next();
  } catch (error) {
    console.log("Auth error:", error);

    return res.json({
      success: false,
      message: "Invalid token. Please login again",
    });
  }
};

export default authMiddleware;
