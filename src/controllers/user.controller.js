const UserService = require('../services/user.service');



const error500Message = 'Algo deu errado';

const addUser = async (req, res) => {
  const { senha, email } = req.body;

  const { type, message } = await UserService.addUser(senha, email);

  if (type === 'INPUTS_IN_USE') {
    return res.status(409).json({ message });
  }

  return res.status(201).json({ message });
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

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
  
      return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };

module.exports = {
  addUser,
  getAll,
  deleteUser,
};