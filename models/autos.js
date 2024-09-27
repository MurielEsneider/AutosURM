'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Autos.hasMany(models.Alquiler, {
        foreignKey: 'autoAlquilado',
        as: 'Alquiler' 
      });
    }
  }

  Autos.init({
    marca: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    año: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Auto',
  });

  return Autos;
};
