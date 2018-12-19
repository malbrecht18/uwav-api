'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    session_id: DataTypes.STRING,
    playlist_id: DataTypes.STRING
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
  };
  return Session;
};