const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        senha: DataTypes.STRING,
        email: DataTypes.STRING,
        nome: DataTypes.STRING,
        nascimento: DataTypes.DATE,
        cpf: DataTypes.BIGINT(11),
        telefone: DataTypes.BIGINT(11),
        }, {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    });
  
    return User;
  };
  
  module.exports = UserModel;