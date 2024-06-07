import { sequelize, DataTypes, UUIDV4} from 'sequelize';
import { Product } from './Product';

sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        value: UUIDV4
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    }
})

User.hasMany(Product, {
    foreignKey: 'ProductId',
    sourceKey: "id"
})

Product.belongsTo(User, {
    foreignKey: "ProductId",
    targetId: "id"
})