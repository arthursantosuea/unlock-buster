import jwt from "jsonwebtoken";

function verifyToken(request, response, next) {
  const { token } = request.body;
  const SECRET = process.env.SECRET;
  try {
    const decoded = jwt.verify(token, SECRET);
    return response.status(200).json({
      authenticated: true,
      userId: decoded.id,
    });
    next();
  } catch (error) {
    return response.status(401).json({
      authenticated: false,
    });
  }
}

export default verifyToken;
