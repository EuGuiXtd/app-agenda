const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        senha: DataTypes.STRING,
        email: DataTypes.STRING,
    });
  
    return User;
  };
  
  module.exports = UserModel;