'use strict';

const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4()
    },
    session_id: DataTypes.STRING,
    playlist_id: DataTypes.STRING
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
  };
  return Session;
};