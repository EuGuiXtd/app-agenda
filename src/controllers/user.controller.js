const UserService = require('../services/user.service');
const md5 = require('md5');

const addUser = async (req, res) => {
  const {  
    email, 
    nome,
    nascimento,
    cpf,
    telefone,  
  } = req.body;
  const senha = md5(req.body.senha);

  const { type, message } = await UserService.addUser(senha, email, nome, nascimento, cpf, telefone);

  if (type === 'INPUTS_IN_USE') {
    return res.status(409).json(message);
  }

  return res.status(201).json(message);
};
  

const loginUser = async (req, res) => {
  const { senha, email } = req.body;

  const { type, message } = await UserService.loginUser(senha, email);

  if (type === 'INVALID_EMAIL/SENHA') {
    return res.status(404).json(message);
  }

  return res.status(200).json(message);
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
    const { id } = req.params;
    const { type, message } = await UserService.deleteUser(id);
    if (type === 'INVALID_ID') {
      return res.status(404).json(message);
    }
    return res.status(200).json(message);
  };

  const updateUser = async (req, res) => {
    const { id } = req.params;
    const { 
      email, 
      nome,
      nascimento,
      cpf,
      telefone,  
    } = req.body;
    const senha = md5(req.body.senha);
    const { type, message } = await UserService.updateUser(id, senha, email, nome, nascimento, cpf, telefone);
    if (type === 'INVALID_ID') {
      return res.status(404).json(message);
    }
    if (type === 'INPUTS_IN_USE') {
      return res.status(409).json(message);
    }
    return res.status(200).json(message);
  }

module.exports = {
  addUser,
  getAll,
  deleteUser,
  updateUser,
  loginUser
};