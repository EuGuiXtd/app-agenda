const { User } = require('../models');
const { GenerateToken } = require('../utils/generateJwt');
const md5 = require('md5');

  const addUser = async (
    senha, 
    email, 
    nome,
    nascimento,
    cpf,
    telefone, 
    ) => {
    const user = await User.findOne({
      where: { email },
    });
    if (user) {
      return { type: 'INPUTS_IN_USE', message: 'User already registered' };
    }
    const newuser = await User.create({ senha, email, nome, nascimento, cpf, telefone});
    return { type: null,  message: newuser };
  };

  const loginUser = async (senha, email) => {
    const senhaCodificada = md5(senha);
  
    const user = await User.findOne({
      where: { senha: senhaCodificada, email },
    });
    
    if (!user) {
      return { type: 'INVALID_EMAIL/SENHA', message: 'User Not Found' };
    }
    const token = await GenerateToken(user.name, email,);
    return { type: null, message: { token } };
  };


  const getAll = async () => {
    const users = await User.findAll();
  
    return users;
  };

  const deleteUser = async (id) => {
    const user = await User.destroy(
      { where: { id } },
    );
    if (user === 0) {
      return { type: 'INVALID_ID', message: 'User not found'};
    }
    return { type: null, message: 'User deleted'};
  };

  const updateUser = async (
    id, 
    senha,
    email,
    nome,
    nascimento,
    cpf,
    telefone,
    ) => {
    const [updatedUser] = await User.update(
      { senha, email, nome, nascimento, cpf, telefone},
      { where: { id } },
    );
    if (updatedUser === 0) {
      return { type: 'INVALID_ID', message: 'User not found'};
    }
    return { type: null, message: 'User updated'};
  };

module.exports = {
  addUser,
  getAll,
  deleteUser,
  updateUser,
  loginUser
};