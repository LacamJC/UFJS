const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const sequelize = new Sequelize('UFJS', 'ramajo', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

async function carregarDados(){
    try {
        const sqlFilePath = path.join(__dirname,'initData.sql')
        const sqlScript = fs.readFileSync(sqlFilePath, 'utf-8')
        await sequelize.query(sqlScript)
        console.log("Dados iniciais carregados")
    } catch(error)
    {
        console.error('Erro ao carregar dados iniciais', error)
    }
}
sequelize
    .sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
        return carregarDados();
    })
    .catch((error) => console.error('Erro durante a sincronização do modelo:', error));

module.exports = sequelize