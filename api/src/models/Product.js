import { sequelize, DataTypes, UUIDV4} from 'sequelize';

export const Product = sequelize.define('Product', {
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