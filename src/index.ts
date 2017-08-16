// import logger from './lib/logger'
// import database from './lib/database'
// import { run as runInserts } from './lib/database-inserts'
import app from './app'
// import { config } from 'aws-sdk'
// import { join } from 'path'
// import { awsInit } from './lib/aws'

const port = process.env.PORT || 3000,
// logServer = () => logger.info(`Listening on port ${port}`),
startServer = () => app.listen(port, () => {
    console.log();
    console.log(` -> Servidor :  Vagas fitness [API] Iniciado...`);
    console.log(` -> Porta    : ${port}`);
    console.log(` -> Ambiente : ${process.env.NODE_ENV}`);
    console.log();
})

Promise.resolve(process.env.NODE_ENV)
.then(result => {
    if(result)
        return true;
    else 
        throw new Error("Variavel NODE_ENV não definida: NODE_ENV=(development|homologation|production) node build/");
})
// .then(() => database.then((sequelize) => sequelize.sync()))
// .then(() => runInserts())
// .then(() => config.loadFromPath(join(__dirname, 'config/aws.json')))
// .then(() => awsInit())
.then(() => startServer())
.catch(error => {
    console.log(error.message);
});