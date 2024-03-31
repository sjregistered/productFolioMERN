module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type : DataTypes.DOUBLE,
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        published : {
            type : DataTypes.BOOLEAN,
            allowNull : false
        }
    })

    return Product;
}