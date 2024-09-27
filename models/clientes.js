'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Alquiler, {
        foreignKey: 'clienteRegistrado',
        as: 'Alquiler' 
      });
    }
  }

  Clientes.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    numeroLicencia: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  return Clientes;
};
