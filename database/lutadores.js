const {Sequelize, DataTypes} = require('sequelize')
const database = require('./conexao')

const bd_lutadores = database.define('bd_lutadores', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },

    nacionalidade: {
        type: Sequelize.STRING
    },

    peso : {
        type: Sequelize.DOUBLE
    },

    categoria : {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    vitorias: {
        type: Sequelize.INTEGER
    },

    derrotas: {
        type: Sequelize.INTEGER
    },

    empates: {
        type: Sequelize.INTEGER
    },

    winrate: {
        type: Sequelize.STRING 
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
})

bd_lutadores.sync({force:true})

module.exports = bd_lutadores