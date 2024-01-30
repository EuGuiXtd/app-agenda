require('dotenv').config();
const jwt = require('jsonwebtoken');

const GenerateToken = async (nome, email) => {
  const secret = process.env.JWT_SECRET

  const payload = {
    nome,
    email,
  };
    const token = jwt.sign(payload, secret);
    return token;
};
module.exports = { GenerateToken };