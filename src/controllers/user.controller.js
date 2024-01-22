const UserService = require('../services/user.service');

const createUser = async (req, res) => {
    try {
      const { senha, email } = req.body;
      console.log(senha);
      const newUser = await UserService.createUser(senha, email);
  
      return res.status(201).json(newUser);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };
  

  const getAll = async (_req, res) => {
    try {
      const users = await UserService.getAll();
      return res.status(200).json(users);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Ocorreu um erro' });
    }
  };

module.exports = {
  createUser,
  getAll,
};