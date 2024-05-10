exports.encodeToken = (email, userId) => {
  const key = process.env.TOKEN_KEY;
  const expire = { expireIn: "30d" };
  const payload = { email: email, userId: userId };
  return jwt.sign(payload, key, expire);
};

exports.decodeToken = (token) => {
  try {
    const key = process.env.TOKEN_KEY;
    return jwt.verify(token, key);
  } catch (error) {
    return null;
  }
};
