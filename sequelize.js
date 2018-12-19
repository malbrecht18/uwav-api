const Sequelize = require('sequelize');
const SessionModel = require('./models/session');
const Op = Sequelize.Op;

const sequelize = new Sequelize('uwav', 'root', 'test', {
  host: '172.19.0.2',
  dialect: 'mysql',
  operatorAliases: Op,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Session = SessionModel(sequelize, Sequelize);

sequelize.sync({
    force: true
}).then(() => {
    console.log(`Database and tables created !`);
});

module.exports = {
    Session
};