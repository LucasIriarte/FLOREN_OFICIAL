import { sequelize, DataTypes, UUIDV4} from 'sequelize';

sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        value: UUIDV4
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    }
})