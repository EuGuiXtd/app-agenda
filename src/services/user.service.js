const { User } = require('../models');

  const addUser = async (senha, email,) => {
    const user = await User.findOne({
      where: { email },
    });
    if (user) {
      return { type: 'INPUTS_IN_USE', message: 'User already registered' };
    }
    const newuser = await User.create({ senha, email });
    return { type: null, message: newuser };
  };


  const getAll = async () => {
    const users = await User.findAll();
  
    return users;
  };

  const deleteUser = async (id) => {
    const user = await User.destroy(
      { where: { id } },
    );
  
    console.log(user); 
    return user;
  };

module.exports = {
  addUser,
  getAll,
  deleteUser,
};