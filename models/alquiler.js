'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alquiler.belongsTo(models.Cliente, {
        foreignKey: 'clienteRegistrado',
        as: 'Cliente' 
      });
      Alquiler.belongsTo(models.Auto, { 
        foreignKey: 'autoAlquilado',
        as: 'Auto' 
      });
    }
  }

  Alquiler.init({
    clienteRegistrado: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    autoAlquilado: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    fechaInicioAlquiler: {
      type: DataTypes.DATE,
      allowNull: false 
    },
    fechaFinAlquiler: {
      type: DataTypes.DATE,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Alquiler',
  });

  return Alquiler;
};
