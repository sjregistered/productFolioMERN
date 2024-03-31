const dbConfig = require('../config/dbconfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases : false,

        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(then => console.log("Connected" + then))
.catch(err => console.log("ERROR : ", + err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);

db.products.hasMany(db.reviews, {
    foreignKey : 'product_id',
    as : 'review'
})

db.reviews.belongsTo(db.products, {
    foreignKey : 'product_id',
    as : 'product'
})

db.sequelize.sync({force : false})
.then(then => console.log("Yes, syncing exectuted with the API !! fine !!"))
.catch(err => console.error(err)); 

module.exports = db;