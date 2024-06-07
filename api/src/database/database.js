import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('FLOREN_OFICIAL', 'postgres', 'Postgres', {
    host: 'localhost',
    dialect:"postgres"
})