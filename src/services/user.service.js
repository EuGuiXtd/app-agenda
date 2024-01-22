const { User } = require('../models');

const createUser = async (senha, email) => {
    const newUser = await User.create({ senha, email });
  
    return newUser;
  };


  const getAll = async () => {
    const users = await User.findAll();
  
    return users;
  };

module.exports = {
  createUser,
  getAll,
};