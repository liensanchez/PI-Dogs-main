const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Temperaments', {
    id: {
      type: DataTypes.STRING,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true
    },
    name :{
      type: DataTypes.STRING,
    }
  },{
    timestamp:false
  });
};

